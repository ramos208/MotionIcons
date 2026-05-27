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
      <path d="M4.05205 8.46154C1.87672 10.4706 3.25798 14 6.51566 14C8.14654 14 9.52414 13.0186 9.96671 11.6727M5.93747 10.3077C2.32316 8.8909 4.24626 4.36129 7.95209 4.79869C7.95209 3.26929 9.30506 2 10.974 2C12.643 2 13.996 3.02188 13.996 4.55129C14.5306 4.11279 15.2366 3.84615 16.0106 3.84615C17.6795 3.84615 19.0325 5.08598 19.0325 6.61538C19.0325 8.14479 17.6795 9.38462 16.0106 9.38462M18.8605 7.53846C22.3504 8.80845 21.3348 14 17.5215 14C15.5744 14 13.996 12.5041 13.996 10.6588C12.9886 12.1538 11.4777 12.6154 9.96671 11.6923" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 14C7.88632 14.4415 9.41287 16.5365 9.5 21C9.51288 21.66 11.2845 22 12 22C12.7155 22 14.4871 21.66 14.5 21C14.5871 16.5365 16.1137 14.4415 17 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: broccoli
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for broccoli (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-broccoli {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-broccoli {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-broccoli 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-broccoli 3s ease-in-out infinite alternate;
}
</style>