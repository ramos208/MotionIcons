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
      <path d="M18.0518 4.06314C14.0896 2.64561 9.91046 2.64563 5.94823 4.06315C4.28902 4.65674 3.45942 4.95354 2.72971 5.9896C2 7.02566 2 8.1524 2 10.4059V13.5941C2 15.8476 2 16.9743 2.72971 18.0104C3.45942 19.0465 4.28902 19.3433 5.94823 19.9369C9.91046 21.3544 14.0896 21.3544 18.0518 19.9369C19.711 19.3433 20.5406 19.0465 21.2703 18.0104C22 16.9744 22 15.8476 22 13.5942V10.4058C22 8.15236 22 7.02564 21.2703 5.98958C20.5406 4.95352 19.711 4.65673 18.0518 4.06314Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.5 15.5L7.46967 10.5303C7.80923 10.1908 8.26978 10 8.75 10C9.23022 10 9.69077 10.1908 10.0303 10.5303L14 14.5M15.5 16L14 14.5M21.5 15.5L18.5303 12.5303C18.1908 12.1908 17.7302 12 17.25 12C16.7698 12 16.3092 12.1908 15.9697 12.5303L14 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.5 8C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7M14.5 8C14.2239 8 14 7.77614 14 7.5C14 7.22386 14.2239 7 14.5 7M14.5 8V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: image-composition-oval
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for image-composition-oval (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-image-composition-oval {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-image-composition-oval {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-image-composition-oval 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-image-composition-oval 3s ease-in-out infinite alternate;
}
</style>