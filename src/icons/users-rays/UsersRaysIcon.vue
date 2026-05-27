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
      <path d="M31-33C21.7-23.6 21.7-8.4 31 1L87 57c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65-33c-9.4-9.4-24.6-9.4-33.9 0zM609-33c-9.4-9.4-24.6-9.4-33.9 0L519 23c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L609 1c9.4-9.4 9.4-24.6 0-33.9zM65 545l56-56c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L31 511c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0zm544 0c9.4-9.4 9.4-24.6 0-33.9l-56-56c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l56 56c9.4 9.4 24.6 9.4 33.9 0zM320 208a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0 32c-61.9 0-112 50.1-112 112l0 8c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24l0-8c0-61.9-50.1-112-112-112zm216-80a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zM451.2 260.4C469.4 286.3 480 317.9 480 352l0 8c0 8.4-1.4 16.5-4.1 24l78.8 0c11.8 0 21.3-9.6 21.3-21.3l0-10.7c0-53-43-96-96-96-10 0-19.7 1.5-28.8 4.4zm-262.4 0c-9.1-2.9-18.8-4.4-28.8-4.4-53 0-96 43-96 96l0 10.7c0 11.8 9.6 21.3 21.3 21.3l78.8 0c-2.7-7.5-4.1-15.6-4.1-24l0-8c0-34.1 10.6-65.7 28.8-91.6zM216 160a56 56 0 1 0 -112 0 56 56 0 1 0 112 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: users-rays
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for users-rays (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-users-rays {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-users-rays {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-users-rays 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-users-rays 3s ease-in-out infinite alternate;
}
</style>