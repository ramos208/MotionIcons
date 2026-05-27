<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M2.49999 3.50011L7 7.99977M7 7.99977L6.99999 4.00011M7 7.99977L3.00009 7.99988" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 16L11.5 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5 9C10.3579 9 7 12.2832 7 16.3333C7 17.4668 7.26298 18.5401 7.73253 19.4983C7.88808 19.8157 8.22018 20 8.57365 20H20.4264C20.7798 20 21.1119 19.8157 21.2675 19.4983C21.737 18.5401 22 17.4668 22 16.3333C22 12.2832 18.6421 9 14.5 9Z" stroke="currentColor" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: meter-arrow-down-right
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for meter-arrow-down-right (iconoir). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-meter-arrow-down-right {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-meter-arrow-down-right {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-meter-arrow-down-right 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-meter-arrow-down-right 3s ease-in-out infinite alternate;
}
</style>