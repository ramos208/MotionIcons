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
      <path d="M16.2494 22.0012C16.2798 20.1362 16.2126 20.5213 16.3651 20.0469C16.5177 19.5724 17.1082 18.7482 17.4736 17.6984C18.4962 14.7597 17.9519 13.5537 16.4377 12.6174C14.8423 11.6308 13.2317 11.2482 11.8206 11.3704V6.73351C11.8206 5.7716 11.275 5.02918 10.3117 5.02918C9.34833 5.02918 8.86228 5.86682 8.86228 6.82872L8.91294 11.6642M8.89472 22.0012V21.3328C8.89472 20.5476 8.63697 20.2124 7.54691 18.6357C6.34528 16.8976 6.35032 16.8151 6.07506 16.0583C6.02633 15.705 5.72775 14.8804 6.83195 13.7301L8.91294 11.6642M8.91294 15.1907V11.6642" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.49727 6.0232C6.4315 5.10323 6.99749 3.28328 8.55063 2.52231C9.19108 2.13281 10.949 1.52974 12.6304 2.60432C14.2874 3.66333 14.3992 5.22472 14.5035 6.01284" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tap02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tap02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tap02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tap02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tap02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tap02 3s ease-in-out infinite alternate;
}
</style>