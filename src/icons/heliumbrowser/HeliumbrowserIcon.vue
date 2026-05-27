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
      <path d="M14.3081 22.2984 12 24l-2.3081-1.7016 1.0489-8.1189-6.5174 4.9661L1.5938 18l.321-2.8467L9.4808 12l-7.566-3.1533L1.5938 6l2.6296-1.1456 6.5174 4.9661-1.049-8.119L12 0l2.3081 1.7016-1.0488 8.1189 6.5173-4.9661L22.4062 6l-.321 2.8467L14.5192 12l7.566 3.1533.321 2.8467-2.6296 1.1456-6.5173-4.9661z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: heliumbrowser
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for heliumbrowser (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-heliumbrowser {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-heliumbrowser {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-heliumbrowser 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-heliumbrowser 3s ease-in-out infinite alternate;
}
</style>