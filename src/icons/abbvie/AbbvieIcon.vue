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
      <path d="M23.186 20.17c-1.533 0-2.14-.612-2.347-1.838l-.406-1.74c-.413.72-2.453 3.579-6.945 3.579H8.89C1.94 20.17 0 15.467 0 12c0-3.885 2.347-8.17 8.884-8.17h4.905c5.005 0 7.759 2.853 8.372 6.431.512 2.96 1.839 9.91 1.839 9.91zM13.076 6.378h-3.88c-4.698 0-6.231 2.965-6.231 5.623 0 2.653 1.533 5.618 6.236 5.618h3.875c4.904 0 6.236-3.065 6.236-5.618 0-2.246-1.231-5.618-6.236-5.618z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: abbvie
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for abbvie (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-abbvie {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-abbvie {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-abbvie 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-abbvie 3s ease-in-out infinite alternate;
}
</style>