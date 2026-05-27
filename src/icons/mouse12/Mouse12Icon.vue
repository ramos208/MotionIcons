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
      <path d="M12 22C17.6 22 19 18.1665 19 13.5C19 8.83348 17.6 5 12 5C6.39994 5 5 8.83346 5 13.5C5 18.1665 6.39994 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 8V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.5 9.5C10.5 9.03406 10.5 8.80109 10.5761 8.61732C10.6776 8.37229 10.8723 8.17761 11.1173 8.07612C11.3011 8 11.5341 8 12 8C12.4659 8 12.6989 8 12.8827 8.07612C13.1277 8.17761 13.3224 8.37229 13.4239 8.61732C13.5 8.80109 13.5 9.03406 13.5 9.5V10.5C13.5 10.9659 13.5 11.1989 13.4239 11.3827C13.3224 11.6277 13.1277 11.8224 12.8827 11.9239C12.6989 12 12.4659 12 12 12C11.5341 12 11.3011 12 11.1173 11.9239C10.8723 11.8224 10.6776 11.6277 10.5761 11.3827C10.5 11.1989 10.5 10.9659 10.5 10.5V9.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mouse12
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mouse12 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mouse12 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mouse12 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mouse12 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mouse12 3s ease-in-out infinite alternate;
}
</style>