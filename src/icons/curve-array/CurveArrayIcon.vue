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
      <path d="M5.16405 17C5.45344 15.9512 5.83338 14.9485 6.29589 14M11.5 7.79447C12.2822 7.22779 13.1177 6.72612 14 6.29589" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 22C3.11929 22 2 20.8807 2 19.5C2 18.1193 3.11929 17 4.5 17C5.88071 17 7 18.1193 7 19.5C7 20.8807 5.88071 22 4.5 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 12C8.11929 12 7 10.8807 7 9.5C7 8.11929 8.11929 7 9.5 7C10.8807 7 12 8.11929 12 9.5C12 10.8807 10.8807 12 9.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.5 7C18.1193 7 17 5.88071 17 4.5C17 3.11929 18.1193 2 19.5 2C20.8807 2 22 3.11929 22 4.5C22 5.88071 20.8807 7 19.5 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: curve-array
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for curve-array (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-curve-array {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-curve-array {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-curve-array 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-curve-array 3s ease-in-out infinite alternate;
}
</style>