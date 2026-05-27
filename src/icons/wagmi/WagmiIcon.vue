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
      <path d="M2.7391 13.2065c0 .7564.6132 1.3696 1.3696 1.3696h2.7391c.7564 0 1.3696-.6132 1.3696-1.3696V7.7283c0-.7564.6132-1.3696 1.3696-1.3696s1.3695.6132 1.3695 1.3696v5.4782c0 .7564.6132 1.3696 1.3696 1.3696h2.7391c.7564 0 1.3696-.6132 1.3696-1.3696V7.7283c0-.7564.6131-1.3696 1.3695-1.3696s1.3696.6132 1.3696 1.3696v8.2174c0 .7564-.6132 1.3695-1.3696 1.3695H1.3696C.6132 17.3152 0 16.7021 0 15.9457V7.7283c0-.7564.6132-1.3696 1.3696-1.3696s1.3695.6132 1.3695 1.3696zm19.4348 4.4348c1.0085 0 1.8261-.8176 1.8261-1.826 0-1.0086-.8176-1.8262-1.826-1.8262-1.0086 0-1.8262.8176-1.8262 1.8261 0 1.0085.8176 1.826 1.8261 1.826z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wagmi
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for wagmi (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-wagmi {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wagmi {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wagmi 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-wagmi 3s ease-in-out infinite alternate;
}
</style>