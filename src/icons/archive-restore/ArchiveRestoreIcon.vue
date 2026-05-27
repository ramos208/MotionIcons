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
      <path d="M9 15C9 15 11.2095 12 12 12C12.7906 12 15 15 15 15M12 13V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20 8V15.0093C20 17.8415 20 19.2576 19.1213 20.1375C18.48 20.7797 17.5534 20.9531 16 21M4 8V15.0093C4 17.8415 4 19.2576 4.87868 20.1375C5.51998 20.7797 6.44655 20.9531 7.99999 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.5 3H4.5C3.56538 3 3.09808 3 2.75 3.20096C2.52197 3.33261 2.33261 3.52197 2.20096 3.75C2 4.09808 2 4.56538 2 5.5C2 6.43462 2 6.90192 2.20096 7.25C2.33261 7.47803 2.52197 7.66739 2.75 7.79904C3.09808 8 3.56538 8 4.5 8H19.5C20.4346 8 20.9019 8 21.25 7.79904C21.478 7.66739 21.6674 7.47803 21.799 7.25C22 6.90192 22 6.43462 22 5.5C22 4.56538 22 4.09808 21.799 3.75C21.6674 3.52197 21.478 3.33261 21.25 3.20096C20.9019 3 20.4346 3 19.5 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: archive-restore
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for archive-restore (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-archive-restore {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-archive-restore {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-archive-restore 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-archive-restore 3s ease-in-out infinite alternate;
}
</style>