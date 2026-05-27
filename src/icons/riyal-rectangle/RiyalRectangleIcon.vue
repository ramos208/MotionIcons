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
      <path d="M12.5 2.5H11.5C7.25736 2.5 5.13604 2.5 3.81802 3.81802C2.5 5.13604 2.5 7.25736 2.5 11.5V12.5C2.5 16.7426 2.5 18.864 3.81802 20.182C5.13604 21.5 7.25736 21.5 11.5 21.5H12.5C16.7426 21.5 18.864 21.5 20.182 20.182C21.5 18.864 21.5 16.7426 21.5 12.5V11.5C21.5 7.25736 21.5 5.13604 20.182 3.81802C18.864 2.5 16.7426 2.5 12.5 2.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 10.5V11.5C19 13.1569 17.6569 14.5 16 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 8.5V12.5C11 13.0523 11.4477 13.5 12 13.5H13C13.5523 13.5 14 13.0523 14 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 8.5V12.5C8 13.0523 7.55228 13.5 7 13.5H6C5.44772 13.5 5 13.0523 5 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.15 16.1H11.1M13.9484 16.1H13.8984M11.2 16.1C11.2 16.1552 11.1552 16.2 11.1 16.2C11.0448 16.2 11 16.1552 11 16.1C11 16.0448 11.0448 16 11.1 16C11.1552 16 11.2 16.0448 11.2 16.1ZM13.9984 16.1C13.9984 16.1552 13.9537 16.2 13.8984 16.2C13.8432 16.2 13.7984 16.1552 13.7984 16.1C13.7984 16.0448 13.8432 16 13.8984 16C13.9537 16 13.9984 16.0448 13.9984 16.1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: riyal-rectangle
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for riyal-rectangle (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-riyal-rectangle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-riyal-rectangle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-riyal-rectangle 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-riyal-rectangle 3s ease-in-out infinite alternate;
}
</style>