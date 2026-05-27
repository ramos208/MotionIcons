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
      <path d="M5.94 1.897c-.375.189-.81.117-1.14-.213-.421-.42-.421-1.01 0-1.431a1.14 1.14 0 0 1 1.432 0c.33.33.401.764.213 1.139l3.323 3.324.032.033a3.247 3.247 0 0 1 2.242-.875c.857 0 1.615.316 2.189.843v-.001l3.297-3.225c-.256-.395-.203-.879.156-1.238.421-.337 1.095-.337 1.432 0 .42.42.42 1.01 0 1.431-.297.297-.676.384-1.022.264L14.821 5.22a.524.524 0 0 1-.093.076c.327.482.539 1.06.598 1.692H8.842c0-.635.185-1.217.505-1.701a.48.48 0 0 1-.084-.067zM4.883 24C2.442 24 .421 21.979.421 19.537v-7.242c0-2.442 2.021-4.463 4.463-4.463h14.232c2.442 0 4.463 2.02 4.463 4.463v7.242c0 2.442-2.021 4.463-4.463 4.463ZM3.032 13.137v5.642c0 1.347 1.094 2.526 2.526 2.526h12.968c1.348 0 2.527-1.094 2.527-2.526v-5.642c0-1.348-1.095-2.526-2.527-2.526H5.558c-1.432 0-2.526 1.094-2.526 2.526z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: myshows
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for myshows (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-myshows {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-myshows {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-myshows 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-myshows 3s ease-in-out infinite alternate;
}
</style>