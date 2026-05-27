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
      <path d="M12 0a11.963 11.963 0 0 0-8.485 3.515A11.963 11.963 0 0 0 0 12.001c0 3.313 1.344 6.311 3.515 8.484A11.96 11.96 0 0 0 12 24a11.96 11.96 0 0 0 8.485-3.515A11.968 11.968 0 0 0 24 12.001c0-3.315-1.344-6.314-3.515-8.486A11.963 11.963 0 0 0 12 0zm.052 4.401c1.233 0 2.344.222 3.332.664.988.443 1.804 1.142 2.449 2.096.58.842.956 1.818 1.128 2.93.1.65.14 1.587.122 2.811H8.764c.058 1.421.552 2.418 1.482 2.99.565.355 1.246.533 2.042.533.844 0 1.53-.217 2.057-.65.288-.234.542-.56.762-.975h3.783c-.1.84-.558 1.694-1.374 2.56-1.269 1.378-3.045 2.067-5.33 2.067-1.886 0-3.549-.58-4.99-1.743-1.442-1.162-2.162-3.053-2.162-5.672 0-2.455.65-4.337 1.951-5.646C8.286 5.056 9.975 4.4 12.052 4.4zm.001 3.055c-.95 0-1.688.27-2.211.81-.524.54-.852 1.27-.987 2.192h6.382c-.067-.983-.396-1.73-.987-2.238-.59-.51-1.323-.764-2.197-.764Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: embarcadero
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for embarcadero (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-embarcadero {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-embarcadero {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-embarcadero 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-embarcadero 3s ease-in-out infinite alternate;
}
</style>