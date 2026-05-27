<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M16.1796 11.4765c-2.0161 0-3.6576-1.6401-3.6576-3.6548 0-2.0148 1.6401-3.6562 3.6576-3.6562s3.6548 1.64 3.6548 3.6562c0 2.016-1.64 3.6548-3.6548 3.6548zm-.0014 8.3595c-2.0161 0-3.6562-1.64-3.6562-3.6562 0-2.0161 1.64-3.6562 3.6562-3.6562 2.016 0 3.6562 1.6401 3.6562 3.6562 0 2.0161-1.6401 3.6562-3.6562 3.6562zm0-6.5877c-1.6168 0-2.9315 1.3148-2.9315 2.9315 0 1.6168 1.3147 2.9315 2.9315 2.9315 1.6167 0 2.9315-1.3147 2.9315-2.9315 0-1.6167-1.3148-2.9315-2.9315-2.9315zM7.8187 19.836c-2.0162 0-3.6562-1.64-3.6562-3.6562 0-2.0161 1.64-3.6562 3.6562-3.6562 2.016 0 3.6561 1.6401 3.6561 3.6562 0 2.0161-1.64 3.6562-3.6561 3.6562zm0-6.5877c-1.6168 0-2.9316 1.3148-2.9316 2.9315 0 1.6168 1.3148 2.9315 2.9316 2.9315 1.6167 0 2.9315-1.3147 2.9315-2.9315 0-1.6167-1.3148-2.9315-2.9315-2.9315zm0-1.7718c-2.0162 0-3.6562-1.6401-3.6562-3.6562 0-2.0161 1.64-3.6562 3.6562-3.6562 2.016 0 3.6561 1.64 3.6561 3.6562 0 2.0161-1.64 3.6562-3.6561 3.6562zm0-6.5877c-1.6168 0-2.9316 1.3148-2.9316 2.9315 0 1.6167 1.3148 2.9315 2.9316 2.9315 1.6167 0 2.9315-1.3148 2.9315-2.9315 0-1.6167-1.3148-2.9315-2.9315-2.9315zM3.0014 0C1.3462 0 0 1.3465 0 3.0003V21c0 1.6537 1.3462 3 3.0014 3h17.994c1.6551 0 3.003-1.3463 3.003-3V3.0002C23.9984 1.3465 22.6519 0 20.9954 0Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: payback
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for payback (simpleicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-payback {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(4.5px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(3px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-payback {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-payback 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-payback 3s ease-in-out infinite alternate;
}
</style>