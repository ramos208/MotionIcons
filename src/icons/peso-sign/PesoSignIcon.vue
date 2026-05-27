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
      <path d="M112 32C94.3 32 80 46.3 80 64l0 64-24 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l24 0 0 32-24 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l24 0 0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 96 0c65.6 0 122-39.5 146.7-96l37.3 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-24.8 0c.5-5.3 .8-10.6 .8-16s-.3-10.7-.8-16l24.8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-37.3 0C362 71.5 305.6 32 240 32L112 32zm199.6 96l-167.6 0 0-32 96 0c28.4 0 54 12.4 71.6 32zM144 176l190.7 0c.9 5.2 1.3 10.5 1.3 16s-.5 10.8-1.3 16l-190.7 0 0-32zm167.6 80c-17.6 19.6-43.1 32-71.6 32l-96 0 0-32 167.6 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: peso-sign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for peso-sign (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-peso-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-peso-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-peso-sign 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-peso-sign 3s ease-in-out infinite alternate;
}
</style>