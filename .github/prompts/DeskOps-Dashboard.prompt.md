# DeskOps Dashboard Creation Guide

You are an expert Next.js + TypeScript dashboard architect specializing in
high-fidelity UI/UX systems. Build a production-ready operational dashboard
with the following specifications:

**You will REMOVE all the current dashboard code and it's related components and REPLACE it with a new implementation** (Compelete Deletion of old code is required Never duplicate any code always create new files Delete the old files).

---

## **PROJECT SCOPE**

### Core Requirements

- **Framework**: Next.js 15+ with App Router
- **Styling**: Tailwind CSS + custom Skeleton UI CSS for glass effects a
- **State Management**: React hooks (local) with optional Zustand for global state
- **Charts**: Recharts for data visualization
- **Animations**: Framer Motion for micro-interactions
- **Theme System**: Dark-first (default), light mode toggle
- **Responsiveness**: Mobile-first, desktop-optimized at 1920px+

---

## **DESIGN SYSTEM**

### Color Palette (Dark Theme - Primary)

**Background & Surfaces:**

- Primary BG: `rgba(10, 14, 39, 1)` (Deep Navy)
- Secondary BG: `rgba(26, 31, 58, 1)` (Slate Navy)
- Tertiary BG: `rgba(37, 46, 74, 1)` (Purple-Tinted Navy)
- Glass Surface: `rgba(255, 255, 255, 0.05)` with backdrop blur

**Accent Colors (Gradient-Ready):**

- Primary Gradient: `from-rgba(52, 211, 153, 1) to-rgba(34, 211, 238, 1)`
- Secondary Gradient: `from-rgba(139, 92, 246, 1) to-rgba(236, 72, 153, 1)`
- Tertiary Gradient: `from-rgba(251, 146, 60, 1) to-rgba(249, 115, 22, 1)`
- Success: `rgba(16, 185, 129, 1)` (Emerald)
- Warning: `rgba(245, 158, 11, 1)` (Amber)
- Critical: `rgba(239, 68, 68, 1)` (Red)
- Info: `rgba(59, 130, 246, 1)` (Blue)

**Text:**

- Primary: `rgba(241, 245, 249, 1)` (Off-White)
- Secondary: `rgba(203, 213, 225, 1)` (Light Gray)
- Tertiary: `rgba(148, 163, 184, 1)` (Muted Gray)
- Interactive Hover: `rgba(255, 255, 255, 1)`

### Color Palette (Light Theme - Secondary)

**Background & Surfaces:**

- Primary BG: `rgba(248, 250, 252, 1)` (Off-White)
- Secondary BG: `rgba(241, 245, 249, 1)` (Light Blue-Gray)
- Tertiary BG: `rgba(226, 232, 240, 1)` (Light Slate)
- Glass Surface: `rgba(255, 255, 255, 0.8)` with backdrop blur

**Text:**

- Primary: `rgba(15, 23, 42, 1)` (Near Black)
- Secondary: `rgba(51, 65, 85, 1)` (Dark Gray)
- Tertiary: `rgba(100, 116, 139, 1)` (Medium Gray)

---

## **COMPONENT ARCHITECTURE**

### Layout Structure

```lua
src/
├── components/
│   ├── Header.tsx (Title + Theme Toggle)
│   ├── Sidebar.tsx (Navigation + User Profile)
│   ├── MetricCard.tsx (KPI cards with animations)
│   ├── ChartCard.tsx (Chart wrapper with loading states)
│   ├── GlassContainer.tsx (Reusable glass effect container)
│   ├── Charts/
│   │   ├── LineChartComponent.tsx
│   │   ├── BarChartComponent.tsx
│   │   ├── AreaChartComponent.tsx
│   │   ├── PieChartComponent.tsx
│   │   └── ScatterChartComponent.tsx
│   ├──  Animations/
│   │   ├── AnimatedCounter.tsx
│   │   └── TransitionEffects.tsx
│   ├── Icon/
│   │   ├── Icon.tsx (Base icon wrapper)
│   │   ├── Icon.module.css (Icon styling)
│   │   ├── IconButton.tsx (Interactive icon button)
│   └── AnimatedIcon.tsx (Animated icon wrapper)
├── lib/
│   ├── theme.ts (Color system constants)
│   ├── constants.ts (Dashboard metrics data)
│   ├── utils.ts (Helper functions)
│   └──  icons/ (Icon system)
│               ├── index.ts (Centralized exports)
│               ├── dashboard.ts (Dashboard-specific icons)
│               ├── chart.ts (Chart-related icons)
│               ├── status.ts (Status/state icons)
│               ├── action.ts (Action/interactive icons)
│               └── theme.ts (Theme-related icons)
└── hooks/
    ├── useTheme.ts
    └── useMetricData.ts
```

