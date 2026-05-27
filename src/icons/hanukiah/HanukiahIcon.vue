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
      <path d="M314.2 3.3c-5.1 8.8-18.2 33.3-18.2 52.7 0 13.3 10.7 24 24 24s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7-1.2-2.1-3.4-3.3-5.8-3.3s-4.6 1.2-5.8 3.3zm-288 48C21.1 60.1 8 84.6 8 104 8 117.3 18.7 128 32 128s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7-1.2-2.1-3.4-3.3-5.8-3.3s-4.6 1.2-5.8 3.3zM88 104c0 13.3 10.7 24 24 24s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7-1.2-2.1-3.4-3.3-5.8-3.3s-4.6 1.2-5.8 3.3C101.1 60.1 88 84.6 88 104zm82.2-52.7c-5.1 8.8-18.2 33.3-18.2 52.7 0 13.3 10.7 24 24 24s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7-1.2-2.1-3.4-3.3-5.8-3.3s-4.6 1.2-5.8 3.3zM216 104c0 13.3 10.7 24 24 24s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7-1.2-2.1-3.4-3.3-5.8-3.3s-4.6 1.2-5.8 3.3C229.1 60.1 216 84.6 216 104zM394.2 51.3c-5.1 8.8-18.2 33.3-18.2 52.7 0 13.3 10.7 24 24 24s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7-1.2-2.1-3.4-3.3-5.8-3.3s-4.6 1.2-5.8 3.3zM440 104c0 13.3 10.7 24 24 24s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7-1.2-2.1-3.4-3.3-5.8-3.3s-4.6 1.2-5.8 3.3C453.1 60.1 440 84.6 440 104zm82.2-52.7c-5.1 8.8-18.2 33.3-18.2 52.7 0 13.3 10.7 24 24 24s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7-1.2-2.1-3.4-3.3-5.8-3.3s-4.6 1.2-5.8 3.3zM584 104c0 13.3 10.7 24 24 24s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7-1.2-2.1-3.4-3.3-5.8-3.3s-4.6 1.2-5.8 3.3C597.1 60.1 584 84.6 584 104zM112 160c-8.8 0-16 7.2-16 16l0 112 32 0 0-112c0-8.8-7.2-16-16-16zm64 0c-8.8 0-16 7.2-16 16l0 112 32 0 0-112c0-8.8-7.2-16-16-16zm64 0c-8.8 0-16 7.2-16 16l0 112 32 0 0-112c0-8.8-7.2-16-16-16zm160 0c-8.8 0-16 7.2-16 16l0 112 32 0 0-112c0-8.8-7.2-16-16-16zm64 0c-8.8 0-16 7.2-16 16l0 112 32 0 0-112c0-8.8-7.2-16-16-16zm64 0c-8.8 0-16 7.2-16 16l0 112 32 0 0-112c0-8.8-7.2-16-16-16zM352 144c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 176-192 0c-17.7 0-32-14.3-32-32l0-96c0-17.7-14.3-32-32-32S0 174.3 0 192l0 96c0 53 43 96 96 96l192 0 0 64-128 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-128 0 0-64 192 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32l-192 0 0-176z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hanukiah
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hanukiah (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hanukiah {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hanukiah {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hanukiah 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hanukiah 3s ease-in-out infinite alternate;
}
</style>