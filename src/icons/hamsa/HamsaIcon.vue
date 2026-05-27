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
      <path d="M34.6 288L80 288c8.8 0 16-7.2 16-16L96 72c0-22.1 17.9-40 40-40s40 17.9 40 40l0 132c0 11 9 20 20 20s20-9 20-20l0-164c0-22.1 17.9-40 40-40s40 17.9 40 40l0 164c0 11 9 20 20 20s20-9 20-20l0-132c0-22.1 17.9-40 40-40s40 17.9 40 40l0 200c0 8.8 7.2 16 16 16l45.4 0c19.1 0 34.6 15.5 34.6 34.6 0 8.6-3.2 16.9-9 23.3L416.6 441c-41.1 45.2-99.4 71-160.6 71S136.6 486.2 95.4 441L9 345.9c-5.8-6.4-9-14.7-9-23.3 0-19.1 15.5-34.6 34.6-34.6zM256 288c-38.4 0-76.8 35.8-90.6 50.2-3.6 3.7-5.4 8.7-5.4 13.8s1.8 10.1 5.4 13.8C179.2 380.2 217.6 416 256 416s76.8-35.8 90.6-50.2c3.6-3.7 5.4-8.7 5.4-13.8s-1.8-10.1-5.4-13.8C332.8 323.8 294.4 288 256 288zm0 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hamsa
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hamsa (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hamsa {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hamsa {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hamsa 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hamsa 3s ease-in-out infinite alternate;
}
</style>