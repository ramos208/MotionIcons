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
      <path d="M14.135 6.818v1.715h-1.217V9.92h1.217v2.601c0 1.624.943 2.487 2.355 2.487.236 0 .562-.025.785-.076v-1.348c-.146.039-.312.05-.47.05-.708 0-1.205-.328-1.205-1.138V9.92h1.675V8.533h-1.671V6.818ZM20.873 8.4c-1.846 0-3.299 1.441-3.299 3.3 0 1.909 1.454 3.36 3.324 3.36 1.572 0 2.788-.89 3.024-2.238h-1.467c-.132.553-.746.918-1.531.918-1.034 0-1.688-.589-1.871-1.531h4.908c.026-.12.039-.445.039-.617 0-1.87-1.399-3.192-3.127-3.192ZM0 8.533v1.399h3.928L0 13.532v1.4h5.719v-1.4h-3.94l3.94-3.6V8.533Zm6.037 0 2.54 6.059-1.151 2.59h1.57l3.611-8.649h-1.57l-1.715 4.358-1.717-4.358Zm14.758 1.19c.875 0 1.49.511 1.623 1.244h-3.324c.21-.786.838-1.244 1.7-1.244z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: zyte
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for zyte (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-zyte {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-zyte {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-zyte 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-zyte 3s ease-in-out infinite alternate;
}
</style>