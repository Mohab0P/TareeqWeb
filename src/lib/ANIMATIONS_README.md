# Animation Components Guide

This README explains how to use the animation components in your application.

## Quick Start

These animation components are optimized for both desktop and mobile experiences, with special attention to scroll-based animations for mobile users.

### Card Components

All card components now have built-in animations, including:
- Fade-in on scroll
- Subtle hover animations
- Staggered content reveal

```jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Example usage
<Card>
  <CardHeader>
    <CardTitle>My Card</CardTitle>
  </CardHeader>
  <CardContent>
    Content appears with a slight delay after the card
  </CardContent>
</Card>
```

### Animated Forms

Forms with built-in animations for a better user experience:

```jsx
import { AnimatedForm, AnimatedFormField, AnimatedSubmitButton } from "@/components/ui/animated-form";

// Example usage
<AnimatedForm onSubmit={handleSubmit}>
  <AnimatedFormField custom={0}>
    <input type="text" name="name" placeholder="Name" />
  </AnimatedFormField>
  <AnimatedFormField custom={1}>
    <input type="email" name="email" placeholder="Email" />
  </AnimatedFormField>
  <AnimatedSubmitButton>Submit</AnimatedSubmitButton>
</AnimatedForm>
```

### Scroll Animations

Add animations that trigger when elements scroll into view:

```jsx
import { ScrollAnimation, StaggeredContainer, StaggeredItem } from "@/components/ui/scroll-animation";

// Basic fade-up animation
<ScrollAnimation>
  <h2>This heading animates on scroll</h2>
</ScrollAnimation>

// Different directions
<ScrollAnimation direction="left">Left to right animation</ScrollAnimation>
<ScrollAnimation direction="right">Right to left animation</ScrollAnimation>
<ScrollAnimation direction="down">Top to bottom animation</ScrollAnimation>
<ScrollAnimation direction="reveal">Cool reveal effect</ScrollAnimation>

// Staggered list (great for mobile)
<StaggeredContainer>
  <StaggeredItem>List item 1</StaggeredItem>
  <StaggeredItem>List item 2</StaggeredItem>
  <StaggeredItem>List item 3</StaggeredItem>
</StaggeredContainer>
```

### Page Transitions

For smooth transitions between pages:

```jsx
import { PageTransition, SlideUp } from "@/components/ui/page-transition";

// Use at the layout level for page transitions
<PageTransition>
  {children}
</PageTransition>

// Individual components
<SlideUp delay={0.2}>
  <h2>This slides up with a delay</h2>
</SlideUp>

<SlideIn direction="right">
  <p>This slides in from the right</p>
</SlideIn>
```

## Mobile Optimization

All animations are optimized for mobile devices:

1. Reduced motion when appropriate
2. Performance-optimized animations
3. Touch-friendly hover states
4. Scroll-triggered animations work great on mobile scrolling

## Best Practices

1. Don't overuse animations - too many can hurt performance
2. Group related animations to create a cohesive experience  
3. Use appropriate timing - most animations should be between 0.3-0.6 seconds
4. Consider using different animations for different sections to create visual variety 