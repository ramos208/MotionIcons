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
      <path d="M8.01332 6.50116H16.7827C18.8941 6.50116 19.9498 6.50116 20.7081 7.0069C21.0364 7.22584 21.3183 7.50717 21.5377 7.83484C21.8193 8.25555 21.9444 8.76795 22 9.50203M12.0222 6.50116L11.3874 5.23392C10.8614 4.18406 10.3808 3.1273 9.21524 2.69106C8.70475 2.5 8.12158 2.5 6.95525 2.5C5.13474 2.5 4.22449 2.5 3.54148 2.88043C3.0546 3.15161 2.65287 3.55257 2.38116 4.03851C2 4.72021 2 5.62871 2 7.44571V10.5023C2 15.2177 2 17.5754 3.46772 19.0403C4.71129 20.2815 6.59706 20.4711 10.0178 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.5 18L22 13.5M21 15L22 16M18 19.5C18 20.6046 17.1046 21.5 16 21.5C14.8954 21.5 14 20.6046 14 19.5C14 18.3954 14.8954 17.5 16 17.5C17.1046 17.5 18 18.3954 18 19.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: folder-key
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for folder-key (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-folder-key {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-folder-key {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-folder-key 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-folder-key 3s ease-in-out infinite alternate;
}
</style>