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
      <path d="M2.00406 12.1864C2.07656 13.8499 3.42215 15.1955 6.11333 17.8867C8.80451 20.5778 10.1501 21.9234 11.8136 21.9959C11.9378 22.0014 12.0622 22.0014 12.1864 21.9959C13.8499 21.9234 15.1955 20.5778 17.8867 17.8867C20.5778 15.1955 21.9234 13.8499 21.9959 12.1864C22.0014 12.0622 22.0014 11.9378 21.9959 11.8136C21.9234 10.1501 20.5778 8.80451 17.8867 6.11333C15.1955 3.42215 13.8499 2.07656 12.1864 2.00406C12.0622 1.99865 11.9378 1.99865 11.8136 2.00406C10.1501 2.07656 8.80451 3.42215 6.11333 6.11333C3.42215 8.80451 2.07656 10.1501 2.00406 11.8136C1.99865 11.9378 1.99865 12.0622 2.00406 12.1864Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 12.0007H16M11.995 16.0059L11.995 8.00586" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: diamond-plus
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for diamond-plus (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-diamond-plus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-diamond-plus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-diamond-plus 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-diamond-plus 3s ease-in-out infinite alternate;
}
</style>