# 🚀 MotionIcons for Vue 3

A highly performant, library-agnostic animated iconography system built for Vue 3. Bring your interfaces to life with effortless, CSS-driven 60fps animations wrapped around your favorite SVG icon libraries.

## 1. Introduction

Why MotionIcons? We built it to solve a common problem: adding high-quality interaction animations to standard icons without shipping massive JS animation libraries. By leveraging raw CSS keyframes and a Vue wrapper component, MotionIcons provides buttery-smooth animations for over 20,998 icons with zero JavaScript overhead during runtime.

### ✨ Key Features
- **Library Agnostic:** Seamlessly wraps icons from Lucide, Heroicons, Iconoir, Phosphor, Tabler, HugeIcons, FontAwesome, and Brand Logos.
- **20,998 Animated Icons:** Instantly access a massive, aggregated catalog.
- **Zero JS Overhead:** Animations are powered entirely by heavily optimized CSS keyframes.
- **True 3D Rendering:** Switch to `:is3d="true"` to extrude your 2D SVG into a physical Three.js mesh.
- **TypeScript Ready:** Full type inference and Volar autocomplete for global aliases.

### First Look
```vue
<script setup>
import { MotionIconsProvider } from 'motion-icons'
// 'l.Rocket' comes from our global Lucide alias
</script>

<template>
  <MotionIconsProvider :icon="l.Rocket" animation="bounce" :size="32" />
</template>
```

---

## 2. Installation

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

### Global Registration
Register the plugin in your `main.ts` or `main.js` to enable automatic global icon aliases (like `l.Rocket`).

```ts
import { createApp } from 'vue'
import App from './App.vue'
import MotionIcons from 'motion-icons'

const app = createApp(App)
app.use(MotionIcons)
app.mount('#app')
```

### Peer Dependencies
- **Vue:** `^3.2.0` (Requires Vue 3 + Composition API)
- **Node:** `>= 16.0.0`

> **Tip:** If you're using Vite, MotionIcons is fully compatible and requires no custom configuration.

---

## 3. Quick Start

Get your first animated icon rendering in under 60 seconds!

1. **Install** the package using `npm install motion-icons`
2. **Register** the plugin in your `main.ts` with `app.use(MotionIcons)`
3. **Use** the provider in any Vue component:

```vue
<script setup>
import { MotionIconsProvider } from 'motion-icons'
</script>

<template>
  <!-- Renders a heart that beats when hovered! -->
  <MotionIconsProvider :icon="l.Heart" animation="heartbeat" color="red" />
</template>
```

