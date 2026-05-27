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
      <path d="M16 19.5H8C5.17157 19.5 3.75736 19.5 2.87868 18.5586C2 17.6171 2 16.1019 2 13.0714V10.9286C2 7.89811 2 6.38288 2.87868 5.44144C3.75736 4.5 5.17157 4.5 8 4.5H16C18.8284 4.5 20.2426 4.5 21.1213 5.44144C22 6.38288 22 7.89811 22 10.9286V13.0714C22 16.1019 22 17.6171 21.1213 18.5586C20.2426 19.5 18.8284 19.5 16 19.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17 4.5V19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 4.5V19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.625 8.5H4.5M4.75 8.5C4.75 8.63807 4.63807 8.75 4.5 8.75C4.36193 8.75 4.25 8.63807 4.25 8.5C4.25 8.36193 4.36193 8.25 4.5 8.25C4.63807 8.25 4.75 8.36193 4.75 8.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.625 15.5H19.5M19.75 15.5C19.75 15.6381 19.6381 15.75 19.5 15.75C19.3619 15.75 19.25 15.6381 19.25 15.5C19.25 15.3619 19.3619 15.25 19.5 15.25C19.6381 15.25 19.75 15.3619 19.75 15.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: nintendo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for nintendo (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-nintendo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-nintendo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-nintendo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-nintendo 3s ease-in-out infinite alternate;
}
</style>