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
      <path d="M20.94 20C20.7001 19.5608 20.5461 18.7733 20.7747 17.9828C21.072 16.9548 21.2166 16.6616 20.2832 16.1146L18.8943 15.3006C18.0159 14.7858 17.8318 14.9376 17.1901 15.7146C16.4066 16.6636 15.0099 17.7544 13 18.2276" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 7V5.2C2 4.2072 2.17267 4 3 4H8C8.9076 4 9 4.55496 9 5.5C9 6.44504 8.9076 7 8 7H2ZM2 7V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 12H3C5.45356 12 6.68034 12 7.73607 12.5279C8.7918 13.0557 9.52786 14.0372 11 16C13.9754 19.9672 17.4727 20 22 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 12L3.46941 19.8369C3.48715 19.9315 3.56974 20 3.66599 20H4.3C4.41046 20 4.5004 19.914 4.50314 19.8036C4.52912 18.7574 4.7698 13.8381 7 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: high-heels02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for high-heels02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-high-heels02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-high-heels02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-high-heels02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-high-heels02 3s ease-in-out infinite alternate;
}
</style>