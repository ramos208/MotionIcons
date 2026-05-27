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
      <path d="M21.6 3.6H2.4C1.08 3.6 0 4.68 0 6v12c0 1.32 1.08 2.4 2.4 2.4h19.2c1.32 0 2.4-1.08 2.4-2.424V6c0-1.32-1.08-2.4-2.4-2.4zm.648 14.376c.024.36-.264.672-.648.696H2.4c-.36 0-.648-.312-.648-.672V6a.667.667 0 0 1 .624-.696H21.6c.36 0 .648.312.648.672v12zM7.344 6.504H3.312v10.992h4.032c3.336-.024 4.416-2.376 4.416-5.544 0-3.672-1.56-5.448-4.416-5.448zm-.456 9.216h-.936V8.232h.528c2.376 0 2.616 1.728 2.616 3.936 0 2.424-.816 3.552-2.208 3.552zm11.832-3.984c1.128-.336 1.896-1.368 1.92-2.568 0-.24-.048-2.688-3.144-2.688h-4.584v10.992H16.8c1.032 0 4.248 0 4.248-3.096 0-.744-.336-2.208-2.328-2.64zm-2.352-3.528c1.176 0 1.656.408 1.656 1.32 0 .72-.528 1.32-1.44 1.32h-1.032v-2.64h.816zm.24 7.512h-1.08v-2.832h1.152c1.368 0 1.704.792 1.704 1.416 0 1.416-1.344 1.416-1.776 1.416z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: deutschebahn
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for deutschebahn (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-deutschebahn {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-deutschebahn {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-deutschebahn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-deutschebahn 3s ease-in-out infinite alternate;
}
</style>