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
      <path d="M12 0C5.387 0 0 5.387 0 12s5.387 12 12 12 12-5.387 12-12S18.613 0 12 0zm0 1.531a10.47 10.47 0 0 1 6.384 2.196v3.92H8.052a.749.749 0 0 0-.749.748v2.373c-.425.26-.69.719-.7 1.217A1.464 1.464 0 1 0 8.83 10.74V9.172h10.332a.749.749 0 0 0 .748-.75V5.193A10.47 10.47 0 0 1 22.47 12l-.012.151h-3.324a.749.749 0 0 0-.749.749v7.372a10.47 10.47 0 0 1-1.963 1.193V14.12c.425-.26.69-.718.7-1.217a1.464 1.464 0 0 0-2.927 0c.01.499.275.957.7 1.217v7.92a10.47 10.47 0 0 1-2.894.43 10.463 10.463 0 0 1-3.19-.502v-6.024h1.83c.259.426.718.69 1.216.7a1.464 1.464 0 0 0 0-2.927 1.464 1.464 0 0 0-1.217.7H8.033a.749.749 0 0 0-.749.75v6.177A10.471 10.471 0 0 1 4.8 19.576V5.252h8.314c.26.425.718.69 1.216.7a1.464 1.464 0 0 0 0-2.928 1.464 1.464 0 0 0-1.216.701H5.619A10.47 10.47 0 0 1 12 1.532zM3.274 6.266v11.468A10.469 10.469 0 0 1 1.53 12c.01-2.04.615-4.033 1.743-5.734zm16.637 7.412h2.42a10.47 10.47 0 0 1-2.42 5.13z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: filen
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for filen (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-filen {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-filen {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-filen 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-filen 3s ease-in-out infinite alternate;
}
</style>