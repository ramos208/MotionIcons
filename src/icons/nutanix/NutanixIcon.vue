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
      <path d="M.394 3.617a.395.395 0 0 0-.393.395c0 .12.054.225.14.297l8.506 7.404a.39.39 0 0 1-.013.588l-8.52 7.412a.393.393 0 0 0 .28.67h4.86a.39.39 0 0 0 .265-.104l9.17-7.98a.396.396 0 0 0 0-.596L5.52 3.721a.386.386 0 0 0-.264-.104zm18.358 0a.389.389 0 0 0-.273.113l-4.716 4.106a.392.392 0 0 0-.04.564l2.427 2.114a.393.393 0 0 0 .291.13.394.394 0 0 0 .278-.119l7.127-6.203a.389.389 0 0 0 .154-.31.395.395 0 0 0-.393-.395zm-2.31 9.742c-.116 0-.22.05-.292.13l-2.426 2.113a.392.392 0 0 0 .039.564l4.716 4.104c.07.07.166.113.273.113h4.855a.393.393 0 0 0 .239-.705l-7.127-6.203a.393.393 0 0 0-.278-.116z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: nutanix
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for nutanix (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-nutanix {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-nutanix {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-nutanix 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-nutanix 3s ease-in-out infinite alternate;
}
</style>