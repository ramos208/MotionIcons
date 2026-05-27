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
      <path d="M7.5 11.5L7 12.5M10.5 11.5L11 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.5 6.5L17 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 22C12.866 22 16 19.3137 16 16C16 14.5985 15.4394 13.1304 14.5 11.9028C12.5622 9.57474 12.0035 7.80237 12 7C11.9412 8.60728 9.9849 9.47735 9 8C8.0151 9.47735 6.05882 8.60728 6 7C5.99651 7.80237 5.43778 9.57474 3.5 11.9028C2.56057 13.1304 2 14.5985 2 16C2 19.3137 5.13401 22 9 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 5.01625C11.8344 3.62313 12.11 2.56899 12.1124 2C12.1706 3.61599 14.1049 4.49076 15.0787 3.00542C16.0525 4.49076 17.9868 3.61599 18.045 2C18.0484 2.80672 18.6009 4.58869 20.5169 6.9293C21.4457 8.16365 22 9.6397 22 11.0487C22 13.0987 20.8268 14.9099 19.0337 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dim-sum02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dim-sum02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dim-sum02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dim-sum02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dim-sum02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dim-sum02 3s ease-in-out infinite alternate;
}
</style>