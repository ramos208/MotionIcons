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
      <path d="M11.923 0C5.937 0 .976 4.384.07 10.115a11.943 11.943 0 0 1 7.645-2.754 11.982 11.982 0 0 1 9.43 4.58 11.942 11.942 0 0 0 1.015-8.769 12.066 12.066 0 0 0-.626-1.772l-.003-.008A11.968 11.968 0 0 0 11.923 0Zm7.721 2.754A12.002 12.002 0 0 1 9.398 16.521a12.082 12.082 0 0 0 9.02 5.617c.24-.119.766-.51 1.224-.89A11.971 11.971 0 0 0 23.995 12a11.98 11.98 0 0 0-4.35-9.247zM9.33 7.557a12.159 12.159 0 0 0-2.647.401A11.944 11.944 0 0 0 .01 12.595l-.005.006c.021.427.065.853.131 1.275C1.037 19.61 6 24 11.991 24c1.45 0 2.887-.26 4.243-.773a12 12 0 0 1-6.905-15.67z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: appium
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for appium (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-appium {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-appium {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-appium 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-appium 3s ease-in-out infinite alternate;
}
</style>