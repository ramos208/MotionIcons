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
      <path d="M22.109 7.951l1.485 2.464a3.507 3.507 0 010 3.275l-4.505 7.717a3.333 3.333 0 01-2.94 1.793H7.83a3.335 3.335 0 01-2.94-1.793l-1.555-2.632 6.139-5.695 4.447 2.578a1.093 1.093 0 001.456-.198zm-13.39.628L1.99 16.15.406 13.725a3.495 3.495 0 010-3.27L5.158 2.59A3.338 3.338 0 018.1.8h8.008c1.228 0 2.357.687 2.942 1.79l1.616 2.722-6.017 5.592-4.432-2.574a1.098 1.098 0 00-1.499.248z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: baremetrics
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for baremetrics (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-baremetrics {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-baremetrics {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-baremetrics 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-baremetrics 3s ease-in-out infinite alternate;
}
</style>