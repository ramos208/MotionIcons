<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M16.502 10.0023C17.3458 10.0023 18.3198 9.91895 18.801 10.7523C19.002 11.1004 19.002 11.5677 19.002 12.5023V13.5023C19.002 14.4369 19.002 14.9042 18.801 15.2523C18.3198 16.0857 17.3458 16.0023 16.502 16.0023C15.6581 16.0023 14.6841 16.0857 14.2029 15.2523C14.002 14.9042 14.002 14.4369 14.002 13.5023L14.002 12.5023C14.002 11.5677 14.002 11.1004 14.2029 10.7523C14.6841 9.91895 15.6581 10.0023 16.502 10.0023Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.50195 4.00232C8.34585 4.00232 9.31984 3.91895 9.80099 4.75232C10.002 5.10039 10.002 5.5677 10.002 6.50232L10.002 13.5023C10.002 14.4369 10.002 14.9042 9.80099 15.2523C9.31984 16.0857 8.34585 16.0023 7.50195 16.0023C6.65806 16.0023 5.68406 16.0857 5.20292 15.2523C5.00195 14.9042 5.00195 14.4369 5.00195 13.5023L5.00195 6.50232C5.00195 5.5677 5.00195 5.10039 5.20292 4.75232C5.68406 3.91895 6.65806 4.00232 7.50195 4.00232Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 20L2 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: align-bottom
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for align-bottom (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-align-bottom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-align-bottom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-align-bottom 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-align-bottom 2s ease-in-out infinite alternate;
}
</style>