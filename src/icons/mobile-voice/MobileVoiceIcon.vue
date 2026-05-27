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
      <path d="M8 17.01L8.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5H3.6C3.26863 5 3 5.26863 3 5.6V20.4C3 20.7314 3.26863 21 3.6 21H12.4C12.7314 21 13 20.7314 13 20.4V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 3L16 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 5L13 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7L22 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 7L10 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 4L19 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mobile-voice
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mobile-voice (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mobile-voice {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mobile-voice {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mobile-voice 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mobile-voice 3s ease-in-out infinite alternate;
}
</style>