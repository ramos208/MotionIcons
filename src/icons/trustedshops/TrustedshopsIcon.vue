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
      <path d="M15.187 14.332c-1.1 1.626-2.63 3.108-4.687 3.108-2.175 0-3.442-1.362-3.442-3.562 0-3.561 2.63-7.052 6.335-7.052 1.242 0 2.916.502 2.916 2.009 0 2.7-4.231 3.609-6.311 4.135-.072.457-.143.908-.143 1.362 0 .933.501 1.793 1.53 1.793 1.338 0 2.412-1.29 3.203-2.247zm-1.148-5.808c0-.55-.31-.978-.884-.978-1.722 0-2.608 3.346-2.94 4.66 1.601-.48 3.824-1.794 3.824-3.682zM12 0a12 12 0 1 0 12 11.997A11.997 11.997 0 0 0 12 0zm-.1 19.523a7.563 7.563 0 1 1 7.564-7.563 7.563 7.563 0 0 1-7.563 7.56Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: trustedshops
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for trustedshops (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-trustedshops {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-trustedshops {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-trustedshops 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-trustedshops 3s ease-in-out infinite alternate;
}
</style>