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
      <path d="M32-8c0-13.3 10.7-24 24-24l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 16C42.7 16 32 5.3 32-8zM0 128C0 92.7 28.7 64 64 64l192 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128zm112 32l-42.2 0c-3.2 0-5.8 2.6-5.8 5.8 0 32.1 26 58.2 58.2 58.2l75.6 0c32.1 0 58.2-26 58.2-58.2 0-3.2-2.6-5.8-5.8-5.8L208 160c-19.1 0-36.3 8.4-48 21.7-11.7-13.3-28.9-21.7-48-21.7zm48 117.7c-11.7-13.3-28.9-21.7-48-21.7l-42.2 0c-3.2 0-5.8 2.6-5.8 5.8 0 32.1 26 58.2 58.2 58.2l75.6 0c32.1 0 58.2-26 58.2-58.2 0-3.2-2.6-5.8-5.8-5.8L208 256c-19.1 0-36.3 8.4-48 21.7zM112 352l-42.2 0c-3.2 0-5.8 2.6-5.8 5.8 0 32.1 26 58.2 58.2 58.2l21.8 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 21.8 0c32.1 0 58.2-26 58.2-58.2 0-3.2-2.6-5.8-5.8-5.8L208 352c-19.1 0-36.3 8.4-48 21.7-11.7-13.3-28.9-21.7-48-21.7z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: jar-wheat
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for jar-wheat (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-jar-wheat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-jar-wheat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-jar-wheat 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-jar-wheat 3s ease-in-out infinite alternate;
}
</style>