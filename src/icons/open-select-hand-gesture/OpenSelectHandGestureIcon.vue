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
      <path d="M8 14.5714L6.17716 12.8354C5.53522 12.224 4.51329 12.2705 3.92953 12.9377V12.9377C3.40196 13.5406 3.41749 14.4453 3.96544 15.0298L9.90739 21.3679C10.2855 21.7712 10.8127 22 11.3655 22C12.4505 22 14.2343 22 16 22C18.4 22 20 20 20 18C20 18 20 18 20 18C20 18 20 11.1429 20 9.42859" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 9.99995C17 9.99995 17 9.87483 17 9.42852C17 7.1428 20 7.1428 20 9.42852" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 9.99998C14 9.99998 14 9.17832 14 8.2857C14 5.99998 17 5.99998 17 8.2857C17 8.50885 17 9.2054 17 9.42855C17 9.87487 17 9.99998 17 9.99998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 10.0001C11 10.0001 11 8.61584 11 7.50005C11 5.21434 14 5.21434 14 7.50005C14 7.50005 14 7.50005 14 7.50005C14 7.50005 14 8.06261 14 8.28577C14 9.17839 14 10.0001 14 10.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 14.5714V3.5C8 2.67157 8.67157 2 9.5 2V2C10.3284 2 11 2.67056 11 3.49899C11 4.68968 11 6.34156 11 7.5C11 8.61578 11 10 11 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: open-select-hand-gesture
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for open-select-hand-gesture (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-open-select-hand-gesture {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-open-select-hand-gesture {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-open-select-hand-gesture 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-open-select-hand-gesture 3s ease-in-out infinite alternate;
}
</style>