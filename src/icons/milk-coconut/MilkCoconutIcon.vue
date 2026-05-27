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
      <path d="M10.9712 21.9985H8.01002M18.025 8.0386L15.7395 5.21499C15.591 5.03156 15.5122 4.80151 15.517 4.56556L15.5379 3.53212C15.5549 2.69196 14.8785 2.00171 14.0382 2.00171H6.48688C5.65846 2.00171 4.98688 2.67328 4.98688 3.50171V4.94586L2.56347 7.45745C2.20374 7.83026 2.00272 8.32811 2.00272 8.84618V19.9985C2.00272 21.103 2.89814 21.9985 4.00271 21.9985H8.00185H8.01002M18.025 8.0386V10.0815M18.025 8.0386H7.83972M5.02585 4.94586L7.44927 7.45745C7.6141 7.62827 7.74561 7.82535 7.83972 8.0386M8.01002 21.9985V8.84617C8.01002 8.56549 7.95101 8.29075 7.83972 8.0386" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.2479 18.5748C12.5939 17.9209 13.2566 16.1982 14.7282 14.7271C16.1997 13.2559 17.9229 12.5933 18.577 13.2472M13.2479 18.5748C13.2479 19.1667 13.603 20.1137 14.1361 20.6466C15.9347 22.4447 18.8507 22.4447 20.6493 20.6466C22.4479 18.8485 22.4479 15.9332 20.6493 14.1351C20.1163 13.6022 19.169 13.2472 18.577 13.2472M13.2479 18.5748C13.8115 19.1382 15.1689 18.7241 16.4752 17.6575M18.577 13.2472C19.2309 13.901 18.5683 15.6237 17.0967 17.0949C16.8931 17.2983 16.6849 17.4863 16.4752 17.6575M16.4752 17.6575C16.5836 18.3579 16.8006 19.1667 17.9848 19.7587" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: milk-coconut
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for milk-coconut (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-milk-coconut {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-milk-coconut {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-milk-coconut 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-milk-coconut 3s ease-in-out infinite alternate;
}
</style>