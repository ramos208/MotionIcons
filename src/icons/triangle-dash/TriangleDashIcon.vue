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
      <path d="M13.9248 3.97827C13.2978 3.32609 12.6956 3 12 3C11.3044 3 10.7022 3.32609 10.0752 3.97827M16.3534 7.5C16.5886 7.89214 16.8364 8.30992 17.0994 8.75332L17.5423 9.5M7.64658 7.5C7.41137 7.89215 7.16357 8.30992 6.90057 8.75333L6.45769 9.5M19.3216 12.5C19.7565 13.2343 20.1465 13.8974 20.4854 14.5M4.6784 12.5C4.24346 13.2343 3.8535 13.8974 3.51458 14.5M21.9695 18C22.0492 18.5659 21.9745 19.0511 21.7236 19.4939C21.3899 20.0831 20.8323 20.4418 20 20.6602M2.0305 18C1.95078 18.5659 2.0255 19.0511 2.27636 19.4939C2.61013 20.0831 3.16765 20.4418 4 20.6602M16 20.9936C15.388 20.9998 14.7224 21 14 21M10 21C9.27757 21 8.612 20.9998 8 20.9936" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: triangle-dash
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for triangle-dash (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-triangle-dash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-triangle-dash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-triangle-dash 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-triangle-dash 3s ease-in-out infinite alternate;
}
</style>