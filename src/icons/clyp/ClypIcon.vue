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
      <path d="M11.9995 17.9583a1.137 1.137 0 01-1.137-1.136V7.2347a1.138 1.138 0 012.275 0v9.5896c0 .626-.51 1.134-1.138 1.134m7.4397 2.4398a1.137 1.137 0 01-1.14-1.1379V4.7958a1.138 1.138 0 012.276 0v14.4654c0 .627-.51 1.136-1.138 1.136M15.7193 24a1.137 1.137 0 01-1.138-1.136V1.138a1.138 1.138 0 012.276 0v21.726c0 .627-.509 1.136-1.138 1.136m-7.4366-3.1599a1.137 1.137 0 01-1.138-1.136V4.2979a1.138 1.138 0 012.276 0v15.4064c0 .628-.51 1.137-1.138 1.137m-3.7199-4.9889a1.137 1.137 0 01-1.138-1.135V9.2857a1.138 1.138 0 012.276 0v5.4318c0 .626-.51 1.135-1.138 1.135z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: clyp
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for clyp (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-clyp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-clyp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-clyp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-clyp 3s ease-in-out infinite alternate;
}
</style>