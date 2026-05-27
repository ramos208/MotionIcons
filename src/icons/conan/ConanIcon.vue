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
      <path d="M11.709 0 0 5.534V16.76L11.984 24l4.857-2.706V9.998c.13-.084.275-.196.399-.27l.032-.017c.197-.11.329-.102.23.33v10.884l6.466-3.603V6.11L24 6.093Zm.915 2.83c.932.02 1.855.191 2.706.552 1.32.533 2.522 1.364 3.45 2.429a62.814 62.814 0 0 1-3.044 1.616c.56-.853.14-2.009-.76-2.455-.93-.648-2.093-.73-3.205-.674-1.064.175-2.258.51-2.893 1.474-.722.862-.084 2.11.914 2.408 1.2.509 2.543.38 3.806.413-.975.457-1.931.97-2.927 1.358-1.701-.176-3.585-.917-4.374-2.51-.574-1.178.215-2.572 1.319-3.14a11.426 11.426 0 0 1 3.336-1.348 9.212 9.212 0 0 1 1.672-.123Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: conan
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for conan (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-conan {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-conan {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-conan 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-conan 3s ease-in-out infinite alternate;
}
</style>