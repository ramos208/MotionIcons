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
      <path d="M 12,0 C 18.6,0 24,5.4 24,12 24,18.6 18.6,24 12,24 5.4,24 0,18.6 0,12 0,5.4 5.4,0 12,0 Z m 2.94,14.34 C 16.26,12.66 16.08,10.26 14.4,9 12.78,7.74 10.38,8.04 9,9.72 7.68,11.4 7.86,13.8 9.54,15.06 c 1.68,1.26 4.08,0.96 5.4,-0.72 z m -6.42,7.8 c 0.72,0.3 2.28,0.6 3.06,0.6 l 5.22,-7.56 c 1.68,-2.52 1.26,-5.94 -1.08,-7.8 -2.1,-1.68 -5.04,-1.62 -7.14,0 l -7.26,5.58 c 0.18,1.92 0.72,2.88 0.72,2.94 l 4.14,-4.5 c -0.3,1.98 0.42,4.02 2.1,5.28 1.44,1.14 3.18,1.44 4.86,1.08 z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: appveyor
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for appveyor (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-appveyor {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-appveyor {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-appveyor 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-appveyor 3s ease-in-out infinite alternate;
}
</style>