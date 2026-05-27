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
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 2V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 12H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 12H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.92896 4.92871L9.1716 9.17135" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.8284 14.8286L19.071 19.0713" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.92896 19.0713L9.1716 14.8286" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.8284 9.17139L19.071 4.92875" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: color-wheel
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for color-wheel (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-color-wheel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-color-wheel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-color-wheel 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-color-wheel 3s ease-in-out infinite alternate;
}
</style>