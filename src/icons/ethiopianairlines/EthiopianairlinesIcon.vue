<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M18.308 11.603c2.39-1.456 4.239-2.53 4.966-4.355 1.544-4.17.363-5.865-1.104-4.564C20.293 4.506 11.478 13.754.195 20.257c-.172.098-.2.322.558.091 4.48-1.572 14.23-6.705 17.555-8.745zm1.823-.333c.942-.586 1.976-.237.316 2.466-1.126 1.662-1.905 2.63-4.92 3.544-2.075.785-9.768 3.024-15.157 3.675-.401.033-.524-.114-.128-.246 5.135-1.306 17.984-8.21 19.889-9.44zm-8.977 10.47c2.204-.072 3.862.242 5.725-1.73 1.95-2.02 1.72-3.07.544-2.743-1.745.524-8.111 2.69-15.622 3.735-.338.046-.256.226.14.25 5.018.474 6.911.51 9.213.488Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ethiopianairlines
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for ethiopianairlines (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-ethiopianairlines {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ethiopianairlines {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ethiopianairlines 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-ethiopianairlines 2s ease-in-out infinite alternate;
}
</style>