---

## **KEY COMPONENTS SPECIFICATION**

### 1. MetricCard Component

**Features:**

- Animated number counter (0 to target value)
- Sparkline micro-chart (7-day trend)
- Percentage change indicator with color coding
- Gradient background with glass effect
- Hover scale + shadow animation
- Loading skeleton state

**Styling:**

- Border: 1px solid `rgba(255, 255, 255, 0.1)`
- Backdrop: `backdrop-blur-xl`
- Border Radius: `rounded-2xl`
- Shadow: Multi-layer, soft glow on hover
- Gradient Overlay: Subtle 45° gradient accent

### 2. ChartCard Component

**Features:**

- Title with icon + description
- Configurable height (300px, 400px, 500px)
- Responsive grid item sizing
- Loading shimmer animation
- Chart legend with color matching
- Tooltip with custom styling
- Export data button

**Styling:**

- Glass morphism with enhanced borders
- Smooth fade-in on mount
- Hover elevation effect
- Dark mode: Vibrant gradient accents
- Light mode: Subtle gradient accents

### 3. GlassContainer Component

**Features:**

- Reusable wrapper for all card-like elements
- Configurable blur intensity
- Optional gradient border animation
- Variants: `solid`, `gradient`, `interactive`
- Accessibility: Focus-visible states for keyboard nav

**Base Styles:**

```css
.glass-container {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 24px;
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 1px 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-container:hover {
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow:
    0 20px 48px rgba(0, 0, 0, 0.2),
    inset 1px 1px 0 rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
```

---

## **ANIMATION SPECIFICATIONS**

### Entrance Animations

- Fade + Scale: Duration 400ms, delay cascade
- Stagger effect: 50ms between cards
- Easing: \`cubic-bezier(0.23, 1, 0.320, 1)\` (Elastic Out)

### Interactive Animations

- Hover Scale: 1 → 1.02 (cards)
- Hover Glow: Box-shadow expansion
- Click Feedback: Spring animation (damping: 0.7)
- Number Counter: 1.2s linear duration with easing

### Micro-Animations

- Sparkline dots pulse every 3s
- Chart tooltip fade-in: 150ms
- Percentage badge color shimmer
- Loading skeleton wave: 2s loop

---

## **METRICS DASHBOARD LAYOUT**

### Grid Configuration

Row 1: 4 KPI Cards (25% width each)
Row 2: Inventory Chart (60%) | Material Movement (40%)
Row 3: Equipment Utilization (40%) | Manpower Attendance (30%) | Retention (30%)
Row 4: Received vs Dispatched Trend (60%) | Recycling Rate (40%)
Row 5:  DETAIL TABS: Movements | Equipment | Manpower (100%)

### Sample Metrics

1. Total Production Today
   - Value: Sum of all production entries (TON)
   - Change: % vs previous period
   - Trend: ↑ or ↓ with color (green/red)

2. Received Materials Today
   - Value: Sum of all received materials (TON)
   - Change: % vs previous period
   - Trend: ↑ or ↓ with color (green/red)

3. Total Dispatched Today
   - Value: Sum of all dispatch quantities (TON)
   - Change: % vs previous period
   - Trend: ↑ or ↓ with color (green/red)

4. Current Inventory Status
   - Value: Latest closing inventory (TON)
   - Change: % vs previous snapshot
   - Trend: ↑ or ↓ with color (green/red)

---

## **CHART COMPONENTS REQUIRED**

1. **FLOW TREND CHART (Production, Received, Dispatch)**: Featured Line Chart
   - Gradient line, area fill with opacity
   - Dynamic tooltips
   - Legend with toggle visibility

2. **INVENTORY BY MATERIAL**: Area Chart (Daily inventory by material over 30 days)
   - Stacked areas with blend modes
   - Interactive hover point
   - shows all material categories/types

3. **MATERIAL MOVEMENT**: Horizontal Bar Chart
   - Gradient bars with decay effect
   - Dropout percentage labels

4. **EQUIPMENT UTILIZATION**: Scatter Plot
   - usage hours per equipment type
   - Animated points on load
   - Equipment count legend

5. **MANPOWER ATTENDANCE**: Donut Chart
   - Animated segments on load
   - Legend with percentages
   - attendance vs absence
   - Hours & count breakdown

---

## **THEME TOGGLE IMPLEMENTATION**

```typescript
// Hook-based theme management
const useTheme = () => {
  const [isDark, setIsDark] = useState(true); // Dark default

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Update document class + store in localStorage
  };

  return { isDark, toggleTheme, theme: isDark ? darkTheme : lightTheme };
};
```

---

## **GLASS CSS LIBRARY**

Create a `glass.css` file with reusable classes:

```css
/* Glass Effects */
.glass-sm { backdrop-filter: blur(4px); }
.glass-md { backdrop-filter: blur(10px); }
.glass-lg { backdrop-filter: blur(20px); }

