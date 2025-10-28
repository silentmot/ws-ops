import { useAuth } from '@clerk/nextjs';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  details?: unknown;
}

interface ApiHook {
  get: <T>(url: string) => Promise<ApiResponse<T>>;
  post: <T>(url: string, data: unknown) => Promise<ApiResponse<T>>;
  put: <T>(url: string, data: unknown) => Promise<ApiResponse<T>>;
  delete: <T>(url: string) => Promise<ApiResponse<T>>;
}

export function useApi(): ApiHook {
  const { getToken } = useAuth();

  const makeRequest = async <T>(
    url: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> => {
    try {
      const token = await getToken();
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          ...options.headers,
        },
      });

      const responseData = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: responseData.error || 'Request failed',
          details: responseData.details,
        };
      }

      return { success: true, data: responseData };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  };

  return {
    get: <T>(url: string) => makeRequest<T>(url),
    post: <T>(url: string, data: unknown) =>
      makeRequest<T>(url, { method: 'POST', body: JSON.stringify(data) }),
    put: <T>(url: string, data: unknown) =>
      makeRequest<T>(url, { method: 'PUT', body: JSON.stringify(data) }),
    delete: <T>(url: string) => makeRequest<T>(url, { method: 'DELETE' }),
  };
}
