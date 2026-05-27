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
      <path d="M18.1604 5V4C18.1604 3.05719 18.1604 2.58579 17.8596 2.29289C17.5589 2 17.0749 2 16.1069 2H7.8931C6.92509 2 6.44109 2 6.14037 2.29289C5.83965 2.58579 5.83965 3.05719 5.83965 4V5M18.1604 5L20.8152 19.6524C21.0124 20.7411 21.1111 21.2855 20.8033 21.6427C20.4956 22 19.928 22 18.793 22H17.6235C16.8926 22 16.5272 22 16.2552 21.8044C15.9833 21.6088 15.8758 21.2686 15.6609 20.5882L13.9626 15.2126C13.1598 12.6711 12.7583 11.4004 12 11.4004C11.2417 11.4004 10.8402 12.6711 10.0374 15.2126L8.33912 20.5882C8.12417 21.2686 8.01669 21.6088 7.74476 21.8044C7.47284 22 7.10738 22 6.37647 22H5.20702C4.07196 22 3.50443 22 3.19668 21.6427C2.88893 21.2855 2.98756 20.7411 3.18482 19.6524L5.83965 5M18.1604 5H5.83965" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 7.77778L12 5L15 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: jogger-pants
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for jogger-pants (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-jogger-pants {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-jogger-pants {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-jogger-pants 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-jogger-pants 3s ease-in-out infinite alternate;
}
</style>