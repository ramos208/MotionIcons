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
      <path d="M17 10L7 10C6.06812 10 5.60218 10 5.23463 9.84776C4.74458 9.64477 4.35523 9.25542 4.15224 8.76537C4 8.39782 4 7.93188 4 7C4 6.06812 4 5.60218 4.15224 5.23463C4.35523 4.74458 4.74458 4.35523 5.23463 4.15224C5.60218 4 6.06812 4 7 4H17C17.9319 4 18.3978 4 18.7654 4.15224C19.2554 4.35523 19.6448 4.74458 19.8478 5.23463C20 5.60218 20 6.06812 20 7C20 7.93188 20 8.39783 19.8478 8.76537C19.6448 9.25542 19.2554 9.64477 18.7654 9.84776C18.3978 10 17.9319 10 17 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17 20L7 20C6.06812 20 5.60218 20 5.23463 19.8478C4.74458 19.6448 4.35523 19.2554 4.15224 18.7654C4 18.3978 4 17.9319 4 17C4 16.0681 4 15.6022 4.15224 15.2346C4.35523 14.7446 4.74458 14.3552 5.23463 14.1522C5.60218 14 6.06812 14 7 14H17C17.9319 14 18.3978 14 18.7654 14.1522C19.2554 14.3552 19.6448 14.7446 19.8478 15.2346C20 15.6022 20 16.0681 20 17C20 17.9319 20 18.3978 19.8478 18.7654C19.6448 19.2554 19.2554 19.6448 18.7654 19.8478C18.3978 20 17.9319 20 17 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: view-agenda
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for view-agenda (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-view-agenda {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-view-agenda {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-view-agenda 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-view-agenda 3s ease-in-out infinite alternate;
}
</style>