/* Gradient Borders */
.gradient-border-emerald {
  background: linear-gradient(135deg, rgba(16, 185, 129, 1), rgba(52, 211, 153, 1));
}

.gradient-border-violet {
  background: linear-gradient(135deg, rgba(139, 92, 246, 1), rgba(167, 139, 250, 1));
}

/* Glowing Effects */
.glow-emerald {
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
}

.glow-violet {
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
}

/* Glassmorphic Borders */
.glass-border {
  border: 1px solid;
  border-image: linear-gradient(135deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.05)) 1;
}

/* Animated Gradients */
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.gradient-animated {
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}
```

---

## **PERFORMANCE & ACCESSIBILITY**

### Performance

- Image optimization: Next.js Image component
- Code splitting: Dynamic imports for charts
- Data fetching: React Server Components where possible
- Memoization: useMemo for expensive calculations

### Accessibility

- ARIA labels on all interactive elements
- Keyboard navigation support (Tab, Arrow keys)
- Color contrast: WCAG AA minimum
- Focus visible states with glow effect
- Screen reader friendly metric descriptions

---

## **DELIVERABLES**

1. ✅ Fully functional Next.js dashboard
2. ✅ 5+ unique chart types with live data
3. ✅ Animated metric cards with counters
4. ✅ Dark + Light theme with smooth toggle
5. ✅ Glass morphism design throughout
6. ✅ Responsive (desktop)
7. ✅ Framer Motion animations on all interactive elements
8. ✅ TypeScript strict mode enabled
9. ✅ Comprehensive dataset included (Real API)

---

## **TECH STACK**

```json
{
  "nextjs": "15.1+",
  "react": "19+",
  "typescript": "5.7+",
  "tailwindcss": "4.0+",
  "recharts": "2.12+",
  "framer-motion": "11.0+",
  "zustand": "5.0+ (optional)",
  "date-fns": "3.6+",
  "lucide-react": "0.395+"
}
```

---

## **STYLING APPROACH**

Combine:

- **Tailwind utilities** for layout & spacing
- **CSS modules** for component-scoped glass effects
- **CSS-in-JS** (Framer Motion) for animations
- **Gradient combinations** for visual hierarchy
- **Glassmorphism** as primary design language

Use custom \`@layer\` directives in Tailwind config to extend
theme with glassmorphic utilities.

---

## **EXPECTED OUTCOME**

A production-grade, visually stunning dashboard that:

- Captures attention with sophisticated animations
- Balances dark theme beauty with light mode usability
- Displays data with clarity and elegance
- Performs at 90+ Lighthouse score
- Maintains full accessibility compliance
- Adapts beautifully across all screen sizes

## Icon System & Library Specification for Dashboard

---

## **ICON LIBRARY & CONFIGURATION**

### Primary Icon Library

```typescript
// Use Lucide React - Modern, consistent, SVG-based icons
// Installation: npm install lucide-react

/**
 * Why Lucide React:
 * ✅ 400+ beautiful icons
 * ✅ Lightweight (minimal bundle impact)
 * ✅ Perfect SVG scaling
 * ✅ Built for React/TypeScript
 * ✅ Easy to animate with Framer Motion
 * ✅ Accessible by default
 */
