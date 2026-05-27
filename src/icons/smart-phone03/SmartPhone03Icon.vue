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
      <path d="M5.5 6C5.51447 4.29344 5.60926 3.35264 6.22992 2.73223C6.96244 2 8.14143 2 10.4994 2H13.5006C15.8586 2 17.0376 2 17.7701 2.73223C18.3907 3.35264 18.4855 4.29344 18.5 6M18.5 18.0001C18.4855 19.7066 18.3907 20.6474 17.7701 21.2678C17.0376 22 15.8586 22 13.5006 22H10.4994C8.14143 22 6.96244 22 6.22992 21.2678C5.60926 20.6474 5.51447 19.7066 5.5 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.5 8.5C19.5 8.5 18.5 8.846 18.5 9.8125C18.5 10.779 19.5 11.0335 19.5 12C19.5 12.9665 18.5 13.221 18.5 14.1875C18.5 15.154 19.5 15.5 19.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.5 8.5C4.5 8.5 5.5 8.846 5.5 9.8125C5.5 10.779 4.5 11.0335 4.5 12C4.5 12.9665 5.5 13.221 5.5 14.1875C5.5 15.154 4.5 15.5 4.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 2H10L10.5 3H13.5L14 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: smart-phone03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for smart-phone03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-smart-phone03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-smart-phone03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-smart-phone03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-smart-phone03 3s ease-in-out infinite alternate;
}
</style>