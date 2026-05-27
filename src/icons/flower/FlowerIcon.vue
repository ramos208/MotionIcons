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
      <path d="m18.938 5.31-.647-2.263-1.094-.28-.062-1.11L15.318.514l-1.036.274-.69-.788h-2.175l-.619.788L9.751.372l-1.754.764L7.61 2.22l-1.347.067-1.066 2.325.68 1.125-.63.96.29 2.03 1.251.415.012 1.302 1.937 1.119.908-.284.66.816v4.973H9.24v-.578H7.037v1.162H9.23v.579h1.075v3.517H5.062v1.162H7.42V24h6.929v-1.09h2.262v-1.162h-5.147v-4.626h1.624v-.927h-1.624v-4.097h1.286l.76-.74.84.336 2.098-.76.202-1.238 1.266-.13.83-2.043-.535-1.166Zm-1.453 2.243-.377.928-1.455.15-.237 1.442-1.045.377-1.128-.452-.963.937h-1.42l-.808-1-1.176.367-.921-.532L7.94 8.3l-1.356-.448-.126-.88.792-1.208-.742-1.227.515-1.124 1.42-.071.477-1.34.852-.372 1.403.558.806-1.027h1.082l.818.934 1.244-.329.881.554.077 1.36 1.274.326.31 1.09-.789 1.143zm-1.615 7.476h-2.783v1.163h2.783zM11.04 3.715l-1.036 1.038v1.87l1.049 1.037 2.975-.035 1.02-1.01.046-1.834-1.037-1.066Zm2.86 2.403-.354.349-2.023.024-.36-.356v-.903l.357-.357h2.047l.354.364z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: flower
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for flower (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-flower {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-flower {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-flower 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-flower 3s ease-in-out infinite alternate;
}
</style>