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
      <path d="M9 21C9 20.0681 9 19.6022 8.84776 19.2346C8.64477 18.7446 8.25542 18.3552 7.76537 18.1522C7.39782 18 6.93188 18 6 18C5.06812 18 4.60218 18 4.23463 18.1522C3.74458 18.3552 3.35523 18.7446 3.15224 19.2346C3 19.6022 3 20.0681 3 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 21C15 20.0681 15 19.6022 14.8478 19.2346C14.6448 18.7446 14.2554 18.3552 13.7654 18.1522C13.3978 18 12.9319 18 12 18C11.0681 18 10.6022 18 10.2346 18.1522C9.74458 18.3552 9.35523 18.7446 9.15224 19.2346C9 19.6022 9 20.0681 9 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21 21C21 20.0681 21 19.6022 20.8478 19.2346C20.6448 18.7446 20.2554 18.3552 19.7654 18.1522C19.3978 18 18.9319 18 18 18C17.0681 18 16.6022 18 16.2346 18.1522C15.7446 18.3552 15.3552 18.7446 15.1522 19.2346C15 19.6022 15 20.0681 15 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 3C14 7.4 17.6 11 22 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 3C19 8 22 11 22 11C22 11 20 12 20 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 3C10 7.4 6.4 11 2 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 3C5 8 2 11 2 11C2 11 4 12 4 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: theater
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for theater (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-theater {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-theater {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-theater 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-theater 3s ease-in-out infinite alternate;
}
</style>