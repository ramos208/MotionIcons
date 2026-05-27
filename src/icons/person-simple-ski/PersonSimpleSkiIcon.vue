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
      <path d="M172,88a28,28,0,1,0-28-28A28,28,0,0,0,172,88Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,172,48ZM32.32,77.76a8,8,0,0,1,9.92-5.44L112,92.67l10.32-10.33a8,8,0,0,1,11.32,0L163.31,112H200a8,8,0,0,1,0,16H160a8,8,0,0,1-5.66-2.34L148.73,120l-111-32.36A8,8,0,0,1,32.32,77.76ZM236.44,204.24a69.78,69.78,0,0,1-58.37,8.95L21.77,167.67a8,8,0,1,1,4.47-15.36l76,22.13L128.73,148,85.8,135.69a8,8,0,0,1,4.4-15.39l56,16a8,8,0,0,1,3.46,13.35l-29.9,29.9,62.79,18.28a53.78,53.78,0,0,0,45-6.9,8,8,0,1,1,8.88,13.31Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: person-simple-ski
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for person-simple-ski (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-person-simple-ski {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-person-simple-ski {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-person-simple-ski 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-person-simple-ski 3s ease-in-out infinite alternate;
}
</style>