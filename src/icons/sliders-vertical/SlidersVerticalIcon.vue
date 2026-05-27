<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-mechanical']"
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
      <path d="M5.00018 20.0001L4.99994 14.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.99994 11.0001V4.00006" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.99994 8.00006H14.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M1.99994 14.0001H7.99994" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.9999 12.0001H21.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.9997 8.00006L11.9999 4.00006" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.0002 20.0001L11.9999 11.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.9999 12.0001L18.9999 4.00006" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.0002 20.0001L18.9999 15.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sliders-vertical
// Category: mechanical
// Physics Presets: Dynamic kinetic adaptation for sliders-vertical (hugeicons). Selected semantic motion: mechanical with custom idle (ambient-floating) and interaction profile (gear-rotate) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sliders-vertical {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(90deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sliders-vertical {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sliders-vertical 0.45s cubic-bezier(0.76, 0, 0.24, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sliders-vertical 3s ease-in-out infinite alternate;
}
</style>