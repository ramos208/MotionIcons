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
      class="icon-geometry anim-notification-pulse"
    >
      <path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M22 8c0-2.3-.8-4.3-2-6"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bell-ring
// Category: notification
// Physics Presets: The motion design aims to mimic the physical behavior of a bell ringing, with a pendulum-like motion for idle and hover states, emphasizing the vibration effect for click events through sound waves and neon plasma shader.

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

.anim-notification-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-bell-ring {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(0deg) translate(0px, -37.5px) skew(-6deg); }
  100% { transform: scale(1.1) rotate(360deg) translate(0px, -25px) skew(-5deg); }
}

@keyframes motion-ai-idle-bell-ring {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(360deg) translate(0px, -20px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bell-ring 400s ease-out forwards;
}

.anim-notification-pulse {
  animation: motion-ai-idle-bell-ring 800s ease-out infinite alternate;
}
</style>