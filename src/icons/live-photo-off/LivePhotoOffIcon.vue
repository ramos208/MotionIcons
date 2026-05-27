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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.296 11.29a1 1 0 1 0 1.414 1.415"/><path d="M8.473 8.456a5 5 0 1 0 7.076 7.066m1.365 -2.591a5 5 0 0 0 -5.807 -5.851"/><path d="M15.9 20.11v.01"/><path d="M19.04 17.61v.01"/><path d="M20.77 14v.01"/><path d="M20.77 10v.01"/><path d="M19.04 6.39v.01"/><path d="M15.9 3.89v.01"/><path d="M12 3v.01"/><path d="M8.1 3.89v.01"/><path d="M4.96 6.39v.01"/><path d="M3.23 10v.01"/><path d="M3.23 14v.01"/><path d="M4.96 17.61v.01"/><path d="M8.1 20.11v.01"/><path d="M12 21v.01"/><path d="M3 3l18 18"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: live-photo-off
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for live-photo-off (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-live-photo-off {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-live-photo-off {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-live-photo-off 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-live-photo-off 3s ease-in-out infinite alternate;
}
</style>