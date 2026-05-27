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
      <path d="M3 5L15 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 7L20.5 3L19 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 14L19 14L20.9047 11.0371C20.9669 10.9403 21.0021 10.8268 20.9771 10.7145C20.9193 10.4557 20.716 10 20 10C19 10 19 10.8889 19 10.8889C19 10.8889 19 10.8889 19 10.8889L19 11.1111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.5 19L20 19C20.5523 19 21 19.4477 21 20V20C21 20.5523 20.5523 21 20 21L19 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 17L21 17L19.5 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12L15 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 19L15 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: numbered-list-right
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for numbered-list-right (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-numbered-list-right {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-numbered-list-right {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-numbered-list-right 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-numbered-list-right 3s ease-in-out infinite alternate;
}
</style>