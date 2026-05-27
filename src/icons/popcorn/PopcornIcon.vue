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
      <path d="M5.00342 12.001L6.03831 17.0164C6.49989 19.2534 6.73067 20.3719 7.55975 21.0308C9.13581 22.2831 14.8599 22.2871 16.441 21.0308C17.2701 20.3719 17.5009 19.2534 17.9625 17.0164L18.9973 12.001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.0044 12.0148L14.0044 21.999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.0938 2.31253C11.4908 2.4964 11.8312 2.8496 12.0243 3.02872C12.2175 2.8496 12.5092 2.49637 12.9062 2.3125C14.4774 1.58479 16.6099 2.17175 17.4834 3.66401C17.8376 4.26919 18.1149 5.10452 18.0481 5.98859C19.2574 5.98859 20.9317 6.89326 20.9968 8.83838C21.0557 10.5998 20.1509 11.3979 19.4073 11.7759C19.0347 11.9653 18.6108 12.0135 18.1926 12.0135L5.80737 12.0135C5.38915 12.0135 4.96528 11.9653 4.59267 11.7759C3.84906 11.3979 2.94431 10.5998 3.00322 8.83841C3.06828 6.89329 4.79866 6.03205 6.00801 6.03205C5.94113 5.14798 6.16241 4.26922 6.51665 3.66404C7.39012 2.17178 9.52256 1.58482 11.0938 2.31253Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: popcorn
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for popcorn (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-popcorn {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-popcorn {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-popcorn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-popcorn 3s ease-in-out infinite alternate;
}
</style>