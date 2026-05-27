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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8l8 -5l8 5v8l-8 5l-8 -5l0 -8"/><path d="M12 4l7.5 12h-15l7.5 -12"/><path d="M11 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M11 21a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M3 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M3 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M19 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M19 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: brand-graphql
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for brand-graphql (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-brand-graphql {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-brand-graphql {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-brand-graphql 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-brand-graphql 3s ease-in-out infinite alternate;
}
</style>