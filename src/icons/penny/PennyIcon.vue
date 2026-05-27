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
      <path d="M2.053 11.914h.368c.419 0 .675-.245.718-.556.043-.27-.154-.556-.547-.556H2.24zm18.611-.638.839-1.504h1.924l-2.908 4.399H18.56l.933-1.26-1.07-3.049-.727 4.309h-1.54l-.949-2.036-.342 2.036h-1.54l.745-4.4h1.582l.915 1.971.334-1.97h3.37l.393 1.504zm-7.21-1.504-.744 4.399h-1.54l-.949-2.036-.342 2.036h-1.54l.745-4.4h1.582l.915 1.971.334-1.97h1.539zM3.036 9.707c1.07 0 1.788.547 1.797 1.438l.23-1.373h3.49l-.188 1.112H6.517l-.094.523h1.668l-.188 1.104H6.235l-.094.548h1.873l-.188 1.112H4.32l.402-2.38c-.273.77-1.009 1.227-1.967 1.227h-.88l-.198 1.153H0l.753-4.464zM24 13.345c0 .523-.445.948-.992.948-.547 0-.992-.425-.992-.948 0-.523.445-.948.992-.948.556.008.992.425.992.948z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: penny
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for penny (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-penny {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-penny {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-penny 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-penny 3s ease-in-out infinite alternate;
}
</style>