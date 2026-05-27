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
      <path d="M20 22H6C4.89543 22 4 21.1046 4 20M4 20C4 18.8955 4.89543 18 6 18H20V6.00004C20 4.11442 20 3.17161 19.4142 2.58582C19.0876 2.25923 18.6501 2.11472 18 2.05078M4 20V8.00003C4 5.17161 4 3.75739 4.87868 2.87871C5.36857 2.38883 6.02491 2.17207 7 2.07615" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.5 18C19.5 18 18.5 18.7628 18.5 20C18.5 21.2372 19.5 22 19.5 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 4.99998C9 4.99998 11.2095 2.00001 12 2C12.7906 1.99999 15 5 15 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 9.99998C9 9.99998 11.2095 7.00001 12 7C12.7906 6.99999 15 10 15 10M12 8V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: book-up-two
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for book-up-two (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-book-up-two {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-book-up-two {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-book-up-two 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-book-up-two 3s ease-in-out infinite alternate;
}
</style>