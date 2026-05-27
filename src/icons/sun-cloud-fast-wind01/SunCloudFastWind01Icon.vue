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
      <path d="M9.00488 4.15468C8.3104 3.15451 7.15576 2.5 5.84876 2.5C3.72584 2.5 2.00488 4.22674 2.00488 6.35679C2.00488 7.65354 2.64271 8.80081 3.62076 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.1588 21.4146C14.3031 21.4699 14.4585 21.5 14.6203 21.5C15.385 21.5 16.0049 20.8284 16.0049 20C16.0049 19.1716 15.385 18.5 14.6203 18.5C14.3488 18.5 14.0956 18.5846 13.8819 18.7309C12.8207 19.5225 10.8549 20.5378 8.62023 20.801M5.85102 20.6936C5.2328 20.5635 4.61355 20.3541 4.00488 20.0478" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.0049 20.5C19.263 20.5 19.9606 20.5 21.0049 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.4782 8.40196C17.4856 8.40192 17.4931 8.40191 17.5006 8.40191C19.9849 8.40191 21.8964 10.36 21.9983 12.6502C22.0763 15.7 19.4254 17.308 17.5062 17.248M17.4782 8.40196C17.493 8.24557 17.5006 8.08719 17.5006 7.92713C17.5006 4.96 15.0368 2.5 12.0005 2.5C9.06174 2.5 6.74504 4.77718 6.50324 7.44927M17.4782 8.40196C17.376 9.47916 17.0384 10.42 16.2347 11.356M6.50324 7.44927C3.96786 7.67846 2.12265 9.76 2.0027 12.1754C1.92473 14.5 3.54406 16.12 5.52323 16.9C9.18169 18.28 12.6602 17.104 13.8237 15.124C14.3155 14.104 13.7398 12.64 12.3604 12.37C11.5207 12.16 10.0813 12.7 9.99735 14.302M6.50324 7.44927C6.66101 7.43501 6.82091 7.42771 6.98262 7.42771C8.10796 7.42771 9.12172 7.72 10.0093 8.404" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sun-cloud-fast-wind01
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for sun-cloud-fast-wind01 (hugeicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sun-cloud-fast-wind01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sun-cloud-fast-wind01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sun-cloud-fast-wind01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sun-cloud-fast-wind01 3s ease-in-out infinite alternate;
}
</style>