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
      <path d="M13 22.0005H11M16.5 3.58926C17.6376 3.70116 18.4033 3.95405 18.9749 4.52558C19.6998 5.25055 19.9121 6.28798 19.9743 8.00046M7.5 3.58926C6.3624 3.70116 5.59666 3.95405 5.02513 4.52558C4.30016 5.25055 4.08789 6.28798 4.02573 8.00046M20 12.0005V14.0005M4 12.0005V14.0005M19.9504 18.0005C19.8638 19.4199 19.6264 20.3238 18.9749 20.9753C18.4914 21.4588 17.869 21.7143 17 21.8492M4.04962 18.0005C4.13616 19.4199 4.3736 20.3238 5.02513 20.9753C5.5086 21.4588 6.13105 21.7143 7 21.8492" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.5 2.00046V5.00046M7.5 2.00046V5.00046M12 2.00046V5.00046" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 15.0005H12M8 11.0005H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: notepad-text-dashed
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for notepad-text-dashed (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-notepad-text-dashed {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-notepad-text-dashed {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-notepad-text-dashed 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-notepad-text-dashed 3s ease-in-out infinite alternate;
}
</style>