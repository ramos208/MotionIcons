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
      <path d="M14.08008 0c-1.00234 0-1.8125.80893-1.8125 1.8086v2.57226c-4.01871.7444-7.19505 3.9119-7.93946 7.91992H1.8125c-1.001 0-1.8125.80698-1.8125 1.80664 0 .99833.8115 1.8086 1.8125 1.8086h2.51563C5.18077 20.5094 9.22875 24 14.08008 24 19.54884 24 24 19.56148 24 14.10742c0-4.83662-3.50067-8.87524-8.10742-9.72656V1.80859C15.89258.80893 15.08108 0 14.08008 0ZM4.69336 3.17578c-1.00368 0-1.8164.80955-1.8164 1.81055 0 .99966.81272 1.8125 1.8164 1.8125 1.001 0 1.8164-.81284 1.8164-1.8125 0-1.001-.8154-1.81055-1.8164-1.81055zm9.38672 4.65625c3.46809 0 6.29297 2.81398 6.29297 6.2754 0 3.46006-2.82488 6.27734-6.29297 6.27734-3.46943 0-6.29297-2.81728-6.29297-6.27735 0-3.4614 2.82354-6.27539 6.29297-6.27539zm-.01758 2.4043c-2.14634 0-3.89258 1.73986-3.89258 3.88086S11.91616 18 14.0625 18c2.14634 0 3.89258-1.74182 3.89258-3.88281 0-2.141-1.74624-3.88086-3.89258-3.88086zm0 2.7168c.6455 0 1.16797.51989 1.16797 1.16406 0 .64283-.52246 1.16797-1.16797 1.16797-.64417 0-1.16992-.52514-1.16992-1.16797 0-.64417.52575-1.16407 1.16992-1.16407z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: steelseries
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for steelseries (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-steelseries {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-steelseries {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-steelseries 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-steelseries 3s ease-in-out infinite alternate;
}
</style>