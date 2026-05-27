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
      <path d="M19.039 11.459c.001.015.022.244.03.407.006.113 0 .29 0 .3.003 0 .029.023.03.024 1.428 1.17 2.943 2.767 3.204 3.94.073.325.056.618-.072.868-.152.293-.439.503-.834.638-2.046.7-6.925-.642-10.907-2.609-2.845-1.406-5.342-3.081-7.032-4.719-1.57-1.523-1.995-2.71-1.59-3.427.155-.271.42-.472.776-.609 1.299-.507 3.788-.152 6.239.579-1.16.866-1.968 2.034-2.342 3.202l-.001.007a.051.051 0 0 1-.001.006c-.115 1.07 1.434 2.47 3 3.25-.002-.006.084.032.084.026-.002-.006-.015-.109-.017-.113-.366-2.66 1.648-6.64 3.765-7.513.136-.056.254-.09.27-.095l-.273-.027c-.074-.006-.148-.013-.228-.015a7.464 7.464 0 0 0-.272-.01 6.443 6.443 0 0 0-3.4.892C5.378 5.057 2.383 4.892 1.13 5.31c-.497.167-.833.418-1 .751-.174.35-.175.79-.002 1.306.57 1.704 3.058 4.032 6.211 6.099.457 2.407 2.615 4.875 5.703 5.204l.142.015a.278.278 0 0 1 .05 0 6.618 6.618 0 0 0-.173-.132c-.955-.736-1.813-1.949-2.107-3l.185.093.143.07c4.985 2.465 10.215 3.72 12.53 2.947.519-.174.9-.418 1.075-.768.167-.335.139-.78-.029-1.278-.436-1.3-2.304-3.284-4.675-5.052a5.003 5.003 0 0 0-.145-.107"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: saturn
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for saturn (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-saturn {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-saturn {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-saturn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-saturn 3s ease-in-out infinite alternate;
}
</style>