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
      <path d="M20.6462 10.5945L17.7476 13.4971C15.7464 15.501 12.502 15.501 10.5008 13.4971C8.49972 11.4933 8.49972 8.2444 10.5008 6.24055L14.1242 2.61227M20.6462 10.5945C18.8346 9.02224 14.1242 6.96621 9.77617 11.3201M20.6462 10.5945C21.0086 9.50601 21.7332 6.60338 18.8346 3.70076C17.0229 1.88662 15.2112 1.52379 14.1242 2.61227M14.1242 2.61227C13.5203 3.45887 12.9647 5.80516 15.5735 8.41752C17.7578 7.32389 18.2925 4.53425 18.1453 3.20329" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.06728 18.166C4.90588 17.6386 5.24168 17.0884 5.78541 17.0317C7.33156 16.8703 8.29904 17.3323 8.99999 18.0055C9.65747 18.637 10.1273 19.64 10.4832 20.7716C10.648 21.2957 10.3279 21.8508 9.7895 21.933C8.72778 22.0951 7.86563 21.9733 7.09559 21.4257C6.31723 20.9118 5.5941 19.8873 5.06728 18.166Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 12C4.5444 15 3 22 3 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rose
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rose (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rose {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rose {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rose 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rose 3s ease-in-out infinite alternate;
}
</style>