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
      <path d="M200 464l0-170.1c0-3.9-.5-7.8-1.4-11.6L144.4 65.4C162.1 77.2 188.2 88 224 88s61.9-10.8 79.6-22.6L249.4 282.3c-1 3.8-1.4 7.7-1.4 11.6L248 464c0 26.5 21.5 48 48 48l104 0c26.5 0 48-21.5 48-48l0-193.5c0-9.5-2.8-18.7-8.1-26.6l-47.9-71.8c-5.3-7.9-8.1-17.1-8.1-26.6L384 48c0-26.5-21.5-48-48-48l-3.5 0c-.3 0-.6 0-1 0-.6 0-1.2 0-1.8 0-18.8 0-34.1 9.7-44.1 18.8-9.3 8.4-28.5 21.2-61.7 21.2s-52.4-12.8-61.7-21.2c-10-9.1-25.3-18.8-44.1-18.8-.6 0-1.2 0-1.8 0-.3 0-.6 0-1 0L112 0C85.5 0 64 21.5 64 48l0 97.5c0 9.5-2.8 18.7-8.1 26.6L8.1 243.9C2.8 251.8 0 261.1 0 270.5L0 464c0 26.5 21.5 48 48 48l104 0c26.5 0 48-21.5 48-48z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: vest
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for vest (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-vest {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-vest {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-vest 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-vest 3s ease-in-out infinite alternate;
}
</style>