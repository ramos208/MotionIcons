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
      <path d="M168,152c0,17.64-17.94,32-40,32s-40-14.36-40-32a8,8,0,0,1,16,0c0,8.67,11,16,24,16s24-7.33,24-16c0-9.48-8.61-13-26.88-18.26C109.37,129.2,89.78,123.55,89.78,104c0-18.24,16.43-32,38.22-32,15.72,0,29.18,7.3,35.12,19a8,8,0,1,1-14.27,7.22C145.64,91.94,137.65,88,128,88c-12.67,0-22.22,6.88-22.22,16,0,7,9,10.1,23.77,14.36C145.78,123,168,129.45,168,152Zm64,24a56.06,56.06,0,0,1-56,56,55.38,55.38,0,0,1-31.17-9.47A96.09,96.09,0,0,1,33.47,111.17,55.38,55.38,0,0,1,24,80,56.06,56.06,0,0,1,80,24a55.38,55.38,0,0,1,31.17,9.47A96.09,96.09,0,0,1,222.53,144.83,55.38,55.38,0,0,1,232,176Zm-16,0a39.6,39.6,0,0,0-8.32-24.42,8,8,0,0,1-1.49-6.58A80.07,80.07,0,0,0,111,49.81a8,8,0,0,1-6.58-1.49A39.6,39.6,0,0,0,80,40,40,40,0,0,0,40,80a39.6,39.6,0,0,0,8.32,24.42A8,8,0,0,1,49.81,111,80.07,80.07,0,0,0,145,206.19a8,8,0,0,1,6.58,1.49A39.6,39.6,0,0,0,176,216,40,40,0,0,0,216,176Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: skype-logo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for skype-logo (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-skype-logo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-skype-logo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-skype-logo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-skype-logo 3s ease-in-out infinite alternate;
}
</style>