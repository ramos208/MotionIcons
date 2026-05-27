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
      <path d="M11.983 0a9.375 9.375 0 0 0-9.358 9.375v13.062a.781.781 0 0 0 1.334.553l1.791-1.844 2.573 2.625c.305.305.8.305 1.105 0L12 21.146l2.573 2.625c.305.305.8.305 1.105 0l2.572-2.625 1.792 1.844a.781.781 0 0 0 1.333-.553V9.455c0-5.166-4.226-9.464-9.392-9.455m-3.89 12.5a2.346 2.346 0 0 1-2.343-2.344 2.346 2.346 0 0 1 2.344-2.344 2.346 2.346 0 0 1 2.344 2.344A2.346 2.346 0 0 1 8.094 12.5m7.814 0a2.346 2.346 0 0 1-2.344-2.344 2.346 2.346 0 0 1 2.344-2.344 2.346 2.346 0 0 1 2.343 2.344 2.346 2.346 0 0 1-2.343 2.344"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ghostfolio
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ghostfolio (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ghostfolio {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ghostfolio {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ghostfolio 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ghostfolio 3s ease-in-out infinite alternate;
}
</style>