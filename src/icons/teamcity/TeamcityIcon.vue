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
      <path d="m0 0v24h24v-24zm2.664 2.964h7.48v1.832h-2.748v7.196h-1.984v-7.196h-2.748zm9.328 18h-9v-1.5h9zm5.56391-9.21826a4.62 4.62 0 0 1 -2.03591.37426 4.556 4.556 0 0 1 -4.628-4.616v-.024a4.584 4.584 0 0 1 4.708-4.668 4.65561 4.65561 0 0 1 3.56 1.388l-1.264 1.456a3.33594 3.33594 0 0 0 -2.312-1.02 2.67116 2.67116 0 0 0 -2.616 2.8v.028a2.68058 2.68058 0 0 0 2.616 2.836 3.22606 3.22606 0 0 0 2.376-1.056l1.264 1.276a4.61947 4.61947 0 0 1 -1.66809 1.22573z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: teamcity
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for teamcity (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-teamcity {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-teamcity {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-teamcity 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-teamcity 3s ease-in-out infinite alternate;
}
</style>