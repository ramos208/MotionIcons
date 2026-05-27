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
      <path d="M96,164a12,12,0,1,1-12-12A12,12,0,0,1,96,164Zm136,12v32a16,16,0,0,1-16,16H180a16.1,16.1,0,0,1-15.35-11.47L153.84,176H131.91l3.56,12a5.44,5.44,0,0,1,.15.54A16,16,0,0,1,120,208H72.14a8,8,0,0,1-4.52-1.4A100,100,0,0,1,24,124c0-54.36,44.24-99.2,98.58-100A100,100,0,0,1,224,124v4a8,8,0,0,1-8,8H158.71l7.09,24H216A16,16,0,0,1,232,176ZM120,192l-15.45-52a4.77,4.77,0,0,1-.15-.54A16,16,0,0,1,120,120h87.91A84,84,0,0,0,122.8,40C77.16,40.64,40,78.31,40,124a84,84,0,0,0,34.67,68Zm29.13-32L142,136H120l7.14,24ZM216,176H170.52L180,208h36Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: football-helmet
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for football-helmet (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-football-helmet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-football-helmet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-football-helmet 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-football-helmet 3s ease-in-out infinite alternate;
}
</style>