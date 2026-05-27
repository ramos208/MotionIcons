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
      <path d="M192 0c-13.3 0-24 10.7-24 24l0 41.5C73.3 77.3 0 158.1 0 256S73.3 434.7 168 446.5l0 41.5c0 13.3 10.7 24 24 24s24-10.7 24-24l0-41.5c94.7-11.8 168-92.6 168-190.5 0-17.7-14.3-32-32-32l-136 0 0-93.8c25.3 4.8 47.9 17 65.6 34.3 12.6 12.4 32.9 12.2 45.3-.4s12.2-32.9-.5-45.3C297.2 90.2 258.8 70.8 216 65.5L216 24c0-13.3-10.7-24-24-24zM168 130.2l0 251.5C108.8 370.5 64 318.5 64 256s44.8-114.5 104-125.8zm48 251.5l0-93.8 100 0c-12.3 47.6-51.2 84.5-100 93.8z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: guarani-sign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for guarani-sign (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-guarani-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-guarani-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-guarani-sign 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-guarani-sign 3s ease-in-out infinite alternate;
}
</style>