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
      <path d="M12 7.01L12.01 6.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 9.01L16.01 8.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 9.01L8.01 8.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 13.01L18.01 12.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 13.01L6.01 12.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 17.01L17.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 17.01L7.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17L13 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 20.001H4C2.74418 18.3295 2 16.2516 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14C22 16.2516 21.2558 18.3295 20 20.001L15.5 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 23C13.6569 23 15 21.6569 15 20C15 18.3431 13.6569 17 12 17C10.3431 17 9 18.3431 9 20C9 21.6569 10.3431 23 12 23Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dashboard-dots
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dashboard-dots (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dashboard-dots {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dashboard-dots {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dashboard-dots 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dashboard-dots 3s ease-in-out infinite alternate;
}
</style>