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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 13a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M11 20a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 16v3"/><path d="M12 10v-7"/><path d="M9 6l3 -3l3 3"/><path d="M12 10v-7"/><path d="M9 6l3 -3l3 3"/><path d="M14.894 12.227l6.11 -2.224"/><path d="M17.159 8.21l3.845 1.793l-1.793 3.845"/><path d="M9.101 12.214l-6.075 -2.211"/><path d="M6.871 8.21l-3.845 1.793l1.793 3.845"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: load-balancer
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for load-balancer (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-load-balancer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-load-balancer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-load-balancer 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-load-balancer 3s ease-in-out infinite alternate;
}
</style>