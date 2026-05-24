# 🚀 MotionIcons for Vue 3

A highly performant, premium animated iconography system built for Vue 3. Bring your interfaces to life with effortless, CSS-driven 60fps animations wrapped around your favorite SVG icon libraries.

![MotionIcons Preview](https://via.placeholder.com/800x400.png?text=MotionIcons+Preview)

## ✨ Features
- **Library Agnostic:** Seamlessly wraps icons from `lucide-vue-next`, `@heroicons/vue`, `@iconoir/vue`, `@hugeicons/vue`, and more!
- **Zero JS Overhead:** Animations are powered entirely by heavily optimized CSS keyframes.
- **Plug & Play:** Drop the provider into any Vue 3 project and get instant hover/active animations.
- **Customizable:** Control animations, sizes, colors, and glow effects via props.

---

## 📦 Installation

Choose your preferred package manager to install `motion-icons`:

```bash
# npm
npm install motion-icons

# pnpm
pnpm add motion-icons

# yarn
yarn add motion-icons

# bun
bun add motion-icons
```

---

## 💻 Usage Guide

Using MotionIcons is incredibly simple! We pre-bundle all major icon libraries, so you **do not** need to install `lucide`, `heroicons`, etc. Just import them directly from `motion-icons`!

```vue
<script setup>
// 1. Import the provider AND any icon library directly from motion-icons!
import { AnimatedIconProvider, Lucide, Phosphor, HugeIcons } from 'motion-icons';
</script>

<template>
  <!-- 2. Wrap the icon in the provider and set your animation! -->
  <AnimatedIconProvider 
    :icon="Lucide.RocketIcon" 
    animation="bounce" 
    :size="32" 
    color="#3B82F6" 
  />

  <AnimatedIconProvider 
    :icon="Phosphor.PhHeartStraight" 
    animation="heartbeat" 
    color="#EF4444" 
  />
</template>
```

---

## 🎭 Available Animations

Simply pass any of these string values to the `animation` prop:

- `bounce` (Default)
- `pulse`
- `shake`
- `spin`
- `wiggle`
- `flip`
- `tada`
- `zoom-in`
- `zoom-out`
- `rubber-band`
- `spin-pulse`
- `glitch`

---

## ⚙️ Props API

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `icon` | `Component` | **Required** | The raw SVG Vue component to render. |
| `animation` | `String` | `'bounce'` | The animation to play on hover. |
| `size` | `Number` | `24` | Width and height of the icon in pixels. |
| `color` | `String` | `'currentColor'` | The fill/stroke color of the icon. |
| `glow` | `Boolean` | `false` | Enables a subtle neon drop-shadow effect based on the icon's color. |
| `library`| `String` | `undefined` | Optional metadata for library-specific CSS overrides. |

---

## 📜 License

MIT License © 2026

Built with ❤️ for the Vue ecosystem.
