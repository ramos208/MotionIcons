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
      <path d="M10.5054 15.0102L17.14 10.4989C17.3273 10.3598 17.4944 10.1955 17.6363 10.0112C18.1217 9.38041 18.1121 8.50551 17.8044 7.77366C17.1198 6.14514 15.4952 5 13.6 5C12.6644 5 11.7948 5.27908 11.0717 5.75762L3.99219 10.7567" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.99514 13.5066C5.99514 14.2026 6.36367 15.5859 8.0358 15.9655C9.04177 16.1939 11.9726 15.2305 10.5386 12.4385C9.10468 9.64659 5.6515 9.63202 4.24682 10.5675C3.3884 11.0889 1.72132 12.7163 2.03737 14.8796C2.14955 16.1903 3.1816 18.8496 6.41238 19.0017H16.3037C17.2255 18.9286 17.416 18.7949 18.1181 18.2562C19.0626 17.408 20.6401 15.8485 21.5565 14.8218C21.7545 14.6 21.9682 14.3717 21.9956 14.0757V14.0757C22.1413 12.499 19.7488 13.1819 18.0157 12.994" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: yoga-mat
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for yoga-mat (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-yoga-mat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-yoga-mat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-yoga-mat 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-yoga-mat 3s ease-in-out infinite alternate;
}
</style>