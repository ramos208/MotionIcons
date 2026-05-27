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
      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.7456 10C10.7456 9.05719 10.7456 8.58579 10.4347 8.29289C10.1239 8 9.62351 8 8.62281 8C7.62211 8 7.12176 8 6.81088 8.29289C6.5 8.58579 6.5 9.05719 6.5 10C6.5 10.9428 6.5 11.4142 6.81088 11.7071C7.12176 12 7.62211 12 8.62281 12C9.62351 12 10.1239 12 10.4347 11.7071C10.7456 11.4142 10.7456 10.9428 10.7456 10ZM10.7456 10L10.7456 12.0687C10.7456 13.9022 9.41052 15.4571 7.5614 16M17.5 10C17.5 9.05719 17.5 8.58579 17.1891 8.29289C16.8782 8 16.3779 8 15.3772 8C14.3765 8 13.8761 8 13.5653 8.29289C13.2544 8.58579 13.2544 9.05719 13.2544 10C13.2544 10.9428 13.2544 11.4142 13.5653 11.7071C13.8761 12 14.3765 12 15.3772 12C16.3779 12 16.8782 12 17.1891 11.7071C17.5 11.4142 17.5 10.9428 17.5 10ZM17.5 10V12.0687C17.5 13.9022 16.1649 15.4571 14.3158 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: quote-down-square
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for quote-down-square (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-quote-down-square {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, 6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, 4px) skew(0deg); }
}

@keyframes motion-ai-idle-quote-down-square {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-quote-down-square 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-quote-down-square 3s ease-in-out infinite alternate;
}
</style>