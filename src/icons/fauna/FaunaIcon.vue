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
      <path d="M17.864 5.034c-1.454.496-2.155 1.385-2.632 2.77-.123.369-.43.778-.777 1.053l1.193 1.306-3.787-2.706L1.411 0s.754 5.003 1.015 6.844c.185 1.298.5 1.88 1.5 2.47l.401.22 1.724.928-1.024-.543 4.726 2.636-.031.07-5.087-2.407c.27.944.793 2.761 1.016 3.564.238.865.508 1.18 1.331 1.487l1.516.566.94-.378-1.194.81L2.28 24c3.963-3.76 7.319-5.097 9.774-6.19 3.132-1.385 5.018-2.274 6.249-5.468.877-2.242 1.562-5.113 2.432-6.222l1.855-2.423s-3.84 1.039-4.726 1.337z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fauna
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for fauna (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fauna {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fauna {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fauna 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fauna 3s ease-in-out infinite alternate;
}
</style>