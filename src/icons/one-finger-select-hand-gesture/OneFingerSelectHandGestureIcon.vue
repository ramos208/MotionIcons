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
      <path d="M7.5 12L5.49591 14.6721C4.91845 15.4421 4.97127 16.5141 5.6216 17.2236L9.4055 21.3515C9.78431 21.7647 10.3183 22 10.8789 22C11.9651 22 13.7415 22 15.5 22C17.9 22 19.5 20 19.5 18C19.5 18 19.5 18 19.5 18C19.5 18 19.5 11.1429 19.5 9.42859" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 9.99995C16.5 9.99995 16.5 9.87483 16.5 9.42852C16.5 7.1428 19.5 7.1428 19.5 9.42852" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 9.99998C13.5 9.99998 13.5 9.17832 13.5 8.2857C13.5 5.99998 16.5 5.99998 16.5 8.2857C16.5 8.50885 16.5 9.2054 16.5 9.42855C16.5 9.87487 16.5 9.99998 16.5 9.99998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 10.0001C10.5 10.0001 10.5 8.61584 10.5 7.50005C10.5 5.21434 13.5 5.21434 13.5 7.50005C13.5 7.50005 13.5 7.50005 13.5 7.50005C13.5 7.50005 13.5 8.06261 13.5 8.28577C13.5 9.17839 13.5 10.0001 13.5 10.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 10C10.5 10 10.5 8.61578 10.5 7.5C10.5 6.34156 10.5 4.68968 10.5 3.49899C10.5 2.67056 9.82843 2 9 2V2C8.17157 2 7.5 2.67157 7.5 3.5V12V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: one-finger-select-hand-gesture
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for one-finger-select-hand-gesture (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-one-finger-select-hand-gesture {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-one-finger-select-hand-gesture {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-one-finger-select-hand-gesture 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-one-finger-select-hand-gesture 3s ease-in-out infinite alternate;
}
</style>