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
      <path d="M19 13.5V18.6518C19 18.8671 18.8846 19.0659 18.6977 19.1728L12.2977 22.8299C12.1132 22.9353 11.8868 22.9353 11.7023 22.8299L5.30233 19.1728C5.11539 19.0659 5.00001 18.8671 5.00001 18.6518L5 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22.5V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 8L11 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 15L0.999995 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M1 8C4 3 8 6 11 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 15C16 10 20 13 23 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cube-replace-face
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cube-replace-face (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cube-replace-face {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cube-replace-face {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cube-replace-face 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cube-replace-face 3s ease-in-out infinite alternate;
}
</style>