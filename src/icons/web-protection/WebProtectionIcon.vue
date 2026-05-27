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
      <path d="M3.5 7.50006H20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 20.5001C7.22876 20.5001 5.34315 20.5001 4.17157 19.3285C3 18.1569 3 16.2713 3 12.5001V10.5001C3 6.72882 3 4.84321 4.17157 3.67163C5.34315 2.50006 7.22876 2.50006 11 2.50006H13C16.7712 2.50006 18.6569 2.50006 19.8284 3.67163C21 4.84321 21 6.72883 21 10.5001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21 17.1205V15.1494C21 14.8394 20.7723 14.5821 20.477 14.5293C19.2869 14.3165 18.299 13.8431 17.817 13.5807C17.6197 13.4732 17.3803 13.4732 17.183 13.5807C16.701 13.8431 15.7131 14.3165 14.523 14.5293C14.2277 14.5821 14 14.8394 14 15.1494V17.1205C14 19.6919 16.5424 21.0944 17.2935 21.4527C17.426 21.5159 17.574 21.5159 17.7065 21.4527C18.4576 21.0944 21 19.6919 21 17.1205Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: web-protection
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for web-protection (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-web-protection {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-web-protection {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-web-protection 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-web-protection 3s ease-in-out infinite alternate;
}
</style>