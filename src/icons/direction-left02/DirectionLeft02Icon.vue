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
      <path d="M7.06006 5.67914C7.68595 4.85343 7.9989 4.44058 8.42672 4.22029C8.85454 4 9.34337 4 10.3211 4H16C16.9428 4 17.4142 4 17.7071 4.29289C18 4.58579 18 5.05719 18 6V9C18 9.94281 18 10.4142 17.7071 10.7071C17.4142 11 16.9428 11 16 11H10.3211C9.34337 11 8.85454 11 8.42672 10.7797C7.9989 10.5594 7.68595 10.1466 7.06006 9.32086L6.81211 8.99376C6.2707 8.27951 6 7.92239 6 7.5C6 7.07761 6.2707 6.72048 6.81211 6.00624L7.06006 5.67914Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.06006 5.67914C7.68595 4.85343 7.9989 4.44058 8.42672 4.22029C8.85454 4 9.34337 4 10.3211 4H16C16.9428 4 17.4142 4 17.7071 4.29289C18 4.58579 18 5.05719 18 6V9C18 9.94281 18 10.4142 17.7071 10.7071C17.4142 11 16.9428 11 16 11H10.3211C9.34337 11 8.85454 11 8.42672 10.7797C7.9989 10.5594 7.68595 10.1466 7.06006 9.32086L6.81211 8.99376C6.2707 8.27951 6 7.92239 6 7.5C6 7.07761 6.2707 6.72048 6.81211 6.00624L7.06006 5.67914Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 21L14 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 4L14 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 21H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: direction-left02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for direction-left02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-direction-left02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-direction-left02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-direction-left02 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-direction-left02 3s ease-in-out infinite alternate;
}
</style>