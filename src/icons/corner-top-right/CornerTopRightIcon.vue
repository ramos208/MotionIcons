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
      <path d="M20.01 16.01L20 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.01 20.01L20 19.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.01 20.01L16 19.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.01 20.01L12 19.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.00999 20.01L7.99999 19.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00999 20.01L3.99999 19.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00999 16.01L3.99999 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00999 12.01L3.99999 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00999 8.01L3.99999 7.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00999 4.01L3.99999 3.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.00999 4.01L7.99999 3.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.01 12V4H12.01V12H20.01Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: corner-top-right
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for corner-top-right (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-corner-top-right {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-corner-top-right {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-corner-top-right 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-corner-top-right 3s ease-in-out infinite alternate;
}
</style>