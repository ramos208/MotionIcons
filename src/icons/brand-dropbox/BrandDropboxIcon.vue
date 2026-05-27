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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.5 10.625l-4.5 -2.813l4.5 -2.812l4.5 2.813m-4.5 2.812l4.5 -2.813m-4.5 2.813l-4.5 2.823l4.5 2.802m0 -5.625l4.5 2.823m0 -5.636l4.5 2.791l4.5 -2.812l-4.5 -2.791l-4.5 2.813m-4.5 8.438l4.5 -2.802m-4.5 2.802v1.123l4.5 2.627l4.5 -2.627v-1.123m-4.5 -2.802l4.5 -2.823l4.5 2.823l-4.5 2.802m-4.5 -2.802l4.5 2.802"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: brand-dropbox
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for brand-dropbox (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-brand-dropbox {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-brand-dropbox {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-brand-dropbox 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-brand-dropbox 3s ease-in-out infinite alternate;
}
</style>