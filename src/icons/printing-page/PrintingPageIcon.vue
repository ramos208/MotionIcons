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
      <path d="M17.5714 18H20.4C20.7314 18 21 17.7314 21 17.4V11C21 8.79086 19.2091 7 17 7H7C4.79086 7 3 8.79086 3 11V17.4C3 17.7314 3.26863 18 3.6 18H6.42857" stroke="currentColor" stroke-width="1.5"/><path d="M8 7V3.6C8 3.26863 8.26863 3 8.6 3H15.4C15.7314 3 16 3.26863 16 3.6V7" stroke="currentColor" stroke-width="1.5"/><path d="M6.09782 20.3151L6.42855 18L6.92639 14.5151C6.96862 14.2196 7.22177 14 7.52036 14H16.4796C16.7782 14 17.0313 14.2196 17.0736 14.5151L17.5714 18L17.9021 20.3151C17.9538 20.6766 17.6733 21 17.3082 21H6.69179C6.32666 21 6.04618 20.6766 6.09782 20.3151Z" stroke="currentColor" stroke-width="1.5"/><path d="M17 10.01L17.01 9.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: printing-page
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for printing-page (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-printing-page {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-printing-page {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-printing-page 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-printing-page 3s ease-in-out infinite alternate;
}
</style>