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
      <path d="M9.372 0c-.31.006-.93.09-1.521.654-.872.824-5.225 4.957-6.973 6.617-.79.754-.72 1.595-.72 1.664v.377c.067-.292.187-.5.427-.825.496-.616 1.3-.788 1.627-.822a64.238 64.238 0 01.002 0 64.238 64.238 0 016.528-.55c4.335-.136 7.197.226 7.197.226l6.085-5.794s-3.188-.6-6.82-1.027a93.4 93.4 0 00-5.64-.514c-.02 0-.09-.008-.192-.006zm13.56 2.508l-6.066 5.79s.222 2.881-.137 7.2c-.189 2.45-.584 4.866-.875 6.494-.052.326-.256 1.114-.925 1.594-.29.198-.49.295-.748.363 1.546-.51 1.091-7.047 1.091-7.047-4.335.137-7.214-.223-7.214-.223l-6.085 5.793s3.223.634 6.856 1.045c2.056.24 4.833.429 5.227.463.023 0 .045-.007.068-.012-.013.003-.022.009-.035.012.138 0 .26.015.38.015.084 0 .924.105 1.712-.648 1.748-1.663 6.084-5.81 6.94-6.634.789-.754.72-1.594.72-1.68a81.846 81.846 0 00-.206-5.654 101.75 101.75 0 00-.701-6.872zM3.855 8.306c-1.73.002-3.508.208-3.696 1.021.017 1.216.05 3.137.205 5.28.24 3.65.703 6.887.703 6.887l6.083-5.79c-.017.016-.24-2.88.12-7.2 0 0-1.684-.201-3.416-.2z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dynatrace
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dynatrace (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dynatrace {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dynatrace {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dynatrace 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dynatrace 3s ease-in-out infinite alternate;
}
</style>