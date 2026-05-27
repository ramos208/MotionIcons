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
      <path d="M8.571 1.286A1.72 1.72 0 0 0 6.857 3v10.286c0 .634.353 1.183.868 1.48.251.144.538.234.846.234h13.715A1.72 1.72 0 0 0 24 13.286V3a1.72 1.72 0 0 0-1.714-1.714Zm.56 12.087zm3.166 0zm-10.583-.087A1.72 1.72 0 0 0 0 15v6a1.72 1.72 0 0 0 1.714 1.714h8.572a1.715 1.715 0 0 0 1.473-.857c.148-.253.241-.544.241-.857v-4.286H8.571c-.296 0-.582-.042-.857-.114a3.439 3.439 0 0 1-2.571-3.314Zm18 3.428h-6V21H18a1.72 1.72 0 0 0 1.714-1.714z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: duplicati
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for duplicati (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-duplicati {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-duplicati {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-duplicati 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-duplicati 3s ease-in-out infinite alternate;
}
</style>