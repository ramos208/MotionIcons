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
      <path d="M24 .357c-.938.217-3.086.22-3.631 1.15l-.55.922c-1.376 2.348-4.833 11.069-8.183 11.181-3.35.113 1.762-10.712 2.27-11.797-2.08.489-4.078.193-4.826 2.326-.775 2.212-1.54 4.425-2.363 6.62-1.71 4.532-3.795 8.89-6.634 12.767.064-.086.127-.171-.083.117 2.111-.422 4.03-.352 5.295-2.253 1.17-1.759 1.92-3.73 2.712-5.68l.377-.927.303.286c3.017 2.844 5.334 0 7.697-2.219l.349-.327 1.322 4.977 2.932-3.144a33.47 33.47 0 0 1-.713-1.342l-.037-.08C18.302 8.742 21.6 3.935 23.861.566Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: microstation
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for microstation (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-microstation {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-microstation {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-microstation 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-microstation 3s ease-in-out infinite alternate;
}
</style>