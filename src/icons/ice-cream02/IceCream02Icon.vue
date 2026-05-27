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
      <path d="M7.5 12L8.32693 14.6957C9.82073 19.5652 10.5676 22 12 22C13.4324 22 14.1793 19.5652 15.6731 14.6957L16.5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 8.66667C12 9.26343 12.1647 9.82357 12.4531 10.3081M12.4531 10.3081C11.7173 11.3298 10.4825 12 9.08333 12C6.82817 12 5 10.2589 5 8.11111C5 6.22776 6.40574 4.6571 8.27244 4.2989C8.91067 2.94384 10.3396 2 12 2C14.0719 2 15.7833 3.46957 16.0479 5.37393M12.4531 10.3081C13.0544 11.3183 14.1936 12 15.5 12C17.433 12 19 10.5076 19 8.66667C19 7.00322 17.7206 5.62436 16.0479 5.37393M15.6904 7.55556C15.9423 7.05041 16.0833 6.48533 16.0833 5.88889C16.0833 5.71431 16.0713 5.54242 16.0479 5.37393" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ice-cream02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ice-cream02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ice-cream02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ice-cream02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ice-cream02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ice-cream02 3s ease-in-out infinite alternate;
}
</style>