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
      <path d="M23.69 6.605c.507-3.094-1.24-3.944-1.24-3.944s.073 2.519-4.555 3.053C13.787 6.188 0 5.83 0 5.83l4.43 5.081c1.2 1.378 1.838 1.537 3.187 1.633 1.349.09 4.327.058 6.345-.096 2.206-.169 5.35-.888 7.477-2.535 1.09-.843 2.039-2.016 2.25-3.308m.284 3.205s-.556 1.105-3.33 2.853c-1.182.744-3.637 1.535-6.793 1.84-1.705.166-4.842.031-6.188.031-1.354 0-1.974.285-3.187 1.652L0 21.23s1.55.008 2.72.008c1.17 0 8.488.425 11.735-.468 10.546-2.899 9.518-10.96 9.518-10.96Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wistia
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for wistia (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-wistia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wistia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wistia 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-wistia 3s ease-in-out infinite alternate;
}
</style>