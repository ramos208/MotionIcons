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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 15h2a1.5 1.5 0 0 0 0 -3h-2v-3h3.5"/><path d="M3 12v.01"/><path d="M21 12v.01"/><path d="M12 21v.01"/><path d="M7.5 4.2v.01"/><path d="M16.5 19.8v.01"/><path d="M7.5 19.8v.01"/><path d="M4.2 16.5v.01"/><path d="M19.8 16.5v.01"/><path d="M19.8 7.5v.01"/><path d="M4.2 7.5v.01"/><path d="M16.5 4.206a9.042 9.042 0 0 0 -4.5 -1.206"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: time-duration-5
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for time-duration-5 (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-time-duration-5 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-time-duration-5 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-time-duration-5 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-time-duration-5 3s ease-in-out infinite alternate;
}
</style>