**What just happened?** 
You imported the `MotionIconsProvider` wrapper. We passed it `l.Heart` (which is the globally injected alias for Lucide's Heart icon), set the color to red, and attached the `heartbeat` CSS animation. When you hover the icon, it will pump like a real heart!

---

## 4. Usage Guide

### Basic Usage
To render an icon with default props, simply pass a global alias to `:icon`.

```vue
<template>
  <MotionIconsProvider :icon="t.IconSettings" />
</template>
```

### Setting Animation Type
Pass any supported string to the `animation` prop. Animations trigger natively via CSS `:hover`.

```vue
<template>
  <MotionIconsProvider :icon="h.BellIcon" animation="shake" />
</template>
```

### Controlling Size & Color
Use the `size` prop for square dimensions, and `color` for the SVG stroke/fill.

```vue
<template>
  <MotionIconsProvider :icon="i.Search" :size="48" color="#3B82F6" />
</template>
```

### True 3D Rendering (Experimental)
MotionIcons includes a lightweight Three.js engine to extrude any SVG path into a 3D physical object!

```vue
<template>
  <MotionIconsProvider :icon="l.Box" :is3d="true" animation="spin-3d" />
</template>
```

### Using Inside a Button
MotionIcons inherits hover states beautifully. Place it inside a button for a dynamic call-to-action!

```vue
<template>
  <button class="flex items-center gap-2 hover:bg-blue-600 group">
    <span>Deploy Server</span>
    <!-- The icon animates when the parent button is hovered! -->
    <MotionIconsProvider :icon="l.Rocket" animation="bounce" class="group-hover:animate" />
  </button>
</template>
```

---

## 5. TypeScript Setup

To get full autocomplete and type-safety for the global library aliases (like `l.Rocket` or `h.BellIcon`) in your Vue templates, add the following declarations to your project's `env.d.ts` or `global.d.ts` file:

| Alias | Library | Type Declaration |
| :--- | :--- | :--- |
| `l` | Lucide | `typeof import('lucide-vue-next')` |
| `h` | Heroicons | `typeof import('@heroicons/vue/24/outline')` |
| `i` | Iconoir | `typeof import('@iconoir/vue')` |
| `p` | Phosphor | `typeof import('@phosphor-icons/vue')` |
| `t` | Tabler | `typeof import('@tabler/icons-vue')` |
| `hg` | HugeIcons | `typeof import('hugeicons-vue')` |
| `f` | FontAwesome | `typeof import('@fortawesome/free-solid-svg-icons').fas` |
| `b` | Brand Logos | `typeof import('simple-icons')` |

Once added, Volar and the Vue Language Server will provide instant intelligent suggestions for all 20,000+ icons!

---

## 6. Props API

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `icon` | `Component` | **Required** | The raw SVG Vue component to render. |
| `animation` | `String` | `'pulse'` | The animation to play on hover. |
| `size` | `Number` | `24` | Width and height of the icon in pixels. |
| `color` | `String` | `''` | The fill/stroke color of the icon. |
| `strokeWidth` | `Number` | `2` | Controls line thickness for supported line-icons. |
| `glow` | `Boolean` | `false` | Enables a dynamic neon drop-shadow effect based on the icon's color. |
| `is3d` | `Boolean` | `false` | Enables the Three.js 3D extrusion engine for true 3D meshes. |
| `cameraPosition`| `Array` | `[0, 0, 7]` | Controls the initial Three.js camera viewpoint. |
| `library`| `String` | `'lucide'` | Optional metadata for library-specific CSS overrides. |

> **Tip:** The `is3d` prop replaces the standard `<svg>` DOM node with an HTML `<canvas>` running a lightweight Three.js context. Use this sparingly on complex dashboards to preserve performance.

---

## 7. Animations

**Overview:** MotionIcons' animation engine is completely decoupled from JavaScript. It utilizes heavily optimized `@keyframes` injected globally via standard CSS. When an icon is hovered, the corresponding `.anim-{name}` class triggers the hardware-accelerated transform.

### Available Animations

There are **91 distinct animations** available in the engine. Pass any of these strings to the `animation` prop:

`aurora`, `blink`, `blob`, `blur-in`, `blur-out`, `boomerang`, `bounce`, `bounce-wave`, `breathing`, `bubble`, `cartoon-shake`, `charge`, `cinematic-zoom`, `combo-bounce`, `compress`, `cyber-pulse`, `dash`, `distort`, `drift`, `drift-float`, `drift-spin`, `elastic`, `elegant-swing`, `energy-burst`, `explosion-pop`, `fade-drift`, `flash`, `flicker`, `flip`, `float`, `flutter`, `frost`, `glass-shine`, `glitch`, `glow-pulse`, `gooey`, `heartbeat`, `hologram`, `hop`, `hover-lift`, `impact`, `jelly`, `jiggle`, `light-sweep`, `liquid`, `magnetic`, `matrix`, `morph`, `neon-flicker`, `orbit`, `peek`, `pendulum`, `pixelate`, `pop`, `power-up`, `pulse` (Default), `recoil`, `rgb-split`, `ripple`, `roll`, `rotate-3d`, `rubber-band`, `scanline`, `shake`, `shockwave`, `slam`, `slide-down`, `slide-left`, `slide-right`, `slide-up`, `smooth-orbit`, `snap`, `soft-pulse`, `spin`, `spin-pulse`, `spiral`, `squish`, `static-noise`, `stretch`, `swing`, `swing-3d`, `tada`, `tilt`, `turbo-spin`, `vhs`, `warp`, `wave`, `wiggle`, `wobble`, `zoom-in`, `zoom-out`

### Trigger Modes
Currently, all animations execute sequentially on CSS `:hover` natively. To force an animation programmatically, you can bind to the `.is-hovering` class.

---

## 8. Explorer Features

The package ships with an incredibly powerful built-in **Icon Explorer** designed for massive library aggregation. 

1. **Intelligent Taxonomy:** Instead of searching 8 different libraries, the Explorer sorts all 20,998 icons into 30 semantic categories (e.g., *Interface, Objects, Security, Data, Communication*).
2. **Global Search:** Type "settings" and instantly see matching gears and sliders from Lucide, Tabler, Iconoir, and Phosphor all side-by-side.
3. **Sub-Categorization:** Complex groups are deeply nested. For example, `Brand Logos` are split across 14 distinct industries (e.g., Web Frameworks vs. Crypto).
4. **Live Preview Engine:** Select an animation from the dropdown to watch all 500+ icons on the screen animate simultaneously to test performance.
5. **3D Viewport Toggle:** Flip the 3D switch to extrude the currently selected icon into a physical, rotating mesh in real-time.
6. **1-Click Export:** Instantly copy the Vue component `<MotionIconsProvider />` snippet exactly as configured, or download the raw SVG with baked-in animations.

---

## 🤖 Roadmap

- **AI Semantic Engine:** A future update will introduce a fully local AI search engine to allow natural-language icon discovery ("find me an icon that looks like a fast animal").

---

**Contributing:** Feel free to open issues or PRs on our GitHub page!

MIT License © 2026. Built with ❤️ for the Vue ecosystem.
