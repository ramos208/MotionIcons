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
      <path d="M10.2941 2.991a3.0286 3.0286 0 0 1 4.4499 1.2039l7.0018 14.8042a11.937 11.937 0 0 0 2.2539-6.9131C24.0464 5.4569 18.7112.047 12.0834.0004 5.4556-.0463.047 5.2889.0004 11.9167a11.9356 11.9356 0 0 0 2.2213 7.0344l.2813-.0613 4.5692-1.008c.1287-.0286.1967.1454.084.2127L3.3736 20.337a11.9563 11.9563 0 0 0 8.5431 3.6625c3.76.0267 7.1258-1.68 9.3444-4.3705L9.8095 7.5735a3.0272 3.0272 0 0 1 .4846-4.5826zm2.1493 13.6089-7.3731.64a1.302 1.302 0 1 1 .1866-2.5666l7.2031 1.6972c.1287.0314.114.2174-.0166.2294zM9.03 10.116l8.9404 7.2324c.102.0827.01.2447-.1133.198L7.1035 13.4713a1.9593 1.9593 0 1 1 1.9266-3.3552z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: avast
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for avast (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-avast {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-avast {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-avast 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-avast 3s ease-in-out infinite alternate;
}
</style>