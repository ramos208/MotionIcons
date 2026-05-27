<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M7.06641 12.0024C7.06641 12.0024 7.06616 15.0024 9.99951 16.0024" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 21.3757C20.5547 22.1867 18.7056 22.1867 17.2604 21.3757C16.3889 20.878 15.2412 20.878 14.3698 21.3757C14.3698 21.3757 14.3486 21.3757 14.3486 21.3941C12.9033 22.2052 11.0542 22.2052 9.63019 21.3941C8.73752 20.8964 7.61105 20.8964 6.73964 21.3941M6.73964 21.3757C5.29436 22.1867 3.44527 22.1867 2 21.3757" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 7.00244C11 12.2491 15.2533 16.5024 20.5 16.5024H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.88792 6.92656C7.25992 7.14256 7.97992 7.68256 9.17992 7.46656C10.6199 7.02256 11.8009 6.65115 12.7199 7.20256C13.6199 7.74256 14.2199 8.22256 14.5799 7.98256C14.7578 8.01814 15.0555 7.33634 14.9939 6.36256C14.9517 5.69425 14.7207 4.8884 14.2079 4.08256C13.9079 3.66256 13.7148 3.51528 13.6799 3.48256C11.7361 1.65713 8.59877 1.35756 5.81992 3.48256C2.69992 6.00256 2.27992 9.18256 2.09992 10.7426C1.79992 13.7426 2.27992 17.1626 2.75992 19.0226" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tsunami
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for tsunami (hugeicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tsunami {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tsunami {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tsunami 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tsunami 3s ease-in-out infinite alternate;
}
</style>