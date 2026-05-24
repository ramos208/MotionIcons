# MotionIcons - Animated Icons Documentation

## Overview
MotionIcons is a complete next-generation animated icon system for Vue 3. It supports high-performance 2D SVG animations and premium 3D WebGL animated icons via Three.js (TresJS). Designed for modern premium UIs, it provides smooth physics-based motion, interactive hover/click states, and respects user accessibility preferences.

## Architecture
The system is divided into two primary render layers:
1. **SVG Layer**: Handled by GSAP and the custom `AnimatedIcon.vue` wrapper.
2. **WebGL Layer**: Handled by TresJS via the `ThreeIcon.vue` wrapper.

### Directory Structure
- `src/components/` - The core wrappers (`AnimatedIcon.vue`, `ThreeIcon.vue`).
- `src/icons/` - The actual icon assets divided into `svg/` and `three/`.
- `src/animations/` - Timing, physics, and easing presets.
- `src/composables/` - Hooks for animation logic (`useIconAnimation`, `useThreeIcon`) and accessibility (`useReducedMotion`).
- `src/shaders/` - Custom GLSL shaders for 3D visual effects.

## Component API
### `AnimatedIcon.vue`
A wrapper component that accepts SVG content and applies GSAP motion based on standard props.

**Props**:
- `size` (Number, default: 24): Size in pixels.
- `color` (String): CSS color string. If unset, uses `currentColor`.
- `duration` (Number, default: 0.3): Animation duration in seconds.
- `hover` (Boolean, default: true): Enable hover animations.
- `active` (Boolean, default: true): Enable click/active animations.
- `loop` (Boolean, default: false): Continuously loop an idle animation.
- `strokeWidth` (Number, default: 2): Stroke width for the inner SVG.
- `glow` (Boolean, default: false): Applies a CSS drop-shadow glow.
- `morph` (Boolean, default: false): Enables morphing logic.
- `physics` (Boolean, default: true): Uses elastic bounce physics vs smooth interpolation.

### `ThreeIcon.vue`
A wrapper for TresJS WebGL content that provides camera setup, lighting, and interactivity.

**Props**:
- `size` (Number, default: 64): Icon size.
- `lighting` (Boolean, default: true): Enable default lights.
- `shadows` (Boolean, default: true): Enable soft shadows.
- `bloom` (Boolean, default: false): Future support for post-processing bloom.
- `interactive` (Boolean, default: true): Mouse parallax and interactivity.

## Animation Presets
Located in `src/animations/presets.ts`. We use customized GSAP easing for a snappy, premium feel.

- **bounce**: `back.out(1.7)`
- **elastic**: `elastic.out(1, 0.3)`
- **smooth**: `power2.inOut`
- **snappy**: `power4.out`
- **liquid**: `sine.inOut`

## Accessibility
The system fully supports `prefers-reduced-motion: reduce`. The `useReducedMotion` composable checks media queries. If reduced motion is requested, GSAP timelines do not play, and 3D scenes halt idle looping/interactive parallax.

## Creating Icons
### SVG Icons
1. Create a Vue file in `src/icons/svg/`.
2. Wrap your SVG paths inside the `<AnimatedIcon>` component.
3. Apply targeted CSS/GSAP classes to the paths for specific internal animations (e.g. rotating a gear).

### 3D Icons
1. Create a Vue file in `src/icons/three/`.
2. Wrap your `TresMesh` and geometries inside `<ThreeIcon>`.
3. Use the slot props `isHovering` and `rotation` to dynamically react to user interactions.

## Testing
We use Vitest for unit tests and Playwright for visual interaction testing.
- `npm run test:unit`: Vitest specs validating props and composables.
- `npm run test:e2e`: Playwright specs capturing visual regressions of hover states.

## Performance Optimization
- **Tree shaking**: Individual icons can be imported separately.
- **GSAP Tweens**: Automatically killed `onUnmounted` to prevent memory leaks.
- **WebGL**: `useRenderLoop` only updates active components, avoiding heavy background draws.

## Future Improvements
- Add `WebGPU` support to TresJS integration.
- Implement morphing capabilities between completely different SVGs using `gsap.morphSVG`.
- Add particle emitters via custom shaders.
