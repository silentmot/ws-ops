# Prisma Accelerate Integration

This package is configured to use [Prisma Accelerate](https://www.prisma.io/accelerate), which provides global caching and connection pooling for your database queries.

## Setup

The Prisma Client is automatically extended with Accelerate in `src/client.ts`:

```typescript
import { PrismaClient } from './generated/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const prisma = new PrismaClient().$extends(withAccelerate());
```

## Configuration

### Environment Variables

To use Prisma Accelerate, you need to configure your `DATABASE_URL` with an Accelerate connection string:

```bash
# .env
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=YOUR_API_KEY"
```

For local development without Accelerate, use a standard PostgreSQL connection string:

```bash
# .env.local
DATABASE_URL="postgresql://user:password@localhost:5432/deskops"
```

### Query Logging

Query logging is enabled in development mode. Control it with:

```bash
PRISMA_QUERY_LOG=true  # Enable detailed query logging
NODE_ENV=development    # Auto-enables query logging
```

## Using Cache Strategies

### Basic Caching

Add `cacheStrategy` to any query to enable caching:

```typescript
await prisma.material.findMany({
  where: { isActive: true },
  cacheStrategy: { ttl: 60 }, // Cache for 60 seconds
});
```

### Stale-While-Revalidate (SWR)

Serve cached data while fetching fresh data in the background:

```typescript
await prisma.site.findMany({
  where: { isActive: true },
  cacheStrategy: {
    ttl: 60,
    swr: 120, // Serve stale for up to 120s while revalidating
  },
});
```

### Cache Tags

Use tags for selective cache invalidation:

```typescript
await prisma.production.findMany({
  where: { siteId, date },
  cacheStrategy: {
    ttl: 300,
    tags: [`site:${siteId}`, `production:${date.toISOString()}`],
  },
});
```

## Cache Strategy Guidelines

### TTL Recommendations by Data Type

| Data Type                                 | TTL            | Rationale                         |
| ----------------------------------------- | -------------- | --------------------------------- |
| Master data (materials, sites, equipment) | 300-600s       | Changes infrequently              |
| Dashboard aggregations                    | 120-180s       | Balance freshness and performance |
| Recent transactions                       | 30-60s         | Moderate freshness requirement    |
| Real-time inventory                       | 10-30s or none | Critical freshness                |
| User sessions                             | No cache       | Always fresh                      |

### When to Use Caching

✅ **Use caching for:**

- Read-heavy queries (dashboards, reports)
- Master data lookups (materials, sites, equipment)
- Aggregations and analytics
- List views with pagination

❌ **Avoid caching for:**

- Mutations (create, update, delete)
- Real-time critical data
- User-specific sensitive data
- Queries with rapidly changing results

## Examples

See `src/examples/accelerate-usage.ts` for comprehensive examples including:

1. Basic caching with TTL
2. Conditional caching
3. Complex queries with includes
4. SWR strategies
5. Cache tags usage
6. Dashboard metrics caching
7. Real-time data handling

## Performance Benefits

### Connection Pooling

- Automatic connection management
- Reduced connection overhead
- Better resource utilization

### Global Caching

- Edge-cached query results
- Reduced database load
- Faster response times
- Lower latency globally

### Monitoring

When query logging is enabled, you'll see:

- Query execution details
- Parameter values
- Query duration
- Cache hits/misses (in Accelerate dashboard)

## Best Practices

1. **Start conservative**: Use shorter TTLs initially, increase based on data
2. **Monitor cache effectiveness**: Check Accelerate dashboard for hit rates
3. **Use SWR for dashboards**: Acceptable staleness with background refresh
4. **Tag aggressively**: Makes selective invalidation easier
5. **Test without cache**: Ensure queries work without caching enabled
6. **Document cache strategies**: Comment why specific TTLs are chosen

## Troubleshooting

### Cache not working?

- Verify `DATABASE_URL` uses Accelerate connection string
- Check Accelerate dashboard for query visibility
- Ensure `cacheStrategy` is properly typed

### Stale data issues?

- Reduce TTL for affected queries
- Use cache tags and invalidate on mutations
- Consider omitting cache for critical queries

### Type errors with extended client?

- Regenerate Prisma Client: `bunx prisma generate`
- Ensure `@prisma/extension-accelerate` is installed
- Check TypeScript version compatibility

## Resources

- [Prisma Accelerate Documentation](https://www.prisma.io/accelerate)
- [Cache Strategies Guide](https://www.prisma.io/docs/accelerate/caching)
- [Connection Pooling](https://www.prisma.io/docs/accelerate/connection-pooling)
- [Performance Best Practices](https://www.prisma.io/docs/accelerate/performance-best-practices)
