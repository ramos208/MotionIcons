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
      <path d="M14.9713 7.5C14.9713 7.5 15.4713 7.5 15.9713 8.5C15.9713 8.5 17.5595 6 18.9713 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.9954 15.042L19.0241 19.5927C18.9748 20.9362 17.8679 22 16.5192 22H5.39281C4.00847 22 2.88624 20.8814 2.88624 19.5014L2.9724 13.0355M8.98101 6.0129L5.1476 5.94884C4.25796 5.92732 3.46052 6.49283 3.18918 7.33765L2.09204 10.7538C1.96225 11.1579 1.95328 11.5994 2.16878 11.9654C2.95433 13.2993 5.06346 15.1192 8.41724 13.163M7.44588 11.3322C7.83597 12.6005 9.36528 14.8259 12.486 13.5372" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22.0003 7.01618C22.0003 9.78653 19.7585 12.0324 16.9932 12.0324C14.2278 12.0324 11.986 9.78653 11.986 7.01618C11.986 4.24582 14.2278 2 16.9932 2C19.7585 2 22.0003 4.24582 22.0003 7.01618Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: store-verified01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for store-verified01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-store-verified01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-store-verified01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-store-verified01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-store-verified01 3s ease-in-out infinite alternate;
}
</style>