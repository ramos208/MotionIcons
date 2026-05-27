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
      <path d="M12.002 22C8.4121 22 5.50195 19.8177 5.50195 16.5095C5.50195 13.6609 7.9118 11.6468 9.27297 7.95509C9.4458 7.48634 9.53222 7.25196 9.59859 7.1298C9.95355 6.47644 10.4553 6.14521 11.2407 6.04564C11.7205 5.98482 12.2832 5.98478 12.7629 6.04554C13.5485 6.14503 14.0503 6.47626 14.4054 7.12968C14.4717 7.25185 14.5582 7.48626 14.731 7.95508C16.0922 11.6466 18.502 13.6606 18.502 16.5092C18.502 19.8174 15.5918 22 12.002 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.95495 14C8.93192 15.7778 9.65332 22 12.0009 22C14.3463 22 15.0741 15.7778 14.0487 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 6V3.5M12 3.5L12.9153 3.27116C13.6038 3.09905 14.1826 2.63471 14.5 2M12 3.5L11.0847 3.27116C10.3962 3.09905 9.81735 2.63471 9.5 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.002 9H9.00195" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: punching-ball01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for punching-ball01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-punching-ball01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-punching-ball01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-punching-ball01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-punching-ball01 3s ease-in-out infinite alternate;
}
</style>