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
      <path d="M18.5 1.99805V7.99805M18.5 1.99805C17.7998 1.99805 16.4915 3.99235 16 4.49805M18.5 1.99805C19.2002 1.99805 20.5085 3.99235 21 4.49805" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.51185 13.5147V3.48575C6.51185 2.66411 7.17868 1.99805 8.00127 1.99805C8.82386 1.99805 9.4907 2.66411 9.4907 3.48575V8.68783M9.4907 8.68783V11.0115M9.4907 8.68783C10.2956 7.56941 12.0982 7.94193 12.4819 9.68079C12.4883 9.70965 12.4934 9.73874 12.4976 9.76798M12.5127 11.0075V10.0046C12.5127 9.9255 12.5088 9.84619 12.4976 9.76798M12.4976 9.76798C12.9908 8.41762 15.2553 8.93261 15.5019 10.8609M15.5019 10.8609V12.0069M15.5019 10.8609C15.9058 9.37034 18.5576 10.4121 18.5002 12.1544V15.3329C18.4973 17.059 18.2091 18.3105 17.183 19.34C16.235 20.4718 16.458 21.1053 16.4344 22.0017M6.51185 8.9905C5.19291 10.1843 3.69593 11.8159 3.50481 12.2023C2.61549 13.5544 2.93178 14.6153 4.1956 16.4175C5.13614 17.7587 6.39761 19.2534 6.4637 19.3282C7.1363 20.0896 7.00448 20.6958 7.00448 21.9907" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: swipe-up06
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for swipe-up06 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-swipe-up06 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-swipe-up06 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-swipe-up06 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-swipe-up06 3s ease-in-out infinite alternate;
}
</style>