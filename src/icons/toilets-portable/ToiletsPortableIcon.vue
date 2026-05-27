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
      <path d="M64 0l96 0c35.3 0 64 28.7 64 64l0 16-224 0 0-16C0 28.7 28.7 0 64 0zM0 128l224 0 0 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8-128 0 0 8c0 13.3-10.7 24-24 24S0 501.3 0 488L0 128zM128 248l0 48c0 13.3 10.7 24 24 24l24 0 0-96-24 0c-13.3 0-24 10.7-24 24zM352 0l96 0c35.3 0 64 28.7 64 64l0 16-224 0 0-16c0-35.3 28.7-64 64-64zM288 128l224 0 0 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8-128 0 0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-360zM416 248l0 48c0 13.3 10.7 24 24 24l24 0 0-96-24 0c-13.3 0-24 10.7-24 24z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: toilets-portable
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for toilets-portable (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-toilets-portable {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-toilets-portable {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-toilets-portable 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-toilets-portable 3s ease-in-out infinite alternate;
}
</style>