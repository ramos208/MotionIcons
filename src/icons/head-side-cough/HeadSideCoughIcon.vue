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
      <path d="M96 512l64 0c53 0 96-43 96-96l0-80c0-8.8 7.2-16 16-16l1 0c26 0 47-21 47-47 0-11-3.9-21.6-10.9-30.1L273.3 200C271.4 197.6 270.1 194.7 269.7 191.7 254 83.3 160.7 0 48 0 40.4 0 32.9 .4 25.4 1.1 10.5 2.6 0 15.9 0 30.9L0 480c0 17.7 14.3 32 32 32l64 0zm16-320a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm63.1 237.2l-41.5-3.5c-12.2-1-21.6-11.2-21.6-23.4 0-10.8 7.3-20.2 17.8-22.8l40.4-10.1c19.2-4.8 37.8 9.7 37.8 29.5 0 17.8-15.2 31.8-32.9 30.3zM480 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-40 24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-64 48a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm128 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM480 504a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-40-72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: head-side-cough
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for head-side-cough (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-head-side-cough {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-head-side-cough {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-head-side-cough 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-head-side-cough 3s ease-in-out infinite alternate;
}
</style>