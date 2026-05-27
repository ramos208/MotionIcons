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
      <path d="M16.6626 3V13M20.9952 5.49567L12.335 10.4957M21.0002 10.4961L12.34 5.49609" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.80959 15.3837C10 15.8221 10 16.3814 10 17.5C10 18.6186 10 19.1779 9.80959 19.6163C9.57739 20.1509 9.1509 20.5774 8.61632 20.8096C8.17795 21 7.61863 21 6.5 21C5.38137 21 4.82205 21 4.38368 20.8096C3.8491 20.5774 3.42261 20.1509 3.19041 19.6163C3 19.1779 3 18.6186 3 17.5C3 16.3814 3 15.8221 3.19041 15.3837C3.42261 14.8491 3.8491 14.4226 4.38368 14.1904C4.82205 14 5.38137 14 6.5 14C7.61863 14 8.17795 14 8.61632 14.1904C9.1509 14.4226 9.57739 14.8491 9.80959 15.3837Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: regex
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for regex (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-regex {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-regex {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-regex 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-regex 3s ease-in-out infinite alternate;
}
</style>