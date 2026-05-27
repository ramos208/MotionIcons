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
      <path d="M16.5557 4.61883C15.7488 4.07099 14.8724 3.64848 13.9552 3.3602C12.7981 2.99648 12.2195 2.81462 11.6098 3.2715C11 3.72839 11 4.4705 11 5.95472V10.5064C11 11.7697 11 12.4013 11.2341 12.9676C11.4683 13.534 11.9122 13.9761 12.8 14.8604L15.999 18.0466C17.0421 19.0855 17.5637 19.605 18.3116 19.4823C19.0596 19.3597 19.3367 18.8125 19.8911 17.7182C20.3153 16.881 20.6251 15.9835 20.8079 15.0499C21.1937 13.0788 20.9957 11.0358 20.2388 9.17903C19.4819 7.32232 18.2002 5.73535 16.5557 4.61883Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 20.4184C13.0736 20.7934 12.0609 20.9999 11 20.9999C6.58172 20.9999 3 17.4182 3 12.9999C3 9.56293 5.16736 6.6322 8.20988 5.49988" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pie-chart09
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pie-chart09 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pie-chart09 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pie-chart09 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pie-chart09 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pie-chart09 3s ease-in-out infinite alternate;
}
</style>