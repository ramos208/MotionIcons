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
      <path d="M8.226,19.857H1.353l1.79-4.225h4.812L13.308,3.21H7.564l-4.226,9.82h2.587c.18.3.511.51.887.51a1.04,1.04,0,0,0,1.038-1.037c0-.572-.467-1.023-1.038-1.023-.421,0-.767.24-.932.602H4.647l3.503-7.94h3.76L7.383,14.684l-4.766.03L0,20.79h8.842L10,18.263h3.835l1.278,2.526H24L15.985,3.211Zm2.27-2.586,1.384-3.023,1.503,3.023zm5.218,2.691-.872-1.759h2.737c.18.33.526.556.917.556a1.04,1.04,0,0,0,1.038-1.037,1.04,1.04,0,0,0-1.038-1.038c-.42,0-.782.256-.947.617H14.42l-2.09-4.06,1.534-3.369,1.729,3.519h.812c.165.346.526.601.932.601a1.04,1.04,0,0,0,1.038-1.037,1.04,1.04,0,0,0-1.038-1.038c-.436,0-.812.271-.962.662h-.3l-1.79-3.64,1.699-3.728,6.677,14.751Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: thealgorithms
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for thealgorithms (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-thealgorithms {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-thealgorithms {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-thealgorithms 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-thealgorithms 3s ease-in-out infinite alternate;
}
</style>