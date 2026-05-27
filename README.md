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

### 1. Global Plugin Installation
Register the plugin in your `main.ts` or `main.js` to enable automatic global icon aliases.

```ts
import { createApp } from 'vue'
import App from './App.vue'
import MotionIcons from 'motion-icons'

const app = createApp(App)
app.use(MotionIcons)
app.mount('#app')
```

### 2. Use in Any Component
You **do not** need to import specific icon libraries anymore! Just use the global aliases:

```vue
<script setup>
// Only import the provider! The icons are globally injected.
import { MotionIconsProvider } from 'motion-icons';
</script>

<template>
  <!-- l = Lucide -->
  <MotionIconsProvider 
    :icon="l.Rocket" 
    animation="bounce" 
    :size="32" 
    color="#3B82F6" 
  />

  <!-- p = Phosphor -->
  <MotionIconsProvider 
    :icon="p.PhHeartStraight" 
    animation="heartbeat" 
    color="#EF4444" 
  />
  
  <!-- t = Tabler -->
  <MotionIconsProvider :icon="t.IconSettings" />
</template>
```

### Supported Aliases
- `l` = Lucide (`lucide-vue-next`)
- `i` = Iconoir (`@iconoir/vue`)
- `h` = Heroicons (`@heroicons/vue`)
- `t` = Tabler (`@tabler/icons-vue`)
- `p` = Phosphor (`@phosphor-icons/vue`)
- `hg` = HugeIcons (`hugeicons-vue`)
- `f` = FontAwesome (`@fortawesome/free-solid-svg-icons`)
- `b` = Brand Logos (`simple-icons`)

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
