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
      <path d="M13.736.083q4.9353-.6785 5.5252 4.1915-1.104 5.4862-6.4778 7.1446-1.3131.3981-2.6673.1905-.409-.133-.6668-.4763a3.91 3.91 0 0 1 0-1.7147q4.0727.4425 6.4778-3.0484.8668-1.3161.5715-2.8578-.5576-1.2044-1.9052-1.1432-2.7075.4504-4.382 2.6674-3.9135 5.7548-2.4768 12.5745 1.59 5.4391 6.954 3.5246 1.458-.7474 2.6674-1.81 1.627.6834.8573 2.2864-4.452 3.9011-9.8119 1.4289-3.1384-2.512-3.5247-6.573-.858-7.33 3.62-13.1462Q10.673.9268 13.736.083"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: calibreweb
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for calibreweb (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-calibreweb {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-calibreweb {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-calibreweb 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-calibreweb 3s ease-in-out infinite alternate;
}
</style>