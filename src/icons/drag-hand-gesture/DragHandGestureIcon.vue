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
      <path d="M7 10.5L4.99591 13.1721C4.41845 13.9421 4.47127 15.0141 5.1216 15.7236L8.9055 19.8515C9.28432 20.2647 9.81826 20.5 10.3789 20.5C11.4651 20.5 13.2415 20.5 15 20.5C17.4 20.5 19 19 19 16.5C19 16.5 19 16.5 19 16.5C19 16.5 19 9.64287 19 7.92859" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 8.49995C16 8.49995 16 8.37483 16 7.92852C16 5.6428 19 5.6428 19 7.92852" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 8.50008C13 8.50008 13 7.91978 13 7.02715M13 6.50008C13 6.50008 13 6.804 13 7.02715M16 8.50008C16 8.50008 16 8.37496 16 7.92865C16 7.70549 16 7.25031 16 7.02715C16 4.74144 13 4.74144 13 7.02715" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 8.50008C13 8.50008 13 7.91978 13 7.02715C13 4.74144 16 4.74144 16 7.02715C16 7.25031 16 7.70549 16 7.92865C16 8.37496 16 8.50008 16 8.50008" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 8.50005C10 8.50005 10 7.85719 10 6.50005C10 4.21434 13 4.21434 13 6.50005C13 6.50005 13 6.50005 13 6.50005C13 6.50005 13 6.80397 13 7.02713C13 7.91975 13 8.50005 13 8.50005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 13.5001V6.50006C7 5.67164 7.67157 5.00006 8.5 5.00006V5.00006C9.32843 5.00006 10 5.55527 10 6.38369C10 6.42151 10 6.4603 10 6.50006C10 7.85721 10 8.50006 10 8.50006" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: drag-hand-gesture
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for drag-hand-gesture (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-drag-hand-gesture {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-drag-hand-gesture {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-drag-hand-gesture 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-drag-hand-gesture 3s ease-in-out infinite alternate;
}
</style>