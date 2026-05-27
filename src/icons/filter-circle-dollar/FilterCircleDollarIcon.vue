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
      <path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c2.5 2.5 5.3 4.5 8.3 6-21.2-30.9-33.6-68.3-33.6-108.6 0-99.4 75.5-181.1 172.3-191l90.4-90.4c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64zM576 400a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM416 320c0-8.8 7.2-16 16-16s16 7.2 16 16l0 8 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-45.8 0c-5.6 0-10.2 4.6-10.2 10.2 0 4.9 3.5 9.1 8.3 10l45 8.2c20 3.6 34.6 21.1 34.6 41.5 0 23.3-18.9 42.2-42.2 42.2l-5.8 0 0 8c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-8-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l53.8 0c5.6 0 10.2-4.6 10.2-10.2 0-4.9-3.5-9.1-8.3-10l-45-8.2c-20-3.6-34.6-21.1-34.6-41.5 0-22.6 17.7-41 40-42.1l0-8.1z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: filter-circle-dollar
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for filter-circle-dollar (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-filter-circle-dollar {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-filter-circle-dollar {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-filter-circle-dollar 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-filter-circle-dollar 3s ease-in-out infinite alternate;
}
</style>