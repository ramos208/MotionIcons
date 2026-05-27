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
      <path d="M23.572 12.737a.854.854 0 0 0 0-1.48l-12.66-7.31c-.695-.4-1.51.292-1.225 1.043l.98 2.587c.106.28-.1.578-.4.578H7.55c-.658 0-1.275.32-1.656.857L3.632 12.21h8.553c.02 0 .034.02.027.04-.847 2.253-1.69 4.508-2.537 6.761-.282.75.532 1.44 1.227 1.04zM.001 17.052a.005.005 0 0 0 0 .006h8.297a.64.64 0 0 0 .612-.452l.656-2.134a.64.64 0 0 0-.613-.83l-6.805.018a.078.078 0 0 0-.067.036C1.386 14.813.694 15.933 0 17.052Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: streamrunners
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for streamrunners (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-streamrunners {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-streamrunners {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-streamrunners 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-streamrunners 3s ease-in-out infinite alternate;
}
</style>