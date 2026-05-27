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
      <path d="M224 128a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM176 336c0-61.9 50.1-112 112-112s112 50.1 112 112l0 8c0 13.3-10.7 24-24 24l-176 0c-13.3 0-24-10.7-24-24l0-8zM392 144a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm27.2 100.4c9.1-2.9 18.8-4.4 28.8-4.4 53 0 96 43 96 96l0 10.7c0 11.8-9.6 21.3-21.3 21.3l-78.8 0c2.7-7.5 4.1-15.6 4.1-24l0-8c0-34.1-10.6-65.7-28.8-91.6zm-262.4 0c-18.2 26-28.8 57.5-28.8 91.6l0 8c0 8.4 1.4 16.5 4.1 24l-78.8 0C41.6 368 32 358.4 32 346.7L32 336c0-53 43-96 96-96 10 0 19.7 1.5 28.8 4.4zM72 144a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zM0 440c0-13.3 10.7-24 24-24l528 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 464c-13.3 0-24-10.7-24-24z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: users-line
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for users-line (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-users-line {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-users-line {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-users-line 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-users-line 3s ease-in-out infinite alternate;
}
</style>