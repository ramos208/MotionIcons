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
      <path d="M6 6C4.90328 6.05476 4.2191 6.21819 3.73223 6.7059C3 7.43939 3 8.61994 3 10.981V16.9914C3 19.3525 3 20.533 3.73223 21.2665C4.46447 22 5.64298 22 8 22H9C11.357 22 12.5355 22 13.2678 21.2665C14 20.533 14 19.3525 14 16.9914V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 4V11.5M9.77631 2.08242C13.178 1.58922 15 3.47059 15 3.47059C15 3.47059 16.822 1.58922 20.2237 2.08242C20.6819 2.14885 21 2.55824 21 3.02124V9.49465C21 10.1407 20.3935 10.6121 19.7499 10.5572C16.6531 10.293 15 12 15 12C15 12 13.3469 10.293 10.2501 10.5572C9.60646 10.6121 9 10.1407 9 9.49465V3.02124C9 2.55824 9.3181 2.14885 9.77631 2.08242Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.625 19H8.5M8.75 19C8.75 19.1381 8.63807 19.25 8.5 19.25C8.36193 19.25 8.25 19.1381 8.25 19C8.25 18.8619 8.36193 18.75 8.5 18.75C8.63807 18.75 8.75 18.8619 8.75 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: online-learning04
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for online-learning04 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-online-learning04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-online-learning04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-online-learning04 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-online-learning04 3s ease-in-out infinite alternate;
}
</style>