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
      <path d="M8.607 4.008h-1.75v1.749H3.539v5.85h3.318v2.534h1.75v-2.533h3.317V5.757H8.607Zm-1.75 3.498H5.289V9.86h1.568Zm1.75 2.353V7.506h1.568V9.86Zm12.065 10.133-3.68-9.229h-1.75l-3.68 9.23h1.87l.954-2.474h3.462l.954 2.473zm-3.499-4.222-1.056-2.738-1.056 2.738zm-9.471 4.222h2.594v-1.749H7.702a1.57 1.57 0 0 1-1.569-1.568v-1.75h-1.75v1.75a3.32 3.32 0 0 0 3.319 3.317m5.851-15.14v1.75h2.594c.867 0 1.569.702 1.569 1.568v1.81h1.75V8.17a3.32 3.32 0 0 0-3.319-3.318zM0 3.75A3.75 3.75 0 0 1 3.75 0h16.5A3.75 3.75 0 0 1 24 3.75v16.5A3.75 3.75 0 0 1 20.25 24H3.75A3.75 3.75 0 0 1 0 20.25Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: immersivetranslate
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for immersivetranslate (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-immersivetranslate {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-immersivetranslate {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-immersivetranslate 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-immersivetranslate 3s ease-in-out infinite alternate;
}
</style>