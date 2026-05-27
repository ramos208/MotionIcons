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
      <path d="M186.42,123.65a63.81,63.81,0,0,0-11.13-6.72c-4-29.89-24-39.31-33.1-42.07-19.78-6-42.51,1.19-52.85,16.7a8,8,0,0,0,13.32,8.88c6.37-9.56,22-14.16,34.89-10.27,9.95,3,16.82,10.3,20.15,21a81.05,81.05,0,0,0-15.29-1.43c-13.92,0-26.95,3.59-36.67,10.1C94.3,127.57,88,139,88,152c0,20.58,15.86,35.52,37.71,35.52a48,48,0,0,0,34.35-14.81c6.44-6.7,14-18.36,15.61-37.1.38.26.74.53,1.1.8C186.88,144.05,192,154.68,192,168c0,19.36-20.34,48-64,48-26.73,0-45.48-8.65-57.34-26.44C60.93,175,56,154.26,56,128s4.93-47,14.66-61.56C82.52,48.65,101.27,40,128,40c32.93,0,54,13.25,64.53,40.52a8,8,0,1,0,14.93-5.75C194.68,41.56,167.2,24,128,24,96,24,72.19,35.29,57.34,57.56,45.83,74.83,40,98.52,40,128s5.83,53.17,17.34,70.44C72.19,220.71,96,232,128,232c30.07,0,48.9-11.48,59.4-21.1C200.3,199.08,208,183,208,168,208,149.66,200.54,134.32,186.42,123.65Zm-37.89,38a31.94,31.94,0,0,1-22.82,9.9c-10.81,0-21.71-6-21.71-19.52,0-12.63,12-26.21,38.41-26.21A63.88,63.88,0,0,1,160,128.24C160,142.32,156,153.86,148.53,161.62Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: threads-logo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for threads-logo (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-threads-logo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-threads-logo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-threads-logo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-threads-logo 3s ease-in-out infinite alternate;
}
</style>