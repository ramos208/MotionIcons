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
      <path d="M15 9.99001V10M13 3.99762C13 2.89437 13.8954 2 15 2C16.1046 2 17 2.89437 17 3.99762C17 4.5747 16.755 5.09463 16.3632 5.4593C15.7572 6.02343 15 6.66601 15 7.49346" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.90736 3.28292C8.69745 2.24209 7.88793 1.76801 7.04807 2.10979C5.94481 2.55876 5.85017 3.98379 5.67232 6.66186L5.10772 14.3857C4.9732 16.2065 4.90595 17.1169 5.26831 17.574C5.51701 17.8877 5.88085 18.0871 6.27746 18.1269C6.85532 18.1851 7.57763 17.6337 9.02224 16.5308C9.63074 16.0663 9.935 15.834 10.239 15.8187C10.4503 15.8081 10.6595 15.8662 10.8355 15.9844C11.0887 16.1545 11.2317 16.5111 11.5177 17.2241L13.0004 20.9204C13.1717 21.3475 13.2574 21.561 13.3939 21.7015C13.5778 21.8907 13.8292 21.9982 14.0921 22C14.2873 22.0013 14.4993 21.915 14.9232 21.7425C15.3471 21.57 15.5591 21.4837 15.6986 21.3462C15.8865 21.1609 15.9932 20.9078 15.995 20.6429C15.9963 20.4464 15.9107 20.2328 15.7394 19.8058L14.2567 16.1095C13.9707 15.3964 13.8277 15.0399 13.8925 14.7404C13.9376 14.5321 14.0479 14.344 14.2073 14.2038C14.4365 14.0021 14.8156 13.9563 15.5737 13.8647C17.3734 13.6473 18.2733 13.5385 18.6489 13.0924C18.9067 12.7862 19.0309 12.3882 18.9934 11.9885C18.9563 11.592 18.6309 11.1836 18 10.5796" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cursor-info01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cursor-info01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cursor-info01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cursor-info01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cursor-info01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cursor-info01 3s ease-in-out infinite alternate;
}
</style>