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
      <path d="M13.96 9.01h-.84V7.492h-1.234v3.663H5.722c.34.517.538.982.538 1.152 0 .46-1.445 3.059-3.197 3.059C.8 15.427-.745 12.8.372 10.855a3.062 3.062 0 0 1 2.691-1.606c1.04 0 1.971.915 2.557 1.755V6.577a3.773 3.773 0 0 1 3.77-3.769h10.84C22.31 2.808 24 4.5 24 6.577v10.845a3.773 3.773 0 0 1-3.77 3.769h-1.6V17.5h-7.64v3.692h-1.6a3.773 3.773 0 0 1-3.77-3.769v-3.41h12.114v-6.52h-1.59v.893h-.84v-.893H13.96v1.516Zm-9.956 1.845c-.662-.703-1.578-.544-2.209 0-2.105 2.054 1.338 5.553 3.302 1.447a5.395 5.395 0 0 0-1.093-1.447Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: authentik
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for authentik (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-authentik {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-authentik {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-authentik 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-authentik 3s ease-in-out infinite alternate;
}
</style>