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
      <path d="M20 12.999V10.6559C20 9.83838 20 9.42963 19.8478 9.06208C19.6955 8.69454 19.4065 8.40551 18.8284 7.82745L14.0919 3.09091C13.593 2.59202 13.3436 2.34258 13.0345 2.19477C12.9702 2.16403 12.9044 2.13674 12.8372 2.11303C12.5141 1.99902 12.1614 1.99902 11.4558 1.99902C8.21082 1.99902 6.58831 1.99902 5.48933 2.8851C5.26731 3.0641 5.06508 3.26634 4.88607 3.48835C4 4.58733 4 6.20984 4 9.45487V12.999M13 2.49902V2.99902C13 5.82745 13 7.24166 13.8787 8.12034C14.7574 8.99902 16.1716 8.99902 19 8.99902H19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.5 17.001C16.5 16.4487 16.9477 16.001 17.5 16.001H19C19.5523 16.001 20 16.4487 20 17.001V18.001C20 18.5533 19.5523 19.001 19 19.001M18 19.001H19M4 22.001V16.001L6 19.001L8 16.001V22.001M10.5 22.001V19.501M10.5 19.501V16.001H12.25C13.2165 16.001 14 16.7845 14 17.751C14 18.7175 13.2165 19.501 12.25 19.501H10.5ZM19 19.001C19.5523 19.001 20 19.4487 20 20.001V21.001C20 21.5533 19.5523 22.001 19 22.001H17.5C16.9477 22.001 16.5 21.5533 16.5 21.001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mp301
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mp301 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mp301 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mp301 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mp301 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mp301 3s ease-in-out infinite alternate;
}
</style>