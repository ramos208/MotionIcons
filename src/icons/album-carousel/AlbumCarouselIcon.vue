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
      <path d="M2 19.4V4.6C2 4.26863 2.26863 4 2.6 4H17.4C17.7314 4 18 4.26863 18 4.6V19.4C18 19.7314 17.7314 20 17.4 20H2.6C2.26863 20 2 19.7314 2 19.4Z" stroke="currentColor"/><path d="M22 6V18" stroke="currentColor" stroke-linecap="round"/><path d="M11 14.5C11 15.3284 10.3284 16 9.5 16C8.67157 16 8 15.3284 8 14.5C8 13.6716 8.67157 13 9.5 13C10.3284 13 11 13.6716 11 14.5ZM11 14.5V8.6C11 8.26863 11.2686 8 11.6 8H13" stroke="currentColor" stroke-linecap="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: album-carousel
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for album-carousel (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-album-carousel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-album-carousel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-album-carousel 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-album-carousel 3s ease-in-out infinite alternate;
}
</style>