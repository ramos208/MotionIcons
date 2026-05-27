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
      <path d="M4.5 0A4.49 4.49 0 0 0 0 4.5v15A4.49 4.49 0 0 0 4.5 24h15a4.49 4.49 0 0 0 4.5-4.5v-15A4.49 4.49 0 0 0 19.5 0Zm1.633 4.43 11.715.013c.623.001 1.208.26 1.62.674.414.414.671 1 .67 1.623v.086l-1.224 11.799a2.31 2.31 0 0 1-.836 1.545 2.293 2.293 0 0 1-3.15-.246L4.426 8.262a2.31 2.31 0 0 1-.586-1.657A2.295 2.295 0 0 1 6.133 4.43Zm2.363 3.35 7.334 8.146.844-8.137zm1.123.501 3.244.004 2.92 3.244-.336 3.227zM4.678 9.287l3.017 3.354-.369 3.57 3.588.004 3.018 3.351-7.78-.01c-.623 0-1.208-.26-1.62-.673-.414-.414-.671-1-.67-1.623v-.086z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mockserviceworker
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mockserviceworker (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mockserviceworker {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mockserviceworker {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mockserviceworker 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mockserviceworker 3s ease-in-out infinite alternate;
}
</style>