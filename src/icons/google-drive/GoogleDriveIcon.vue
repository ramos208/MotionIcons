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
      <path d="M20.0165 19.4118L21.4236 16.8293C21.811 16.1181 22.0048 15.7625 21.9999 15.3776C21.995 14.9927 21.7923 14.642 21.3869 13.9404L15.9448 4.52296C15.5155 3.78003 15.3009 3.40856 14.9431 3.20428C14.5852 3 14.1493 3 13.2773 3H10.7227C9.85074 3 9.41475 3 9.05694 3.20428C8.69913 3.40856 8.48447 3.78003 8.05515 4.52296L2.61306 13.9404C2.20767 14.642 2.00497 14.9927 2.00009 15.3776C1.99521 15.7625 2.18895 16.1181 2.57643 16.8293L3.98351 19.4118C4.40512 20.1856 4.61592 20.5725 4.97988 20.7862C5.34384 21 5.7918 21 6.68772 21H17.3123C18.2082 21 18.6562 21 19.0201 20.7862C19.3841 20.5725 19.5949 20.1856 20.0165 19.4118Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 4L16 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.5 20.5L12 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21 15H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: google-drive
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for google-drive (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-google-drive {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-google-drive {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-google-drive 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-google-drive 3s ease-in-out infinite alternate;
}
</style>