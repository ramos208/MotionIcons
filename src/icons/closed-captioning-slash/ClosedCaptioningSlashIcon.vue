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
      <path d="M7-24.9c9.4-9.4 24.6-9.4 33.9 0L129.8 64 480 64c35.3 0 64 28.7 64 64l0 256c0 25.5-14.9 47.4-36.4 57.8L569 503.1c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 9.1C-2.3-.3-2.3-15.5 7-24.9zm345 311l0-70.2c0-4.4 3.6-8 8-8l32 0c4.4 0 8 3.6 8 8 0 13.3 10.7 24 24 24s24-10.7 24-24c0-30.9-25.1-56-56-56l-32 0c-30.9 0-56 25.1-56 56l0 22.2 48 48zm61.5 61.5c20.2-8.4 34.5-28.4 34.5-51.7 0-13.3-10.7-24-24-24s-24 10.7-24 24c0 4.4-3.6 8-8 8l-22.2 0 43.7 43.7zM130.3 200.1c-1.5 5-2.3 10.4-2.3 15.9l0 80c0 30.9 25.1 56 56 56l32 0c18.1 0 34.1-8.5 44.4-21.8L378.2 448 96 448c-35.3 0-64-28.7-64-64l0-256c0-7.8 1.4-15.3 4-22.2l94.3 94.3zm93.8 93.8c-.1 .7-.1 1.4-.1 2.1 0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-50.2 48.1 48.1z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: closed-captioning-slash
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for closed-captioning-slash (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-closed-captioning-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-closed-captioning-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-closed-captioning-slash 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-closed-captioning-slash 3s ease-in-out infinite alternate;
}
</style>