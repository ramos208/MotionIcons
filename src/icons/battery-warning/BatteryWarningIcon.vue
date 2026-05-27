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
      <path d="M7 6.00171C4.82497 6.01382 3.64706 6.11027 2.87868 6.87865C2 7.75733 2 9.17154 2 12C2 14.8284 2 16.2426 2.87868 17.1213C3.64706 17.8897 4.82497 17.9861 7 17.9982M14 17.9982C16.175 17.9861 17.3529 17.8897 18.1213 17.1213C19 16.2426 19 14.8284 19 12C19 9.17154 19 7.75733 18.1213 6.87865C17.3529 6.11027 16.175 6.01382 14 6.00171" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 9.49976L20.0272 9.67096C20.7085 9.7845 21.0491 9.84128 21.3076 10.0064C21.5618 10.1688 21.7612 10.4042 21.8796 10.6816C22 10.9637 22 11.3091 22 11.9998C22 12.6904 22 13.0358 21.8796 13.3179C21.7612 13.5953 21.5618 13.8307 21.3076 13.9931C21.0491 14.1582 20.7085 14.215 20.0272 14.3286L19 14.4998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.5 7.99976V11.9998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.625 15.7498H10.5M10.75 15.7498C10.75 15.8878 10.6381 15.9998 10.5 15.9998C10.3619 15.9998 10.25 15.8878 10.25 15.7498C10.25 15.6117 10.3619 15.4998 10.5 15.4998C10.6381 15.4998 10.75 15.6117 10.75 15.7498Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: battery-warning
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for battery-warning (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-battery-warning {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-battery-warning {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-battery-warning 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-battery-warning 3s ease-in-out infinite alternate;
}
</style>