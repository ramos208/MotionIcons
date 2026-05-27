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
      <path d="M10.152 12a4.037 4.037 0 1 1-8.075 0 4.037 4.037 0 0 1 8.075 0zM17.292.822c-.286-.287-.581-.56-.885-.822l-1.528 1.527C17.872 4.036 19.778 7.8 19.778 12s-1.906 7.964-4.899 10.473L16.407 24c.304-.262.6-.535.886-.822A15.705 15.705 0 0 0 21.923 12c0-4.223-1.644-8.192-4.63-11.178zM13.508 2.9L12.03 4.377a9.642 9.642 0 0 1 0 15.246l1.477 1.477a11.712 11.712 0 0 0 0-18.2zm-2.735 2.735L9.349 7.057c1.61 1.057 2.675 2.878 2.675 4.943s-1.065 3.886-2.675 4.943l1.423 1.422A7.884 7.884 0 0 0 14.005 12a7.884 7.884 0 0 0-3.233-6.365z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wikiquote
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for wikiquote (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-wikiquote {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wikiquote {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wikiquote 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-wikiquote 3s ease-in-out infinite alternate;
}
</style>