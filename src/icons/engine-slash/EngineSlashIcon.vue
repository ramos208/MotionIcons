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
      <path d="M2 9V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.5 8H13C13.9319 8 14.3978 8 14.7654 8.15224C15.2554 8.35523 15.6448 8.74458 15.8478 9.23463C16 9.60218 16 10.0681 16 11H19V9.5C19 9.03406 19 8.80109 19.0761 8.61732C19.1776 8.37229 19.3723 8.17761 19.6173 8.07612C19.8011 8 20.0341 8 20.5 8C20.9659 8 21.1989 8 21.3827 8.07612C21.6277 8.17761 21.8224 8.37229 21.9239 8.61732C22 8.80109 22 9.03406 22 9.5V16.5C22 16.9659 22 17.1989 21.9239 17.3827C21.8224 17.6277 21.6277 17.8224 21.3827 17.9239C21.2794 17.9667 21.1606 17.9854 20.9936 17.9936M17 14H19V16M7.04635 8.04635C6.37065 8.10797 5.92008 8.25149 5.58579 8.58579C5 9.17157 5 10.1144 5 12V13.8593C5 14.9072 5 15.4312 5.23665 15.8733C5.4733 16.3155 5.90927 16.6062 6.7812 17.1875L6.9923 17.3282C7.49247 17.6616 7.74255 17.8284 8.02598 17.9142C8.30941 18 8.60998 18 9.2111 18H12C13.8856 18 14.8284 18 15.4142 17.4142C15.5858 17.2426 15.7071 17.0404 15.7929 16.7929" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 12H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.5 8V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 5H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 3L22 23" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: engine-slash
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for engine-slash (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-engine-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-engine-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-engine-slash 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-engine-slash 3s ease-in-out infinite alternate;
}
</style>