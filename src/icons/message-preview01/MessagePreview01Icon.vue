<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-pendulum']"
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
      class="icon-geometry anim-subtle-drift"
    >
      <path d="M21.8812 10.0003C21.9643 10.6436 22 11.3129 22 12.0003C22 16.9709 19.1328 21.0003 12 21.0003C10.4991 21.0003 9.20689 20.8537 8.0984 20.5818C7.50688 20.4367 6.88252 20.6154 6.39239 20.9769C5.70211 21.4862 4.61547 22.0003 3 22.0003C3.99253 21.3337 4.63281 19.5003 3.37161 17.5003C2.37034 15.9794 2 14.0716 2 12.0003C2 7.48016 3.76381 3.73829 10 3.09729" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 13.9996H16M8 9.99963H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.7948 4.59034C21.9316 4.77305 22 4.8644 22 4.99963C22 5.13486 21.9316 5.22622 21.7948 5.40893C21.1801 6.22987 19.6101 7.99963 17.5 7.99963C15.3899 7.99963 13.8199 6.22987 13.2052 5.40893C13.0684 5.22622 13 5.13486 13 4.99963C13 4.8644 13.0684 4.77305 13.2052 4.59034C13.8199 3.76939 15.3899 1.99963 17.5 1.99963C19.6101 1.99963 21.1801 3.76939 21.7948 4.59034Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.625 4.99963H17.5M17.75 4.99963C17.75 5.13771 17.6381 5.24963 17.5 5.24963C17.3619 5.24963 17.25 5.13771 17.25 4.99963C17.25 4.86156 17.3619 4.74963 17.5 4.74963C17.6381 4.74963 17.75 4.86156 17.75 4.99963Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: message-preview01
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for message-preview01 (hugeicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

.anim-subtle-drift {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-message-preview01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-message-preview01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-message-preview01 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-message-preview01 2.5s ease-in-out infinite alternate;
}
</style>