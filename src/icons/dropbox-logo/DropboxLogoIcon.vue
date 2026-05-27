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
      <path d="M236.55,149.42,194.05,120l42.5-29.42a8,8,0,0,0,0-13.16l-52-36a8,8,0,0,0-9.1,0L128,74.27,80.55,41.42a8,8,0,0,0-9.1,0l-52,36a8,8,0,0,0,0,13.16L62,120l-42.5,29.42a8,8,0,0,0,0,13.16l52,36a8,8,0,0,0,9.1,0L128,165.73l47.45,32.85a8,8,0,0,0,9.1,0l52-36a8,8,0,0,0,0-13.16ZM128,146.27,90.05,120l38-26.27L166,120Zm52-88.54L218,84,180,110.27,142.05,84Zm-104,0L114,84,76,110.27,38.05,84Zm0,124.54L38.05,156l38-26.27L114,156Zm104,0L142.05,156,180,129.73,218,156Zm-21.53,24.64a8,8,0,0,1-2,11.13l-23.89,16.54a8,8,0,0,1-9.1,0L99.56,218a8,8,0,0,1,9.1-13.16L128,218.27l19.34-13.39A8,8,0,0,1,158.47,206.91Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dropbox-logo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dropbox-logo (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dropbox-logo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dropbox-logo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dropbox-logo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dropbox-logo 3s ease-in-out infinite alternate;
}
</style>