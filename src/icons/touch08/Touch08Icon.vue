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
      <path d="M7.77888 13.9566V9.49309M7.77888 9.49309V3.97813C7.77888 3.15856 8.46218 2.49805 9.28215 2.49805C10.1021 2.49805 10.7482 3.15856 10.7482 3.97813V7.97397M7.77888 9.49309C6.46416 10.6839 5.04938 12.1882 4.85886 12.5736C3.97239 13.9223 4.06531 14.5753 5.05322 16.2256C5.89231 17.6273 7.02077 19.1829 7.08664 19.2576C7.7571 20.017 7.62379 20.0172 8.59557 20.7303C9.46334 21.3323 11.2633 21.7517 15.483 21.3323C18.9206 20.8015 19.7442 17.8022 19.7263 16.3689V12.8293C19.9405 9.8874 18.7102 9.75461 16.4763 9.46504M10.7482 7.97397V10.4974M10.7482 7.97397C11.3057 7.06531 13.3304 7.43252 13.725 9.1484M13.7606 10.4935V9.49309C13.7606 9.41423 13.7567 9.33512 13.7456 9.2571M13.725 9.1484C13.7266 9.15562 13.7283 9.16286 13.7299 9.17013C13.7362 9.19892 13.7414 9.22793 13.7456 9.2571M13.725 9.1484C13.7291 9.18336 13.7359 9.2196 13.7456 9.2571M13.725 9.1484C13.5848 7.95243 16.6168 8.24397 16.7402 10.3473V11.4904" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: touch08
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for touch08 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-touch08 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-touch08 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-touch08 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-touch08 3s ease-in-out infinite alternate;
}
</style>