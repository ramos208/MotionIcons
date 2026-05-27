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
      <path d="M10.6821 8.48926C9.6671 7.87782 8.98828 6.76527 8.98828 5.49422C8.98828 3.56441 10.553 2 12.4833 2C14.4135 2 15.9783 3.56441 15.9783 5.49422C15.9783 6.76527 15.2994 7.87782 14.2845 8.48926" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.553 21.9348L10.5784 21.3044C10.6032 20.6883 10.4414 20.0752 10.0986 19.56C8.75005 17.533 7.71953 16.3786 6.30717 14.4014C6.19531 14.2448 6.09068 14.0789 6.0466 13.8919C5.70602 12.4471 7.46581 10.5666 9.09583 12.7323L10.6871 14.3646L10.6871 6.32391C10.8981 4.6763 13.4908 4.34948 13.928 6.32389L13.928 10.0659C15.5452 9.91869 22.0819 11.044 20.8482 15.5308C20.7904 15.7411 20.7351 15.9558 20.678 16.1663C20.4702 16.933 19.962 18.0523 19.4727 19.0064C18.9286 20.0673 19.0718 21.566 18.9796 22.001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.71865 4.98853H2.99805M2.99805 4.98853C3.1371 5.4239 3.5156 5.68779 3.83946 5.98427L5.02718 6.98996M2.99805 4.98853C3.11123 4.54575 3.52373 4.25931 3.83946 3.95999L5.02718 2.94141" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: drag-left01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for drag-left01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-drag-left01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-drag-left01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-drag-left01 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-drag-left01 3s ease-in-out infinite alternate;
}
</style>