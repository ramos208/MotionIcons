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
      <path d="M4.271 1.352a.774.774 0 0 0-.787.775v19.761c0 .49.45.857.93.758l6.676-1.382-2.77-.614-3.675.762V2.607l3.101.686 2.777-.574-6.097-1.35a.774.774 0 0 0-.155-.017zm15.315.002L5.145 4.344v15.092l14.43 3.195a.774.774 0 0 0 .94-.758V2.111a.773.773 0 0 0-.93-.757zM2.984 4.79l-2.367.49A.774.774 0 0 0 0 6.04v11.639a.774.774 0 0 0 .607.754l2.377.525V4.791zm18.034.252V6.23l1.822.405v11.011l-1.822.377v1.186l2.365-.49A.774.774 0 0 0 24 17.96V6.322a.774.774 0 0 0-.607-.754l-2.375-.525z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: revealdotjs
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for revealdotjs (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-revealdotjs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-revealdotjs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-revealdotjs 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-revealdotjs 3s ease-in-out infinite alternate;
}
</style>