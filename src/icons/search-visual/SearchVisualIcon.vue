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
      <path d="M15.5 15.0001L17.5 17.0001M16.5 11.5001C16.5 9.01483 14.4853 7.00011 12 7.00011C9.51472 7.00011 7.5 9.01483 7.5 11.5001C7.5 13.9854 9.51472 16.0001 12 16.0001C14.4853 16.0001 16.5 13.9854 16.5 11.5001Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 21.5001C16.8623 21.5001 17.7935 21.5001 18.5391 21.2287C19.789 20.7738 20.7737 19.7891 21.2286 18.5392C21.5 17.7936 21.5 16.8624 21.5 15.0001M9 21.5001C7.13769 21.5001 6.20653 21.5001 5.46091 21.2287C4.21096 20.7738 3.22633 19.7891 2.77138 18.5392C2.5 17.7936 2.5 16.8624 2.5 15.0001M9 2.50011C7.13769 2.50011 6.20653 2.50011 5.46091 2.77149C4.21096 3.22643 3.22633 4.21107 2.77138 5.46102C2.5 6.20664 2.5 7.13779 2.5 9.00011M15 2.50011C16.8623 2.50011 17.7935 2.50011 18.5391 2.77149C19.789 3.22643 20.7737 4.21107 21.2286 5.46102C21.5 6.20664 21.5 7.13779 21.5 9.00011" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: search-visual
// Category: search
// Physics Presets: Dynamic kinetic adaptation for search-visual (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-search-visual {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-search-visual {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-search-visual 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-search-visual 3s ease-in-out infinite alternate;
}
</style>