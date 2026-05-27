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
      <path d="M17.5 22.0003V20.8357C17.5 19.913 17.9987 19.1864 18.5 18.5M8 22.0003C8 20.883 7.62579 19.527 6.93707 18.6472L3.33738 14.049C2.8758 13.4316 2.88907 12.5792 3.36965 11.9766C3.99772 11.189 5.16877 11.124 5.8797 11.8371L7.5 13.4625V7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.5018 5.5C13.5018 4.67157 14.1733 4 15.0018 4C15.8302 4 16.5018 4.67157 16.5018 5.5V7.5M13.5018 5.5V3.5C13.5018 2.67157 12.8302 2 12.0018 2C11.1733 2 10.5018 2.67157 10.5018 3.5L10.502 5M13.5018 5.5V9.50024M10.502 5C10.5016 4.17187 9.83019 3.50117 9.00197 3.50064C8.17376 3.50011 8 4 8 4M10.502 5V6.50045M16.5018 12V7.5M16.5018 7.5C16.5018 6.67157 17.1733 6 18.0018 6C18.8302 6 19.5018 6.67157 19.5018 7.5V13.6668C19.5018 14.3812 19.5018 14.9897 19.49 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: do-not-touch01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for do-not-touch01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-do-not-touch01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-do-not-touch01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-do-not-touch01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-do-not-touch01 3s ease-in-out infinite alternate;
}
</style>