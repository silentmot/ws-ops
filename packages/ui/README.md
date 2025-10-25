# @ws-ops/ui

Production-ready UI component library for DeskOps workspace operations interface. Built with Radix UI primitives, Tailwind CSS, and TypeScript.

## Design Philosophy

- **Flat UI**: Minimal shadows and depth effects for a clean, modern interface
- **8px Grid System**: Consistent spacing throughout the application
- **Type Safety**: Full TypeScript support with strict type checking
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Dark Mode**: Built-in theme switching via CSS variables

## Installation

```bash
npm install @ws-ops/ui
```

## Components

### Button

Versatile button component with 6 variants and 4 sizes.

**Variants**: `default` | `destructive` | `outline` | `secondary` | `ghost` | `link`

**Sizes**: `default` | `sm` | `lg` | `icon`

```tsx
import { Button } from '@ws-ops/ui';

<Button variant="default">Click me</Button>
<Button variant="destructive" size="sm">Delete</Button>
<Button variant="outline" size="lg">Large Outline</Button>
<Button variant="ghost" size="icon"><Icon /></Button>
```

### Input

Styled text input with focus states and file input support.

```tsx
import { Input } from '@ws-ops/ui';

<Input type="text" placeholder="Enter your name" />
<Input type="email" placeholder="Email address" />
<Input type="file" />
<Input disabled placeholder="Disabled input" />
```

### Select

Dropdown select component with keyboard navigation.

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@ws-ops/ui';

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

### Card

Container component with optional header, content, and footer sections.

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@ws-ops/ui';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Brief description of the card content.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Badge

Inline status indicator with 6 variants.

**Variants**: `default` | `secondary` | `destructive` | `outline` | `success` | `warning`

```tsx
import { Badge } from '@ws-ops/ui';

<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Error</Badge>
```

### Tooltip

Contextual information overlay.

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@ws-ops/ui';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>
      <p>Helpful tooltip content</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## Utilities

### cn

Utility function for merging Tailwind CSS classes with proper precedence.

```tsx
import { cn } from '@ws-ops/ui';

const className = cn(
  'base-classes',
  condition && 'conditional-classes',
  'px-2 py-1',
  'px-4' // Overrides px-2
);
// Result: 'base-classes conditional-classes py-1 px-4'
```

## Theming

Components automatically adapt to light and dark themes using CSS variables. Toggle theme by adding/removing the `dark` class on the root element.

```tsx
// Light mode
<html>

// Dark mode
<html class="dark">
```

## CSS Variables

All components reference design tokens via CSS variables defined in `global.css`:

- **Colors**: `--primary`, `--secondary`, `--destructive`, `--success`, `--warning`, `--muted`
- **Backgrounds**: `--background`, `--card`, `--popover`
- **Borders**: `--border`, `--input`, `--ring`
- **Radius**: `--radius` (8px by default)

## Accessibility

All components follow accessibility best practices:

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **ARIA Attributes**: Proper ARIA labels and roles
- **Focus Management**: Visible focus indicators with `focus-visible:ring-2`
- **Screen Readers**: Semantic HTML with descriptive labels
- **Reduced Motion**: Respects `prefers-reduced-motion` setting

## TypeScript

Full TypeScript support with exported types for all component props:

```tsx
import type { ButtonProps, BadgeProps, InputProps } from '@ws-ops/ui';
```

## Dependencies

- **Radix UI**: Accessible primitives for Select, Tooltip, and other complex components
- **class-variance-authority**: Type-safe variant management
- **Tailwind CSS**: Utility-first styling
- **tailwind-merge**: Intelligent class merging
- **clsx**: Conditional class composition
- **lucide-react**: Icon library

## License

MIT
