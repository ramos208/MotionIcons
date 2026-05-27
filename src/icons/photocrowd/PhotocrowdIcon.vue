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
      <path d="M2.182 0C.977 0 0 1.058 0 2.364v19.462C0 23.026.977 24 2.182 24h19.636A2.179 2.179 0 0 0 24 21.826V2.364C24 1.058 23.023 0 21.818 0zM12 3.49a1.022 1.022 0 1 1 0 2.045 1.022 1.022 0 0 1 0-2.044zM8.326 4.498a1.022 1.022 0 1 1-.142 2.039 1.022 1.022 0 0 1 .142-2.04zm7.347 0a1.02 1.02 0 0 1 .955 1.529 1.021 1.021 0 1 1-.955-1.53zm-10.23 2.74a1.02 1.02 0 1 1 .145 2.037 1.02 1.02 0 0 1-.145-2.036zm13.113 0a1.02 1.02 0 1 1-.142 2.036 1.02 1.02 0 0 1 .142-2.035zm-7.497.116a1.021 1.021 0 1 1 .119 2.039 1.021 1.021 0 0 1-.12-2.04zm3.687.88a1.021 1.021 0 1 1 .001 2.042 1.021 1.021 0 0 1 0-2.043zm-6.308 1.864a1.02 1.02 0 1 1-.119 2.04 1.02 1.02 0 0 1 .12-2.04zm3.561.88a1.023 1.023 0 1 1-.001 2.047 1.023 1.023 0 0 1 .001-2.047zm-7.488.002a1.022 1.022 0 1 1-.001 2.044 1.022 1.022 0 0 1 0-2.044zm14.977 0a1.02 1.02 0 1 1-.001 2.042 1.02 1.02 0 0 1 0-2.042zm-3.793.881a1.02 1.02 0 1 1-.119 2.038 1.02 1.02 0 0 1 .12-2.038zm-6.442 1.866a1.021 1.021 0 1 1-.001 2.042 1.021 1.021 0 0 1 0-2.042zm3.568.883a1.02 1.02 0 1 1 .12 2.038 1.02 1.02 0 0 1-.12-2.038zm-7.235.116a1.02 1.02 0 0 1 .44 1.904 1.022 1.022 0 1 1-.44-1.904zm12.827 0a1.022 1.022 0 1 1 .142 2.038 1.022 1.022 0 0 1-.142-2.038zm-10.229 2.74a1.021 1.021 0 1 1 .142 2.038 1.021 1.021 0 0 1-.142-2.038zm7.63 0a1.02 1.02 0 0 1 .44 1.904 1.022 1.022 0 1 1-.44-1.904zM12 18.463a1.022 1.022 0 1 1 0 2.045 1.022 1.022 0 0 1 0-2.045z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: photocrowd
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for photocrowd (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-photocrowd {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-photocrowd {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-photocrowd 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-photocrowd 3s ease-in-out infinite alternate;
}
</style>