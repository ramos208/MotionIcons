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
      <path d="M5.27 24c-.88 0-1.36-.2-1.62-.36-.36-.21-1.02-.75-1.62-2.33A27.06 27.06 0 01.49 12c.02-3.66.59-6.76 1.54-9.3C2.63 1.1 3.29.56 3.65.35 3.91.21 4.39 0 5.27 0c.33 0 .72.03 1.18.1a26.1 26.1 0 018.7 3.3h.01a26.4 26.4 0 017.16 6.01c1.06 1.32 1.19 2.17 1.19 2.59 0 .42-.13 1.27-1.19 2.59a26.4 26.4 0 01-7.16 6h-.01a26.03 26.03 0 01-8.7 3.3c-.46.08-.85.11-1.18.11z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: zalando
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for zalando (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-zalando {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-zalando {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-zalando 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-zalando 3s ease-in-out infinite alternate;
}
</style>