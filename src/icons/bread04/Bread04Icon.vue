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
      <path d="M8.5 4C5.04311 4 2 5.59321 2 7.55853C2 8.92302 3.6427 9.93848 3.43338 11.2206L3.18919 15.7778C3.08307 17.7584 3.03001 18.7487 3.59988 19.3744C4.16975 20 5.12486 20 7.0351 20H9.9649C11.8751 20 12.8303 20 13.4001 19.3744C13.97 18.7487 13.9169 17.7584 13.8108 15.7778L13.5666 11.2206C13.3573 9.93848 15 8.92302 15 7.55853C15 5.59321 11.9569 4 8.5 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 20H17.1838C19.011 20 19.9246 20 20.4697 19.3744C21.0148 18.7487 20.964 17.7584 20.8625 15.7778L20.629 11.2206C20.4287 9.93848 22 8.92302 22 7.55853C22 5.59321 19.0892 4 15.7826 4H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bread04
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bread04 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bread04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bread04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bread04 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bread04 3s ease-in-out infinite alternate;
}
</style>