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
      <path d="M5.2057 13.5C6.61724 10.9057 6.10634 7.50433 4 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.7943 13.5C17.3828 10.9057 17.8937 7.50433 20 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3.84563 13.5H20.1544C21.6152 13.5 22.1108 13.1856 21.9799 11.6907C21.5401 6.67031 17.2341 2.5 12 2.5C6.76593 2.5 2.45986 6.67031 2.02015 11.6907C1.88922 13.1856 2.38484 13.5 3.84563 13.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4 19C4 17.4634 6.1186 17.1143 7.23329 16.6688C8.80778 16.0396 10.5 17.2472 10.5 19C10.5 20.7528 8.80778 21.9604 7.23329 21.3312C6.1186 20.8857 4 20.5366 4 19ZM4 19L2 19M20 19C20 17.4634 17.8814 17.1143 16.7667 16.6688C15.1922 16.0396 13.5 17.2472 13.5 19C13.5 20.7528 15.1922 21.9604 16.7667 21.3312C17.8814 20.8857 20 20.5366 20 19ZM20 19L22 19M10.5 18.5C10.7994 17.9022 11.359 17.5 12 17.5C12.641 17.5 13.2006 17.9022 13.5 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: swimming-cap
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for swimming-cap (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-swimming-cap {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-swimming-cap {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-swimming-cap 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-swimming-cap 3s ease-in-out infinite alternate;
}
</style>