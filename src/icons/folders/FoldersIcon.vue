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
      <path d="M7.5 9.05568H16.275C18.171 9.05568 19.119 9.05568 19.8 9.50509C20.0949 9.69965 20.348 9.94965 20.545 10.2408C21 10.9134 21 11.8497 21 13.7223C21 16.8434 21 18.4039 20.2416 19.5249C19.9133 20.0102 19.4914 20.4268 19.0001 20.7511C17.8651 21.5001 16.285 21.5001 13.125 21.5001H12C7.75736 21.5001 5.63604 21.5001 4.31802 20.1984C3 18.8966 3 16.8015 3 12.6112V9.89503C3 8.28039 3 7.47307 3.34228 6.86729C3.58628 6.43547 3.94704 6.07916 4.38426 5.83818C4.99761 5.50012 5.81502 5.50012 7.44984 5.50012C8.49722 5.50012 9.02091 5.50012 9.47933 5.66991C10.526 6.05756 10.9576 6.99663 11.4299 7.92957L12 9.05568" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 2.5001H8.5C9.47008 2.5001 10.4182 2.47179 11.2387 3.05532C12.29 3.80299 12.71 5.1972 13.7613 5.94487C14.5818 6.52841 15.5299 6.5001 16.5 6.5001H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: folders
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for folders (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-folders {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-folders {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-folders 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-folders 3s ease-in-out infinite alternate;
}
</style>