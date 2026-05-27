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
      <path d="M12 7.31544C13.6569 7.31544 15 5.20251 15 2C16.1024 2.42616 17.4582 2.40398 17.4054 3.76407C17.353 5.11247 17.7915 6.82713 19.1673 8.11699C19.789 8.6999 20 8.96542 20 9.79955V16.4966C20 18.7746 20 19.9135 19.2678 20.6212C17.1917 22.6276 6.45239 22.2836 4.73223 20.6212C4 19.9135 4 18.7746 4 16.4966V9.79955C4 8.96542 4.211 8.6999 4.83274 8.11699C6.20853 6.82713 6.647 5.11247 6.59461 3.76407C6.54178 2.40398 7.89761 2.42616 9 2C9 5.20251 10.3431 7.31544 12 7.31544Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 2C14.2005 2.62236 13.1502 3 12 3C10.8498 3 9.79952 2.62236 9 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sleeveless
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for sleeveless (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sleeveless {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sleeveless {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sleeveless 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sleeveless 3s ease-in-out infinite alternate;
}
</style>