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
      <path d="M20.64 20.6357C22.1695 19.1068 22.717 17.1755 20.64 15.0994C18.5628 13.0232 15.1011 12.3312 13.7164 13.7153M20.64 20.6357C19.1104 22.1645 17.1782 22.7118 15.1011 20.6357C13.024 18.5595 12.3317 15.0994 13.7164 13.7153M20.64 20.6357L13.7164 13.7153" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.9419 21.9985H8.00115M4.9856 4.94586L2.56174 7.45742C2.20193 7.83025 2.00085 8.32816 2.00085 8.84629V19.9985C2.00085 21.103 2.89628 21.9985 4.00085 21.9985H8.00115M4.9856 4.94586L8.00115 8.0386M4.9856 4.94586V3.50171C4.9856 2.67328 5.65717 2.00171 6.4856 2.00171H14.039C14.8793 2.00171 15.5557 2.69197 15.5387 3.53213L15.5177 4.5655C15.5129 4.80149 15.5918 5.03157 15.7403 5.21502L18.0263 8.0386M8.00115 8.0386V21.9985M8.00115 8.0386H18.0263M18.0263 8.0386V10.4828" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: milk-oat
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for milk-oat (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-milk-oat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-milk-oat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-milk-oat 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-milk-oat 3s ease-in-out infinite alternate;
}
</style>