```

---

## **ICON CONFIGURATION FILE**

### `lib/icons/index.ts`

```typescript
// Icon Library Centralization
import {
  // Dashboard Icons
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  ShoppingCart,
  Target,
  Eye,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,

  // Chart Icons
  LineChart,
  AreaChart,
  BarChart,
  PieChart,
  ScatterChart,
  TrendingDown,

  // Navigation Icons
  Home,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronRight,

  // Status Icons
  Zap,
  Wifi,
  Bluetooth,
  Clock4,

  // Theme Icons
  Sun,
  Moon,
  Monitor,

  // Action Icons
  Download,
  Upload,
  Share2,
  Filter,
  Search,
  RefreshCw,
  Calendar,

  // Status Colors (Semantic)
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  Info,
  HelpCircle,
} from 'lucide-react';

/**
 * Icon Registry - Map semantic names to Lucide icons
 * Benefit: Single source of truth for icon selection
 */
export const IconRegistry = {
  // Dashboard Metrics
  revenue: DollarSign,
  users: Users,
  performance: TrendingUp,
  activity: Activity,
  orders: ShoppingCart,
  goals: Target,
  views: Eye,
  time: Clock,

  // Charts
  line: LineChart,
  area: AreaChart,
  bar: BarChart,
  pie: PieChart,
  scatter: ScatterChart,
  trend: TrendingUp,
  decline: TrendingDown,

  // Navigation
  home: Home,
  settings: Settings,
  logout: LogOut,
  menu: Menu,
  close: X,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,

  // Status
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  alert: AlertTriangle,
  critical: AlertOctagon,
  info: Info,
  help: HelpCircle,
  power: Zap,

  // Theme
  sun: Sun,
  moon: Moon,
  device: Monitor,

  // Actions
  download: Download,
  upload: Upload,
  share: Share2,
  filter: Filter,
  search: Search,
  refresh: RefreshCw,
  calendar: Calendar,
} as const;

// Type-safe icon names
export type IconName = keyof typeof IconRegistry;

// Export all individual icons
export {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  ShoppingCart,
  Target,
  Eye,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  LineChart,
  AreaChart,
  BarChart,
  PieChart,
  ScatterChart,
  TrendingDown,
  Home,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Zap,
  Wifi,
  Bluetooth,
  Clock4,
  Sun,
  Moon,
  Monitor,
  Download,
  Upload,
  Share2,
  Filter,
  Search,
  RefreshCw,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  Info,
  HelpCircle,
};
```

---

## **ICON COLOR SYSTEM**

### `lib/icons/theme.ts`

```typescript
/**
 * Icon Color Palette - Theme-aware
 * Syncs with dashboard color system
 */

export const IconColors = {
  // Dark Theme (Default)
  dark: {
    primary: 'rgba(241, 245, 249, 1)', // Off-white
    secondary: 'rgba(203, 213, 225, 1)', // Light gray
    tertiary: 'rgba(148, 163, 184, 1)', // Muted gray
    accent: {
      emerald: 'rgba(16, 185, 129, 1)',
      violet: 'rgba(139, 92, 246, 1)',
      amber: 'rgba(245, 158, 11, 1)',
      blue: 'rgba(59, 130, 246, 1)',
      pink: 'rgba(236, 72, 153, 1)',
      cyan: 'rgba(6, 182, 212, 1)',
    },
    status: {
      success: 'rgba(16, 185, 129, 1)',
      warning: 'rgba(245, 158, 11, 1)',
      critical: 'rgba(239, 68, 68, 1)',
      info: 'rgba(59, 130, 246, 1)',
    },
  },

  // Light Theme
  light: {
    primary: 'rgba(15, 23, 42, 1)', // Near black
    secondary: 'rgba(51, 65, 85, 1)', // Dark gray
    tertiary: 'rgba(100, 116, 139, 1)', // Medium gray
    accent: {
      emerald: 'rgba(5, 150, 105, 1)',
      violet: 'rgba(124, 58, 237, 1)',
      amber: 'rgba(217, 119, 6, 1)',
      blue: 'rgba(37, 99, 235, 1)',
      pink: 'rgba(219, 39, 119, 1)',
      cyan: 'rgba(8, 145, 178, 1)',
    },
    status: {
      success: 'rgba(5, 150, 105, 1)',
      warning: 'rgba(217, 119, 6, 1)',
      critical: 'rgba(220, 38, 38, 1)',
      info: 'rgba(37, 99, 235, 1)',
    },
  },
};

// Size mapping
export const IconSizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
} as const;

export type IconSize = keyof typeof IconSizes;

