<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-radar']"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      :stroke-width="strokeWidth" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      class="icon-geometry anim-ambient-floating"
    >
      <path d="M0 0v24h24V0H0zm12.29 4.38c1.66-.03 2.83.42 3.84 1.85 2.25 5.58-6 8.4-6 8.4s-.23 1.48 2.02 1.42c2.78 0 5.7-2.15 6.81-3.06a.66.66 0 01.9.05l.84.87a.66.66 0 01.01.9c-.72.8-2.42 2.46-4.97 3.53 0 0-4.26 1.97-7.13.1a4.95 4.95 0 01-2.38-3.83s-2.08-.11-3.42-.63c-1.33-.52.01-2.1.01-2.1s.42-.65 1.2 0 2.24.36 2.24.36c.13-1.03.35-2.38.98-3.81 1.34-3 3.38-4.01 5.05-4.05zm.33 2.8c-1.1.07-2.8 1.78-2.88 4.93 0 0 .75.23 2.41-.91 1.67-1.14 2-2.97 1.11-3.81a.82.82 0 00-.64-.21Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: emberdotjs
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for emberdotjs (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

defineProps({
  size: { type: Number, default: 24 },
  strokeWidth: { type: Number, default: 2 }
});
</script>

<style scoped>
.ai-motion-icon-wrapper {
  position: relative;
  display: inline-flex;
  cursor: pointer;
}

.anim-ambient-floating {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-emberdotjs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-emberdotjs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-emberdotjs 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-emberdotjs 3s ease-in-out infinite alternate;
}
</style>