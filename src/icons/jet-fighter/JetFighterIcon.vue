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
      <path d="M496.2 206.8c-10.7-4.5-22.2-6.8-33.8-6.8L362 200 248 48 296 48c13.3 0 24-10.7 24-24S309.3 0 296 0L152 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0 0 152-54.4 0-52.8-66c-3-3.8-7.6-6-12.5-6L16 128c-8.8 0-16 7.2-16 16l0 88 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 88c0 8.8 7.2 16 16 16l24.3 0c4.9 0 9.5-2.2 12.5-6l52.8-66 54.4 0 0 152-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 114-152 100.4 0c11.6 0 23.1-2.3 33.8-6.8l65-27.1c8.9-3.7 14.8-12.5 14.8-22.2s-5.8-18.4-14.8-22.2l-65-27.1z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: jet-fighter
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for jet-fighter (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-jet-fighter {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-jet-fighter {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-jet-fighter 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-jet-fighter 3s ease-in-out infinite alternate;
}
</style>