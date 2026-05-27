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
      <path d="M3.92723 4.37944C5.01307 3.80898 6.45414 3.52865 7.89521 4.2222C9.94761 1.25927 14.0524 1.25926 16.1048 4.2222C17.5458 3.52867 18.9868 3.80902 20.0727 4.37943C20.575 4.64333 20.8262 4.77528 20.9545 5.15246C21.0827 5.52964 20.9298 5.84896 20.6241 6.48759L16.2167 15.6944C16.0084 16.1294 15.9043 16.347 15.8558 16.5489C15.8073 16.7508 15.794 17.3092 15.7674 18.4261C15.7215 20.3525 14.4794 22 12 22C9.52061 22 8.27855 20.3525 8.23262 18.4261C8.20598 17.3092 8.19267 16.7508 8.14418 16.5489C8.0957 16.347 7.99157 16.1294 7.7833 15.6944L3.37585 6.48751C3.07015 5.84891 2.9173 5.52962 3.04553 5.15244C3.17377 4.77527 3.42492 4.64333 3.92723 4.37944Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 17H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 4L11 17M16 4L13 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 12C7.2 13.3333 8.8 13.3334 10 12C11.2 13.3333 12.8 13.3334 14 12C15.2 13.3333 16.8 13.3334 18 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: badminton-shuttle
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for badminton-shuttle (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-badminton-shuttle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-badminton-shuttle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-badminton-shuttle 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-badminton-shuttle 3s ease-in-out infinite alternate;
}
</style>