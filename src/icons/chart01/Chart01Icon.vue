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
      <path d="M3.5 9.5V18.5C3.5 18.9659 3.5 19.1989 3.57612 19.3827C3.67761 19.6277 3.87229 19.8224 4.11732 19.9239C4.30109 20 4.53406 20 5 20C5.46594 20 5.69891 20 5.88268 19.9239C6.12771 19.8224 6.32239 19.6277 6.42388 19.3827C6.5 19.1989 6.5 18.9659 6.5 18.5V9.5C6.5 9.03406 6.5 8.80109 6.42388 8.61732C6.32239 8.37229 6.12771 8.17761 5.88268 8.07612C5.69891 8 5.46594 8 5 8C4.53406 8 4.30109 8 4.11732 8.07612C3.87229 8.17761 3.67761 8.37229 3.57612 8.61732C3.5 8.80109 3.5 9.03406 3.5 9.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.5 5.5V18.4995C10.5 18.9654 10.5 19.1984 10.5761 19.3822C10.6776 19.6272 10.8723 19.8219 11.1173 19.9234C11.3011 19.9995 11.5341 19.9995 12 19.9995C12.4659 19.9995 12.6989 19.9995 12.8827 19.9234C13.1277 19.8219 13.3224 19.6272 13.4239 19.3822C13.5 19.1984 13.5 18.9654 13.5 18.4995V5.5C13.5 5.03406 13.5 4.80109 13.4239 4.61732C13.3224 4.37229 13.1277 4.17761 12.8827 4.07612C12.6989 4 12.4659 4 12 4C11.5341 4 11.3011 4 11.1173 4.07612C10.8723 4.17761 10.6776 4.37229 10.5761 4.61732C10.5 4.80109 10.5 5.03406 10.5 5.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.5 12.5V18.5C17.5 18.9659 17.5 19.1989 17.5761 19.3827C17.6776 19.6277 17.8723 19.8224 18.1173 19.9239C18.3011 20 18.5341 20 19 20C19.4659 20 19.6989 20 19.8827 19.9239C20.1277 19.8224 20.3224 19.6277 20.4239 19.3827C20.5 19.1989 20.5 18.9659 20.5 18.5V12.5C20.5 12.0341 20.5 11.8011 20.4239 11.6173C20.3224 11.3723 20.1277 11.1776 19.8827 11.0761C19.6989 11 19.4659 11 19 11C18.5341 11 18.3011 11 18.1173 11.0761C17.8723 11.1776 17.6776 11.3723 17.5761 11.6173C17.5 11.8011 17.5 12.0341 17.5 12.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: chart01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for chart01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-chart01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-chart01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-chart01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-chart01 3s ease-in-out infinite alternate;
}
</style>