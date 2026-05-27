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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 7c1.143 0 2.235 .035 3.275 .104c1.017 .068 1.95 .207 2.798 .42c.813 .203 1.52 .505 2.119 .909a3.903 3.903 0 0 1 1.328 1.531c.326 .657 .48 1.48 .48 2.466c0 1.006 -.189 1.91 -.574 2.707c-.375 .779 -.886 1.396 -1.537 1.848a3.696 3.696 0 0 1 -2.16 .66c-.509 0 -.97 -.068 -1.382 -.21a5.84 5.84 0 0 1 -1.17 -.548a18.45 18.45 0 0 1 -1.045 -.695a9.104 9.104 0 0 0 -1.001 -.63a2.376 2.376 0 0 0 -1.13 -.301c-.373 0 -.75 .097 -1.132 .3c-.316 .17 -.65 .38 -1 .63c-.322 .23 -.67 .462 -1.047 .695a5.78 5.78 0 0 1 -1.168 .548c-.413 .142 -.872 .21 -1.378 .21a3.706 3.706 0 0 1 -2.165 -.659c-.651 -.452 -1.162 -1.07 -1.537 -1.848c-.385 -.798 -.574 -1.7 -.574 -2.709c-.004 -.98 .15 -1.802 .477 -2.46a3.897 3.897 0 0 1 1.33 -1.531c.6 -.403 1.307 -.704 2.12 -.907a16.088 16.088 0 0 1 2.8 -.423c1.04 -.071 2.13 -.107 3.273 -.107"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: device-vision-pro
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for device-vision-pro (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-device-vision-pro {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-device-vision-pro {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-device-vision-pro 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-device-vision-pro 3s ease-in-out infinite alternate;
}
</style>