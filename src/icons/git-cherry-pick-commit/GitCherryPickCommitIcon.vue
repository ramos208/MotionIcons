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
      <path d="M17 11V10C17 8.89543 16.1046 8 15 8H12M7 11V10C7 8.89543 7.89543 8 9 8H12M12 8V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 20C13.6569 20 15 18.6569 15 17C15 15.3431 13.6569 14 12 14C10.3431 14 9 15.3431 9 17C9 18.6569 10.3431 20 12 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 17H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 17H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: git-cherry-pick-commit
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for git-cherry-pick-commit (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-git-cherry-pick-commit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-git-cherry-pick-commit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-git-cherry-pick-commit 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-git-cherry-pick-commit 3s ease-in-out infinite alternate;
}
</style>