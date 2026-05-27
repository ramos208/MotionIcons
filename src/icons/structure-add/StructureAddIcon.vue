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
      <path d="M15.002 5C15.002 3.58579 15.002 2.87868 15.5144 2.43934C16.0267 2 16.8515 2 18.5008 2C20.1502 2 20.975 2 21.4873 2.43934C21.9997 2.87868 21.9997 3.58579 21.9997 5C21.9997 6.41421 21.9997 7.12132 21.4873 7.56066C20.975 8 20.1502 8 18.5008 8C16.8515 8 16.0267 8 15.5144 7.56066C15.002 7.12132 15.002 6.41421 15.002 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.002 19C15.002 17.5858 15.002 16.8787 15.5144 16.4393C16.0267 16 16.8515 16 18.5008 16C20.1502 16 20.975 16 21.4873 16.4393C21.9997 16.8787 21.9997 17.5858 21.9997 19C21.9997 20.4142 21.9997 21.1213 21.4873 21.5607C20.975 22 20.1502 22 18.5008 22C16.8515 22 16.0267 22 15.5144 21.5607C15.002 21.1213 15.002 20.4142 15.002 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.0224 9.99988L7.0224 14M9.01297 12L4.98828 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.02803 17.0364C9.80494 17.0364 12.0561 14.7846 12.0561 12.0068C12.0561 9.22901 9.80494 6.97717 7.02803 6.97717M7.02803 17.0364C4.25113 17.0364 2 14.7846 2 12.0068C2 9.22901 4.25113 6.97717 7.02803 6.97717M7.02803 17.0364C6.95809 19.1663 8.56235 19.9524 9.67527 19.9932H12.0021M7.02803 6.97717C6.95737 4.8171 8.54755 4.05751 9.67528 4.00977H12.0021" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: structure-add
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for structure-add (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-structure-add {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-structure-add {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-structure-add 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-structure-add 3s ease-in-out infinite alternate;
}
</style>