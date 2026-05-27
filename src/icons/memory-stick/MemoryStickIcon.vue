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
      <path d="M22 13C20.8954 13 20 12.1046 20 11C20 9.89543 20.8954 9 22 9C22 8.07003 22 7.60504 21.8978 7.22354C21.6204 6.18827 20.8117 5.37962 19.7765 5.10222C19.395 5 18.93 5 18 5H6C5.07003 5 4.60504 5 4.22354 5.10222C3.18827 5.37962 2.37962 6.18827 2.10222 7.22354C2 7.60504 2 8.07003 2 9C3.10457 9 4 9.89543 4 11C4 12.1046 3.10457 13 2 13C2 13.93 2 14.395 2.10222 14.7765C2.37962 15.8117 3.18827 16.6204 4.22354 16.8978C4.60504 17 5.07003 17 6 17H18C18.93 17 19.395 17 19.7765 16.8978C20.8117 16.6204 21.6204 15.8117 21.8978 14.7765C22 14.395 22 13.93 22 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 9V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16 9V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 9V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 17V19M8 17V19M4 17V19M16 17V19M20 17V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: memory-stick
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for memory-stick (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-memory-stick {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-memory-stick {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-memory-stick 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-memory-stick 3s ease-in-out infinite alternate;
}
</style>