// Stroke width mapping
export const IconStrokeWidths = {
  thin: 1,
  normal: 1.5,
  bold: 2,
  extra: 2.5,
} as const;
```

---

## **BASE ICON COMPONENT**

### `components/Icon/Icon.tsx`

```typescript
'use client';

import React from 'react';
import { IconRegistry, IconName } from '@/lib/icons';
import { IconSizes, IconSize, IconColors } from '@/lib/icons/theme';
import { motion } from 'framer-motion';
import styles from './Icon.module.css';

interface IconProps {
  name: IconName;
  size?: IconSize;
  color?: 'primary' | 'secondary' | 'tertiary' | keyof typeof IconRegistry;
  variant?: 'solid' | 'outline' | 'gradient';
  stroke?: 'thin' | 'normal' | 'bold' | 'extra';
  animated?: boolean;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
  isDark?: boolean;
}

/**
 * Base Icon Component - Type-safe, themeable, animated
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    {
      name,
      size = 'md',
      color = 'primary',
      variant = 'solid',
      stroke = 'normal',
      animated = false,
      className = '',
      ariaLabel,
      onClick,
      isDark = true,
    },
    ref
  ) => {
    const IconComponent = IconRegistry[name];
    const sizePixels = IconSizes[size];

    // Get color value
    const themeColors = isDark ? IconColors.dark : IconColors.light;
    const iconColor =
      color in themeColors.status
        ? themeColors.status[color as keyof typeof themeColors.status]
        : color in themeColors.accent
        ? themeColors.accent[color as keyof typeof themeColors.accent]
        : themeColors[color as 'primary' | 'secondary' | 'tertiary'];

    const baseClasses = `
      inline-block
      flex-shrink-0
      ${onClick ? 'cursor-pointer' : ''}
      ${animated ? styles.animated : ''}
      ${className}
    `;

    const iconElement = (
      <IconComponent
        ref={ref}
        size={sizePixels}
        strokeWidth={
          {
            thin: 1,
            normal: 1.5,
            bold: 2,
            extra: 2.5,
          }[stroke]
        }
        color={iconColor}
        className={baseClasses}
        onClick={onClick}
        aria-label={ariaLabel || name}
        role={onClick ? 'button' : 'img'}
        tabIndex={onClick ? 0 : undefined}
      />
    );

    // Wrap with animation if needed
    if (animated) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {iconElement}
        </motion.div>
      );
    }

    return iconElement;
  }
);

Icon.displayName = 'Icon';
export default Icon;
```

---

## **ICON STYLING**

### `components/Icon/Icon.module.css`

```css
/* Base icon animations */
.animated {
  animation: iconFade 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes iconFade {
  from {
    opacity: 0;
    transform: scale(0.85) rotate(-10deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

/* Hover effects */
.icon:hover {
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.2));
  transition: all 0.2s ease;
}

/* Pulse animation */
.pulse {
  animation: iconPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes iconPulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Spin animation */
.spin {
  animation: iconSpin 1.5s linear infinite;
}

@keyframes iconSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Bounce animation */
.bounce {
  animation: iconBounce 1s ease-in-out infinite;
}

@keyframes iconBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

/* Gradient effect */
.gradient {
  background: linear-gradient(135deg, rgba(16, 185, 129, 1), rgba(139, 92, 246, 1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glow effect */
.glow {
  filter: drop-shadow(0 0 8px currentColor);
}
```

---

## **ANIMATED ICON COMPONENT**

### `components/Icon/AnimatedIcon.tsx`

```typescript
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icon';
import { IconName, IconSize } from '@/lib/icons';

interface AnimatedIconProps {
  name: IconName;
  size?: IconSize;
  color?: string;
  animation?: 'pulse' | 'spin' | 'bounce' | 'wave' | 'flip';
  duration?: number;
  isDark?: boolean;
}

/**
 * Animated Icon - Framer Motion-powered animations
 */
export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  name,
  size = 'md',
  color = 'primary',
  animation = 'pulse',
  duration = 2,
  isDark = true,
}) => {
  const animationVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.7, 1],
      transition: { duration, repeat: Infinity, ease: 'easeInOut' },
    },
    spin: {
      rotate: [0, 360],
      transition: { duration, repeat: Infinity, linear: true },
    },
    bounce: {
      y: [0, -8, 0],
      transition: { duration, repeat: Infinity, ease: 'easeInOut' },
    },
    wave: {
      rotate: [0, 15, -15, 0],
      transition: { duration, repeat: Infinity, ease: 'easeInOut' },
    },
    flip: {
      rotateY: [0, 360],
      transition: { duration, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      animate={animationVariants[animation]}
      style={{ display: 'inline-block' }}
    >
      <Icon
        name={name}
        size={size}
        color={color as any}
        isDark={isDark}
      />
    </motion.div>
  );
};

export default AnimatedIcon;
```

---

## **ICON BUTTON COMPONENT**

### `components/Icon/IconButton.tsx`

```typescript
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icon';
import { IconName, IconSize } from '@/lib/icons';

interface IconButtonProps {
  icon: IconName;
  onClick: () => void;
  size?: IconSize;
  color?: string;
  variant?: 'ghost' | 'solid' | 'outline' | 'gradient';
  disabled?: boolean;
  ariaLabel: string;
  isDark?: boolean;
  className?: string;
}

/**
 * Interactive Icon Button - With hover effects
 */
export const IconButton = React.forwardRef<
  HTMLButtonElement,
  IconButtonProps
>(
  (
    {
      icon,
      onClick,
      size = 'md',
      color = 'primary',
      variant = 'ghost',
      disabled = false,
      ariaLabel,
      isDark = true,
      className = '',
    },
    ref
  ) => {
    const variantStyles = {
      ghost: 'hover:bg-white/10',
      solid: 'bg-white/20 hover:bg-white/30',
      outline: 'border border-white/20 hover:border-white/40',
      gradient:
        'bg-gradient-to-r from-emerald-500/20 to-violet-500/20 hover:from-emerald-500/30 hover:to-violet-500/30',
    };

    return (
      <motion.button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
        className={`
          relative inline-flex items-center justify-center
          p-2 rounded-lg
          backdrop-blur-md
          transition-all duration-200
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          focus-visible:ring-emerald-500
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantStyles[variant]}
          ${className}
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon
          name={icon}
          size={size}
          color={color as any}
          isDark={isDark}
          animated
        />
      </motion.button>
    );
  }
);

IconButton.displayName = 'IconButton';
export default IconButton;
```

---

## **ICON USAGE EXAMPLES**

### MetricCard with Icon

```typescript
import { Icon } from '@/components/Icon/Icon';

export const MetricCard = ({ metric }) => {
  return (
    <div className="glass-container">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{metric.label}</p>
          <p className="text-3xl font-bold text-white">{metric.value}</p>
        </div>
        <Icon
          name={metric.icon}
          size="lg"
          color={metric.color}
          isDark={true}
          animated
        />
      </div>
    </div>
  );
};
```

### Dashboard Header with Theme Toggle

```typescript
import { IconButton } from '@/components/Icon/IconButton';
import { useTheme } from '@/hooks/useTheme';

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <IconButton
        icon={isDark ? 'sun' : 'moon'}
        onClick={toggleTheme}
        ariaLabel={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        variant="ghost"
        isDark={isDark}
      />
    </header>
  );
};
```

### Chart Card with Action Icons

```typescript
import { IconButton } from '@/components/Icon/IconButton';

export const ChartCard = ({ title, data }) => {
  return (
    <div className="glass-container">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex gap-2">
          <IconButton
            icon="refresh"
            onClick={() => refetch()}
            ariaLabel="Refresh chart"
            size="sm"
          />
          <IconButton
            icon="download"
            onClick={() => exportChart()}
            ariaLabel="Download chart"
            size="sm"
          />
        </div>
      </div>
      {/* Chart content */}
    </div>
  );
};
```

---

## **INTEGRATION WITH DASHBOARD PROMPT**

### Add to `globals.css`

```css
/* Import Lucide React icons (already included via npm) */
@import 'lucide-react/dist/lucide-react.css';

/* Add custom icon utilities to Tailwind */
@layer components {
  .icon-primary {
    @apply text-slate-100;
  }

  .icon-secondary {
    @apply text-slate-400;
  }

  .icon-accent-emerald {
    @apply text-emerald-400;
  }

  .icon-accent-violet {
    @apply text-violet-500;
  }

  .icon-accent-amber {
    @apply text-amber-400;
  }
}
```

### Add to `tailwind.config.ts`

```typescript
export default {
  theme: {
    extend: {
      animation: {
        'icon-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'icon-spin': 'spin 1.5s linear infinite',
        'icon-bounce': 'bounce 1s ease-in-out infinite',
      },
    },
  },
};
```
