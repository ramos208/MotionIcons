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
      <path d="M3.545 1.81A12.428 12.428 0 0 0 0 2.35a10.409 10.409 0 0 1 1.838-.146c5.602.048 10.114 4.543 10.16 10.075-2.263 1.066-4.976 2.147-7.986 3.158-1.258.423-2.956 1.053-3.751 1.482a2.073 2.073 0 0 1-.04.035l.257-.065c1.338-.338 2.714-.703 4.112-1.116a106.969 106.969 0 0 0 7.364-2.455c-.404 4.299-3.506 7.81-7.599 8.872 5.472-.627 9.837-4.8 10.155-9.883 6.236-2.597 9.957-5.18 9.443-6.805-.454-1.435-5.038-1.7-11.657-.554.229.226.492.512.757.826 3.3-.31 5.532-.007 5.83.934.335 1.06-1.348 2.612-4.382 4.296-.395-5.198-5.1-9.236-10.956-9.194z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: theplanetarysociety
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for theplanetarysociety (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-theplanetarysociety {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-theplanetarysociety {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-theplanetarysociety 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-theplanetarysociety 3s ease-in-out infinite alternate;
}
</style>