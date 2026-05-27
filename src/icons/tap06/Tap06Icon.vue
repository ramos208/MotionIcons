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
      <path d="M7.50952 14.3526V6.09638C7.50952 5.27475 8.11882 4.50586 8.94199 4.50586C9.76515 4.50586 10.519 5.15854 10.519 5.98017V10.2612M10.519 10.2612L10.5104 11.437M10.519 10.2612C11.0812 8.14404 13.6712 8.95626 13.5126 10.6167C13.5097 10.6461 13.5126 11.355 13.5126 11.355M13.5126 11.355V12.4956M13.5126 11.355C13.7959 9.44431 16.935 9.39199 16.5347 12.3053M16.5347 12.3053L16.5119 12.9935M16.5347 12.3053C17.0039 10.2952 19.5697 10.7279 19.5016 12.5806V16.2679C19.4989 17.8445 19.1909 18.5983 18.3768 19.547C18.2169 19.7333 18.0613 19.926 17.9447 20.142C17.5165 20.9353 17.7129 21.1529 17.6417 21.9926M7.50952 10.4132C6.18966 11.607 5.30133 12.6969 5.03525 13.0223C4.14531 14.3745 4.37154 15.26 5.63625 17.0622C6.57744 18.4033 7.44202 19.3674 7.50815 19.4422C8.18123 20.2036 8.12175 20.7057 8.12175 22.0006" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.0343 6C13.0343 3.79086 11.2392 2 9.02494 2C6.81065 2 5.01562 3.79086 5.01562 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tap06
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tap06 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tap06 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tap06 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tap06 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tap06 3s ease-in-out infinite alternate;
}
</style>