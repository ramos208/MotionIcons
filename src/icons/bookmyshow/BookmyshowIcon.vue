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
      <path d="M5.338 16.595a.66.66 0 01-.554-.66v-8.07a.67.67 0 01.679-.672h5.901c.154 0 .308.015.458.04a2.622 2.622 0 012.19 2.576v6.126a.66.66 0 01-.204.478.684.684 0 01-.6.182.66.66 0 01-.553-.66V9.809a1.277 1.277 0 00-1.29-1.272h-1.287v7.398a.678.678 0 01-.806.66.66.66 0 01-.553-.66v-7.4H6.142v7.4a.66.66 0 01-.202.478.682.682 0 01-.602.182m9.812 3.517a.66.66 0 01-.555-.662c0-.183.07-.353.196-.478a.684.684 0 01.484-.193c.572 0 1.068-.365 1.232-.909l.701-2.307-2.294-7.576a.677.677 0 01.453-.847.695.695 0 01.84.444l1.705 5.65 1.724-5.647c.085-.318.43-.52.786-.459l.048.01a.68.68 0 01.458.85l-2.362 7.774-.746 2.489c-.193.571-.525 1.036-.957 1.349a2.678 2.678 0 01-1.588.522.664.664 0 01-.125-.011M24 7.172l-1.353-2.277-2.421 1.137-1.353-2.278-2.42 1.138-1.354-2.277-2.42 1.138-1.354-2.277-2.42 1.136L7.55.335 5.132 1.47 0 17.957l6.226 1.88a3.295 3.295 0 013.151-2.297c1.822 0 3.3 1.46 3.3 3.26l-.002.065c.015.295-.02.594-.11.887l6.331 1.914L24 7.17"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bookmyshow
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bookmyshow (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bookmyshow {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bookmyshow {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bookmyshow 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bookmyshow 3s ease-in-out infinite alternate;
}
</style>