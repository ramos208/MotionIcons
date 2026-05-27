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
      <path d="M11.847 20.095a7.805 7.805 0 01-6.286-3.238l1.714-1.238C8.323 17.048 10.037 18 11.847 18s3.523-.857 4.571-2.381l1.714 1.238a7.805 7.805 0 01-6.285 3.238zm.19-18c1.62 0 3.238.476 4.762 1.334l1.048.476 2.857-.572-.477 2.857c2.381 3.715 2.191 9.239-1.047 12.667a9.748 9.748 0 01-7.048 3.048 9.98 9.98 0 01-6.857-2.762c-3.905-3.81-4-10-.286-13.905 1.905-2.095 4.477-3.143 7.048-3.143m0-2.095C8.799 0 5.751 1.333 3.466 3.714c-4.572 4.762-4.477 12.381.285 16.953A11.91 11.91 0 0012.037 24c3.238 0 6.381-1.333 8.571-3.619 3.62-3.714 4.286-9.81 1.81-14.571l.38-2.096.477-2.952-2.952.571-2.19.381-.382-.19C15.941.476 14.037 0 12.037 0Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: staffbase
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for staffbase (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-staffbase {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-staffbase {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-staffbase 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-staffbase 3s ease-in-out infinite alternate;
}
</style>