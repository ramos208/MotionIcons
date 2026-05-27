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
      <path d="M7 5C7 4.05719 7 3.58579 7.29289 3.29289C7.58579 3 8.05719 3 9 3C9.94281 3 10.4142 3 10.7071 3.29289C11 3.58579 11 4.05719 11 5V9C11 9.94281 11 10.4142 10.7071 10.7071C10.4142 11 9.94281 11 9 11C8.05719 11 7.58579 11 7.29289 10.7071C7 10.4142 7 9.94281 7 9V5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 15C13 14.0572 13 13.5858 13.2929 13.2929C13.5858 13 14.0572 13 15 13C15.9428 13 16.4142 13 16.7071 13.2929C17 13.5858 17 14.0572 17 15C17 15.9428 17 16.4142 16.7071 16.7071C16.4142 17 15.9428 17 15 17C14.0572 17 13.5858 17 13.2929 16.7071C13 16.4142 13 15.9428 13 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 19C9 18.0572 9 17.5858 9.29289 17.2929C9.58579 17 10.0572 17 11 17H19C19.9428 17 20.4142 17 20.7071 17.2929C21 17.5858 21 18.0572 21 19C21 19.9428 21 20.4142 20.7071 20.7071C20.4142 21 19.9428 21 19 21H11C10.0572 21 9.58579 21 9.29289 20.7071C9 20.4142 9 19.9428 9 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 9C3 8.05719 3 7.58579 3.29289 7.29289C3.58579 7 4.05719 7 5 7C5.94281 7 6.41421 7 6.70711 7.29289C7 7.58579 7 8.05719 7 9V13C7 13.9428 7 14.4142 6.70711 14.7071C6.41421 15 5.94281 15 5 15C4.05719 15 3.58579 15 3.29289 14.7071C3 14.4142 3 13.9428 3 13V9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tetris
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tetris (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tetris {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tetris {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tetris 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tetris 3s ease-in-out infinite alternate;
}
</style>