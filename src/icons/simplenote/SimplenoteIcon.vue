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
      <path d="M3.466 3.62c-.004.052-.014.104-.018.158-.406 4.626 2.747 8.548 8.03 9.994 2.024.553 5.374 2.018 5.06 5.599a5.063 5.063 0 0 1-1.803 3.46c-1.022.857-2.308 1.21-3.64 1.166C5.147 23.794 0 18.367 0 12.05c0-3.285 1.325-6.262 3.467-8.428zM9.82 1.032c.907-.762 2.056-1.078 3.235-1.027C18.996.27 24 5.67 24 11.936c0 2.855-1.001 5.478-2.667 7.536.332-4.908-2.94-8.897-8.59-10.441-2.337-.64-4.749-2.274-4.514-4.948A4.467 4.467 0 0 1 9.82 1.03z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: simplenote
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for simplenote (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-simplenote {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-simplenote {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-simplenote 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-simplenote 3s ease-in-out infinite alternate;
}
</style>