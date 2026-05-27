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
      <path d="M24 12 12 0 0 12l12 12 12-12Zm-18.569-.554 4.665-4.665c.335-.601.841-1.258 1.565-1.982a.4798.4798 0 0 1 .678 0c.187.187.187.491 0 .678-1.254 1.254-1.786 2.24-1.836 3.093-.035.59.174 1.1.49 1.573.36.536.854 1.026 1.346 1.518 1.13 1.13 2.206 2.289 2.116 3.826-.015.256-.063.525-.149.808l4.002-4.002a.6147.6147 0 0 1-.073-.293c0-.346.281-.627.627-.627s.627.281.627.627-.281.627-.627.627a.6147.6147 0 0 1-.293-.073l-4.665 4.665c-.335.601-.841 1.258-1.565 1.982a.4798.4798 0 0 1-.678 0 .4798.4798 0 0 1 0-.678c1.254-1.254 1.786-2.24 1.836-3.093.035-.59-.174-1.1-.49-1.573-.36-.536-.854-1.026-1.346-1.518-1.13-1.13-2.206-2.289-2.116-3.826.015-.256.063-.525.149-.808l-4.002 4.002c.047.087.073.187.073.293 0 .346-.281.627-.627.627A.6274.6274 0 0 1 4.511 12c0-.346.281-.627.627-.627.106 0 .206.026.293.073Zm-.293.296c.143 0 .258.115.258.258 0 .143-.115.258-.258.258A.2573.2573 0 0 1 4.88 12c0-.143.115-.258.258-.258Zm13.724 0c.143 0 .258.115.258.258 0 .143-.115.258-.258.258a.2573.2573 0 0 1-.258-.258c0-.143.115-.258.258-.258Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: svgdotjs
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for svgdotjs (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-svgdotjs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-svgdotjs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-svgdotjs 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-svgdotjs 3s ease-in-out infinite alternate;
}
</style>