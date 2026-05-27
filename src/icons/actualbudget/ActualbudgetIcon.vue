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
      <path d="m17.442 10.779.737 2.01-16.758 6.145a.253.253 0 0 1-.324-.15l-.563-1.536a.253.253 0 0 1 .15-.324zM1.13 23.309 12.036.145A.253.253 0 0 1 12.265 0h.478c.097 0 .185.055.227.142l7.036 14.455 2.206-.848c.13-.05.277.015.327.145l.587 1.526a.253.253 0 0 1-.145.327l-2.034.783 2.51 5.156a.253.253 0 0 1-.117.338l-1.47.716a.253.253 0 0 1-.339-.117l-2.59-5.322-17.37 6.682a.253.253 0 0 1-.328-.145c0-.001 0-.003-.002-.004l-.12-.33a.252.252 0 0 1 .009-.195zM12.528 4.127 4.854 20.425 18 15.369z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: actualbudget
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for actualbudget (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-actualbudget {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-actualbudget {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-actualbudget 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-actualbudget 3s ease-in-out infinite alternate;
}
</style>