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
      <path d="M12 0C5.479 0 .174 5.304.174 11.826V24h1.337v-6.716C3.486 21.064 7.446 23.65 12 23.65c4.554 0 8.514-2.586 10.49-6.367V24h1.336V11.826h-1.337c0 5.798-4.69 10.489-10.489 10.489-5.798 0-10.49-4.691-10.49-10.49C1.51 6.028 6.203 1.338 12 1.338zm0 3.72a8.107 8.107 0 100 16.214 8.107 8.107 0 000-16.215zm0 1.336a6.77 6.77 0 110 13.538 6.77 6.77 0 010-13.538z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mastercomfig
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mastercomfig (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mastercomfig {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mastercomfig {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mastercomfig 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mastercomfig 3s ease-in-out infinite alternate;
}
</style>