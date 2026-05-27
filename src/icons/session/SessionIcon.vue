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
      <path d="m19.431 12.193-4.53-2.51h3.071a4.847 4.847 0 0 0 4.842-4.841A4.848 4.848 0 0 0 17.972 0H7.252a6.073 6.073 0 0 0-6.066 6.066 6.566 6.566 0 0 0 3.383 5.741l4.53 2.51H6.028a4.847 4.847 0 0 0-4.842 4.841A4.848 4.848 0 0 0 6.028 24h10.72a6.073 6.073 0 0 0 6.066-6.066 6.568 6.568 0 0 0-3.383-5.741zm-14.136-1.7a5.065 5.065 0 0 1-2.607-4.309C2.627 3.61 4.79 1.5 7.367 1.5h10.508c1.797 0 3.345 1.378 3.434 3.173a3.345 3.345 0 0 1-3.337 3.51H11.92a.67.67 0 0 0-.67.67l-.001 4.94zM16.633 22.5H6.124c-1.797 0-3.345-1.378-3.434-3.173a3.345 3.345 0 0 1 3.337-3.51h6.053c.37 0 .67-.3.67-.67v-4.94l5.954 3.3a5.065 5.065 0 0 1 2.608 4.309c.06 2.575-2.103 4.684-4.679 4.684"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: session
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for session (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-session {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-session {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-session 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-session 3s ease-in-out infinite alternate;
}
</style>