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
      <path d="M8.00563 20.005L8.01674 19.995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00563 20.005L4.01674 19.995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00563 16.005L4.01674 15.995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00563 12.005L4.01674 11.995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00563 8.005L4.01674 7.995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00563 4.005L4.01674 3.995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.00563 4.005L8.01674 3.995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.0059 20.005H20.0059V4.005H12.0059V20.005Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: align-right-box
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for align-right-box (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-align-right-box {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-align-right-box {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-align-right-box 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-align-right-box 3s ease-in-out infinite alternate;
}
</style>