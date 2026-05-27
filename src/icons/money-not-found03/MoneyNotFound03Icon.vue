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
      <path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.2321 10.2322C9.77966 10.6846 9.49982 11.3096 9.49982 12C9.49982 13.3807 10.6191 14.5 11.9998 14.5C12.6902 14.5 13.3152 14.2202 13.7676 13.7677" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.6567 17.6567C21.8699 17.3788 22 17.0452 22 16.6823V6.92705C22 6.35889 21.6756 5.84452 21.1329 5.67632C20.1903 5.38421 18.4794 5 16 5C13.3535 5 11.8276 5.56032 9.79122 5.79122M18.2194 18.2194C17.5647 18.1519 16.8248 18.1094 16 18.1094C11.2491 18.1094 10.1096 19.9151 3.1448 18.3792C2.47265 18.231 2 17.6265 2 16.9382V6.92116C2 5.94531 2.92079 5.23366 3.87798 5.42361C4.54928 5.55682 5.16308 5.65694 5.72951 5.72951" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.00049 14.4961C4.20963 14.4961 6.00049 16.287 6.00049 18.4961M22 9.46899C20.2655 9.46899 18.5005 7.53964 18.5005 5.5M2 9C3.89206 9 5.59814 7.50048 5.90439 5.90439M19.6804 15.6804C20.3523 15.2499 21.1706 15 22 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: money-not-found03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for money-not-found03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-money-not-found03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-money-not-found03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-money-not-found03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-money-not-found03 3s ease-in-out infinite alternate;
}
</style>