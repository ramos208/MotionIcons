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
      <path d="M0 64C0 46.3 14.3 32 32 32l80 0c79.5 0 144 64.5 144 144 0 54.3-30 101.5-74.4 126.1l41 136.7c5.1 16.9-4.5 34.8-21.5 39.8s-34.8-4.5-39.8-21.5L120.1 319.8c-2.7 .1-5.4 .2-8.1 .2l-48 0 0 128c0 17.7-14.3 32-32 32S0 465.7 0 448L0 64zM64 256l48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0 0 160zm285.1-32l34.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-34.9 0c-7.2 0-13.1 5.9-13.1 13.1 0 5.7 3.7 10.7 9.1 12.5l49.4 15.9c31.9 10.3 53.5 39.9 53.5 73.4 0 42.6-34.5 77.1-77.1 77.1L320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l50.9 0c7.2 0 13.1-5.9 13.1-13.1 0-5.7-3.7-10.7-9.1-12.5l-49.4-15.9c-31.9-10.3-53.5-39.9-53.5-73.4 0-42.6 34.5-77.1 77.1-77.1z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rupee-sign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rupee-sign (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rupee-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-rupee-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rupee-sign 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rupee-sign 3s ease-in-out infinite alternate;
}
</style>