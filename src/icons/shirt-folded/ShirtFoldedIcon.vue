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
      <path d="M200,40H179.31L165.66,26.34h0A8,8,0,0,0,160,24H96a8,8,0,0,0-5.66,2.34h0L76.69,40H56A16,16,0,0,0,40,56V208a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40ZM128,65.58,111,40h34.1Zm33.24-21L168,51.31V104L138.57,78.56ZM88,51.31l6.76-6.75,22.67,34L88,104ZM56,56H72v48a15.85,15.85,0,0,0,9.21,14.49A16.1,16.1,0,0,0,88,120a15.89,15.89,0,0,0,10.2-3.73.52.52,0,0,0,.11-.1L120,97.48V208H56ZM200,208H136V97.48l21.65,18.7a.52.52,0,0,0,.11.1A15.89,15.89,0,0,0,168,120a16.1,16.1,0,0,0,6.83-1.54A15.85,15.85,0,0,0,184,104V56h16Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: shirt-folded
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for shirt-folded (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-shirt-folded {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-shirt-folded {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-shirt-folded 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-shirt-folded 3s ease-in-out infinite alternate;
}
</style>