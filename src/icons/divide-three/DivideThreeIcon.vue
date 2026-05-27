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
      <path d="M12 21V17C12 14.2386 9.76142 12 7 12H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 21V17C12 14.2386 14.2386 12 17 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 2.00005V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 8C4.4379 9.5621 3.5621 10.4379 2 12C3.5621 13.5621 4.4379 14.4379 6 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6C14.4379 4.4379 13.5621 3.5621 12 2C10.4379 3.5621 9.5621 4.4379 8 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 8C19.5621 9.5621 20.4379 10.4379 22 12C20.4379 13.5621 19.5621 14.4379 18 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: divide-three
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for divide-three (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-divide-three {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-divide-three {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-divide-three 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-divide-three 3s ease-in-out infinite alternate;
}
</style>