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
      <path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.58569 3.58569C8.90461 2.89234 10.4065 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 13.5935 21.1077 15.0954 20.4143 16.4143M5.28249 5.28249C3.56332 7.00165 2.5 9.37665 2.5 12C2.5 13.0483 2.6698 14.057 2.98341 15C3.5282 16.6382 3.12865 18.5818 2.6935 19.6074C2.59266 19.8451 2.62741 20.1274 2.80997 20.31C2.93024 20.4302 3.09774 20.4913 3.26592 20.4658C4.37462 20.2979 5.63177 19.362 7.5 20.3687C8.8394 21.0904 10.3719 21.5 12 21.5C14.6234 21.5 16.9984 20.4367 18.7175 18.7175" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bubble-chat-blocked
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for bubble-chat-blocked (hugeicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bubble-chat-blocked {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bubble-chat-blocked {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bubble-chat-blocked 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-bubble-chat-blocked 2.5s ease-in-out infinite alternate;
}
</style>