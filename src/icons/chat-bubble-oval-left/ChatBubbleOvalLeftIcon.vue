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
      <path d="M12 20.25C16.9706 20.25 21 16.5563 21 12C21 7.44365 16.9706 3.75 12 3.75C7.02944 3.75 3 7.44365 3 12C3 14.1036 3.85891 16.0234 5.2728 17.4806C5.70538 17.9265 6.01357 18.5192 5.85933 19.121C5.68829 19.7883 5.368 20.3959 4.93579 20.906C5.0918 20.9339 5.25 20.9558 5.40967 20.9713C5.60376 20.9903 5.80078 21 6 21C7.28201 21 8.47016 20.5979 9.44517 19.9129C10.2551 20.1323 11.1125 20.25 12 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: chat-bubble-oval-left
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for chat-bubble-oval-left (heroicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-chat-bubble-oval-left {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-chat-bubble-oval-left {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-chat-bubble-oval-left 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-chat-bubble-oval-left 2.5s ease-in-out infinite alternate;
}
</style>