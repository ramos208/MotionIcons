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
      <path d="M6.81818 22L6.81822 19.143C6.51904 16.1656 3.00001 14.5717 3.00001 10.0004C3 5.42914 5.72738 1.94374 11.1819 2.00069C15.1094 2.04169 18.8182 4.28632 18.8182 8.8576L21 12.286C21 14.5717 18.8182 14.5717 18.8182 14.5717C18.8182 14.5717 19.3636 20.2858 14.4545 20.2858L14.4545 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 12C12.1046 12 13 11.1046 13 10C13 8.89543 12.1046 8 11 8C10.6357 8 10.2942 8.09739 10 8.26756C9.4022 8.61337 9 9.25972 9 10C9 10.7403 9.4022 11.3866 10 11.7324C10.2942 11.9026 10.6357 12 11 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 13C12.6569 13 14 11.6569 14 10C14 8.34315 12.6569 7 11 7C9.34315 7 8 8.34315 8 10C8 11.6569 9.34315 13 11 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0.3 2"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: learning
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for learning (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-learning {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-learning {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-learning 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-learning 3s ease-in-out infinite alternate;
}
</style>