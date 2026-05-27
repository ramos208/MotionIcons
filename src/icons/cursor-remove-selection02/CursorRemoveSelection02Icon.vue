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
      <path d="M9.0469 5.44865L14.4101 7.54728L14.4101 7.54728C17.5034 8.75771 19.05 9.36293 18.9988 10.323C18.9475 11.283 17.3334 11.7232 14.1051 12.6036C13.1439 12.8658 12.6633 12.9969 12.3301 13.3301C11.9969 13.6633 11.8658 14.1439 11.6036 15.1051C10.7232 18.3334 10.283 19.9475 9.32296 19.9988C8.36293 20.05 7.75771 18.5034 6.54728 15.4101L6.54728 15.4101L4.44865 10.0469C3.18138 6.80831 2.54774 5.18901 3.36837 4.36837C4.18901 3.54774 5.80831 4.18138 9.0469 5.44865Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21 18.5L14 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cursor-remove-selection02
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for cursor-remove-selection02 (hugeicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cursor-remove-selection02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(4.5px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(3px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cursor-remove-selection02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cursor-remove-selection02 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cursor-remove-selection02 3s ease-in-out infinite alternate;
}
</style>