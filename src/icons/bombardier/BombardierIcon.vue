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
      <path d="m0 23.24 1.823-1.822c1.823-1.823 3.645-2.127 6.076-2.127h5.012c2.43 0 3.707-.152 5.681-1.519h.244l-3.342 3.342c-1.823 1.823-3.646 2.127-6.076 2.127H0ZM5.165 6.533l1.822 1.822c1.823 1.823 3.646 2.127 6.076 2.127h5.013c2.43 0 3.706.152 5.681 1.519-1.975 1.367-3.25 1.519-5.681 1.519h-5.013c-2.43 0-4.253.304-6.076 2.127l-1.822 1.822h9.417c2.43 0 4.254-.303 6.076-2.126L24 12l-3.342-3.342c-1.822-1.823-3.645-2.126-6.076-2.126H5.165ZM0 .759l1.823 1.823C3.646 4.405 5.468 4.71 7.899 4.71h5.012c2.43 0 3.707.152 5.681 1.519h.244l-3.342-3.342C13.67 1.063 11.848.76 9.418.76H0Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bombardier
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bombardier (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bombardier {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bombardier {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bombardier 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bombardier 3s ease-in-out infinite alternate;
}
</style>