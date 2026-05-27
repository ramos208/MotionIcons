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
      <path d="M21.8181 16.9135C21.529 21.3939 18.298 21.7828 17.8843 21.9761C21.5207 16.9135 13.4265 11.766 12.3023 11.1653C11.1781 10.5647 9.67557 9.86998 8.90473 9.36339C7.62719 8.5238 7.174 7.74514 6.83123 7.13602C6.28163 6.15937 6.24663 3.85251 8.70487 3.73238C11.1631 3.61225 12.857 4.63324 12.9692 5.26037C12.7709 6.65093 15.4209 9.19726 17.7283 7.33718C20.3908 5.19091 17.9809 2.1304 16.9247 2C21.5928 2.22844 21.8365 6.07983 21.965 8.11072L21.9651 8.11266C21.9651 8.11266 22.1071 12.4331 21.8181 16.9135Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.89221 21.5863C6.26017 18.7986 3.54263 17.6062 2.34281 18.0723C2.34281 18.0723 2 16.6741 2 14.2702V10.1C2.29361 10.9332 3.89608 13.1929 7.9571 15.0752C12.0181 16.9576 12.9787 18.6656 12.9787 19.2348C13.0383 19.7208 12.8844 20.9048 11.737 21.9374C10.0055 22.0232 6.33792 22.102 5.89221 21.5863Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: scribd
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for scribd (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-scribd {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-scribd {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-scribd 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-scribd 3s ease-in-out infinite alternate;
}
</style>