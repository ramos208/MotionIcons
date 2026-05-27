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
      <path d="M8.49989 2C16.0002 2.5 14.9999 11 14.9999 11C14.9999 11 17.4349 10.5 17.9999 8.5C18.585 9.36302 18.9763 10.8815 19.0003 12.5C19.0459 15.57 17.5498 19 12.0002 19C7.56119 19 5.00018 15.5 5.00018 13C5.00018 11 5.51966 9.75114 6.67361 8.5C9.90182 4.99991 8.49989 2 8.49989 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.59855 15C7.6593 12 11.0529 9 11.0529 9C10.7296 10.1667 10.471 12.7 12.0223 13.5C12.9918 14 14.4461 13 14.4461 13C14.4461 13 14.9309 15.5 12.9918 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 20.5C7 21.3284 6.32843 22 5.5 22C4.67157 22 4 21.3284 4 20.5C4 19.6716 4.67157 19 5.5 19C6.32843 19 7 19.6716 7 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.5 19H18.5C19.3284 19 20 19.6716 20 20.5C20 21.3284 19.3284 22 18.5 22H5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fire-pit
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for fire-pit (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fire-pit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fire-pit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fire-pit 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fire-pit 3s ease-in-out infinite alternate;
}
</style>