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
      <path d="M12.965 4.898c-.707 0-1.344.152-1.908.452a3.901 3.901 0 0 0-.891.642v-.937H7.488v14.047h2.657V14.1c.26.249.559.463.898.638.572.294 1.213.44 1.92.44.914 0 1.73-.224 2.453-.674 1.237-.77 2.328-2.27 2.328-4.453 0-2.206-1.09-3.704-2.328-4.477-.721-.45-1.537-.676-2.451-.676zM3.8 5.055 0 9.79l3.822 5.133H7.09L3.012 9.79l3.875-4.736Zm13.312 0 3.875 4.736-4.078 5.133h3.268L24 9.79l-3.8-4.736Zm-4.619 2.318c1.007 0 1.788.493 2.2 1.275.452.86.395 2.034 0 2.78-.221.419-.84 1.277-2.2 1.277-.49 0-.925-.11-1.299-.336a2.338 2.338 0 0 1-.879-.941c-.211-.403-.316-.869-.316-1.399s.105-.978.316-1.38c.393-.748 1.156-1.276 2.178-1.276z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: packt
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for packt (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-packt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-packt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-packt 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-packt 3s ease-in-out infinite alternate;
}
</style>