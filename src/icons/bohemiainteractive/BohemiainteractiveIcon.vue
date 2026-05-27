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
      <path d="m18.225 12.831.036-.109c.684-2.231.411-4.3-.774-5.817a5.666 5.666 0 0 0-3.513-2.068L15.88 0h-1.457s-.696 2.261-1.53 4.728a8.157 8.157 0 0 0-.859 0 12.166 12.166 0 0 0-6.736 2.685 11.314 11.314 0 0 0-3.49 4.076h1.21A10.382 10.382 0 0 1 5.841 8.12a11.314 11.314 0 0 1 6.234-2.497h.514c-.096.284-.2.562-.296.84-.38 1.07-1.288 3.58-2.304 6.374H6.64l-1.511 2.128a22.664 22.664 0 0 1 4.408-.87c-.798 2.195-1.62 4.456-2.274 6.264-2.038.115-3.858-.483-4.989-1.771a4.233 4.233 0 0 1-1.021-1.96l-.49-.46a5.243 5.243 0 0 0 1.064 2.952 6.156 6.156 0 0 0 4.983 2.17h.09L5.938 24l.604-.466.901-2.268a12.281 12.281 0 0 0 6.555-2.66 12.529 12.529 0 0 0 3.955-5.08H22.766l.472-.67zm-4.583-7.13a4.898 4.898 0 0 1 3.144 1.748c.998 1.288 1.21 3.066.605 5.013-.037.12-.079.248-.121.369h-6.458zm-.182 12.204a11.489 11.489 0 0 1-5.624 2.418l2.504-6.307c1.711-.193 3.9-.362 6.651-.44a11.87 11.87 0 0 1-3.53 4.329z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bohemiainteractive
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for bohemiainteractive (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bohemiainteractive {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bohemiainteractive {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bohemiainteractive 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-bohemiainteractive 2s ease-in-out infinite alternate;
}
</style>