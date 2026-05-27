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
      <path d="M20.8 14.2222H3.65383C3.38535 14.2222 3.14955 14.4005 3.07648 14.6589L1.71969 19.4556C1.35863 20.7321 2.31762 22 3.64418 22H20.3558C21.6824 22 22.6414 20.7321 22.2803 19.4556L20.8 14.2222ZM20.8 14.2222V8.11108" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.19995 14.2222V4C3.19995 2.89543 4.09538 2 5.19995 2H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 19L13 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.6569 4.82837L14.8284 7.6568" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.4853 4.82843C19.7042 5.60948 18.4379 5.60948 17.6569 4.82843C16.8758 4.04738 16.8758 2.78105 17.6569 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.8284 10.4853C15.6094 9.70427 15.6094 8.43794 14.8284 7.65689C14.0473 6.87584 12.781 6.87584 12 7.65689" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: laptop-fix
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for laptop-fix (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-laptop-fix {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-laptop-fix {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-laptop-fix 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-laptop-fix 3s ease-in-out infinite alternate;
}
</style>