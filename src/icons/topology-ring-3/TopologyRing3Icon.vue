<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-pendulum']"
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
      class="icon-geometry anim-subtle-drift"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"/><path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"/><path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"/><path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"/><path d="M6 8v8"/><path d="M18 16v-8"/><path d="M8 6h8"/><path d="M16 18h-8"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: topology-ring-3
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for topology-ring-3 (tabler). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

.anim-subtle-drift {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-topology-ring-3 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-topology-ring-3 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-topology-ring-3 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-topology-ring-3 2.5s ease-in-out infinite alternate;
}
</style>