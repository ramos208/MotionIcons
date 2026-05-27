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
      <path d="m12 0 10.349 6v12L12 24 1.651 18V6zm0 .326L1.897 6.158v11.664L12 23.653l10.103-5.831V6.158zM8.84 20.523l-5.801-3.349V6.826L12 1.653l2.23 1.287-8.925 5.195v7.73l5.792 3.345zm6.299-17.058 5.822 3.361v10.348L12 22.347l-2.274-1.312 8.969-5.17v-7.73l-5.823-3.362zm-2.137 3.35v2.869l.024 7.666-.691.384-2.18-1.249.008-6.801H8.958L8.95 8.351l3.412-1.965z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: 1panel
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for 1panel (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-1panel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-1panel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-1panel 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-1panel 3s ease-in-out infinite alternate;
}
</style>