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
      <path d="M12 5V2M12 12V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.87257 3.33268L10.3339 2.45962C11.3594 1.84696 12.6406 1.84696 13.6661 2.45962L15.1274 3.33268C18.847 5.55488 20.1003 10.3301 17.9482 14.0802C17.9114 14.1442 17.8857 14.214 17.872 14.2865L17.2339 17.6749C17.174 17.9932 17.1441 18.1523 17.1094 18.2911C16.5906 20.3674 14.7763 21.8667 12.6311 21.9918C12.4877 22.0001 12.3252 22.0001 12 22.0001C11.6748 22.0001 11.5123 22.0001 11.3689 21.9918C9.22372 21.8667 7.40941 20.3674 6.89063 18.2911C6.85595 18.1523 6.82599 17.9932 6.76606 17.6749L6.12799 14.2865C6.11434 14.214 6.08859 14.1442 6.05182 14.0802C3.89969 10.3301 5.15297 5.55488 8.87257 3.33268Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 15C16.6595 13.1832 14.4715 12 12 12C9.52848 12 7.34053 13.1832 6 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.5 6.5C10.5 6.03406 10.5 5.80109 10.5761 5.61732C10.6776 5.37229 10.8723 5.17761 11.1173 5.07612C11.3011 5 11.5341 5 12 5C12.4659 5 12.6989 5 12.8827 5.07612C13.1277 5.17761 13.3224 5.37229 13.4239 5.61732C13.5 5.80109 13.5 6.03406 13.5 6.5V7.5C13.5 7.96594 13.5 8.19891 13.4239 8.38268C13.3224 8.62771 13.1277 8.82239 12.8827 8.92388C12.6989 9 12.4659 9 12 9C11.5341 9 11.3011 9 11.1173 8.92388C10.8723 8.82239 10.6776 8.62771 10.5761 8.38268C10.5 8.19891 10.5 7.96594 10.5 7.5V6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mouse17
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mouse17 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mouse17 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mouse17 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mouse17 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mouse17 3s ease-in-out infinite alternate;
}
</style>