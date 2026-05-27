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
      <path d="M0 3.47l.218.572c1.925 5.006 5.566 2.689 10.415 7.139l.056.05c.652.599 1.1.044.888-.306a.76.76 0 0 1-.165-.532 6.7 6.7 0 0 1 2.606 1.369l-.06.126c-.366.73-3.959.421-4 1.943a.969.969 0 0 0 .607.923l.71.287a17.34 17.34 0 0 1 6.086 4.146.086.086 0 0 1-.063.147.079.079 0 0 1-.054-.018 17.32 17.32 0 0 0-8.173-3.61.467.467 0 0 1-.39-.41c-.548-5.089-5.575-5.434-7.492-8.705l5.313 13.94H24L9.979 6.449a10.022 10.022 0 0 0-7.045-2.98Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: qantas
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for qantas (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-qantas {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-qantas {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-qantas 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-qantas 3s ease-in-out infinite alternate;
}
</style>