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
      <path d="M7.77778 20.5C4.84996 19.0788 2.85799 16.2638 2.5 13.0416M16.2222 20.5C19.15 19.0788 21.142 16.2638 21.5 13.0416M5.87777 4.63781C9.37758 1.7874 14.4113 1.7874 17.9111 4.63781" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.125 21.25H12M3.125 8.5H3M21.125 8.5H21M12.25 21.25C12.25 21.3881 12.1381 21.5 12 21.5C11.8619 21.5 11.75 21.3881 11.75 21.25C11.75 21.1119 11.8619 21 12 21C12.1381 21 12.25 21.1119 12.25 21.25ZM3.25 8.5C3.25 8.63807 3.13807 8.75 3 8.75C2.86193 8.75 2.75 8.63807 2.75 8.5C2.75 8.36193 2.86193 8.25 3 8.25C3.13807 8.25 3.25 8.36193 3.25 8.5ZM21.25 8.5C21.25 8.63807 21.1381 8.75 21 8.75C20.8619 8.75 20.75 8.63807 20.75 8.5C20.75 8.36193 20.8619 8.25 21 8.25C21.1381 8.25 21.25 8.36193 21.25 8.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: atom01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for atom01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-atom01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-atom01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-atom01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-atom01 3s ease-in-out infinite alternate;
}
</style>