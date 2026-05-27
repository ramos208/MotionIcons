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
      <path d="M539.9 352l-95.6 0-8.4-66.1c-2.9-23.2-15.9-43.9-35.4-56.8L252.2 131.5c-18-11.9-39.7-15.7-60.1-11.5 2.5-4.3 5.9-7.9 10.1-10.7L350.6 11.6c10.7-7 24.5-7 35.2 0l148.4 97.7c7.8 5.1 13 13.4 14.2 22.7l23.3 184c2.4 19.1-12.5 36-31.7 36zM4.8 476l23.3-184c1.2-9.3 6.3-17.6 14.2-22.7l148.4-97.7c10.7-7 24.5-7 35.2 0l148.4 97.7c7.8 5.1 13 13.4 14.2 22.7l23.3 184c2.4 19.1-12.5 36-31.7 36l-49.7 0c-11.2 0-21.5-5.8-27.3-15.4l-77-126.7c-1.7-2.8-4.8-4.6-8.1-4.6-5.3 0-9.5 4.3-9.5 9.5l0 105.2c0 17.7-14.3 32-32 32L36.5 512c-19.3 0-34.2-16.9-31.7-36z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tents
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tents (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tents {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tents {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tents 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tents 3s ease-in-out infinite alternate;
}
</style>