<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zM7.163 20.618C4.152 18.927 2.12 15.702 2.12 12c0-5.46 4.42-9.88 9.88-9.88 1.429 0 2.496.536 3.029 1.187.534.65.684 1.715.5 3.253l-3.207.631c-2.905.532-4.506 2.148-5.06 5.065-.07.406-.15.812-.226 1.196-.031.157-.062.312-.09.46-.073.396-.143.773-.208 1.124-.093.505-.177.957-.247 1.34-.324 1.884-.06 3.276.672 4.242zm7.986-11.851c-.087.434-.167.867-.247 1.302-.081.434-.16.868-.247 1.301-.396 2.05-1.364 2.996-3.42 3.391l-2.391.474c.059-.296.119-.611.178-.927.022-.12.044-.241.067-.362.078-.421.157-.855.25-1.313.395-2.05 1.344-2.996 3.399-3.391l2.411-.475zM12 21.88c-1.429 0-2.496-.536-3.029-1.187s-.684-1.715-.5-3.253l3.18-.631c2.905-.532 4.507-2.148 5.08-5.046.069-.406.149-.812.226-1.196.031-.157.062-.311.09-.46.087-.471.171-.917.247-1.327.081-.432.154-.822.215-1.156.325-1.884.061-3.275-.671-4.242C19.848 5.073 21.88 8.298 21.88 12c0 5.46-4.42 9.88-9.88 9.88z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: yandexcloud
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for yandexcloud (simpleicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-yandexcloud {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-yandexcloud {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-yandexcloud 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-yandexcloud 3s ease-in-out infinite alternate;
}
</style>