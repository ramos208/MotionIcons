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
      <path d="M0 20V4h5.4c1.6 0 2.8.3 3.8 1 .9.7 1.4 1.6 1.4 2.7 0 .8-.3 1.6-.8 2.3-.6.7-1.3 1.2-2.2 1.4 1.1.1 2 .6 2.7 1.3.7.7 1 1.6 1 2.6 0 1.4-.5 2.6-1.5 3.4-1 .9-2.4 1.3-4.1 1.3H0zM3 6.4v4.2h1.7c.8 0 1.5-.2 1.9-.6.4-.4.7-1 .7-1.7 0-1.3-.9-1.9-2.7-1.9H3zM3 13v4.7h2.1c.9 0 1.6-.2 2.1-.6.5-.5.8-1.1.8-1.9C8 13.7 7 13 5 13H3zm9.7 7V4h5.4c1.6 0 2.8.3 3.8 1 .9.7 1.4 1.6 1.4 2.7 0 .8-.3 1.6-.8 2.3-.6.7-1.3 1.2-2.2 1.4 1.1.1 2 .6 2.7 1.3.7.7 1 1.6 1 2.6 0 1.4-.5 2.6-1.5 3.4-1 .9-2.4 1.3-4.1 1.3h-5.7zm3-13.6v4.2h1.7c.8 0 1.5-.2 1.9-.6s.7-1 .7-1.7c0-1.3-.9-1.9-2.7-1.9h-1.6zm0 6.6v4.7h2.1c.9 0 1.6-.2 2.1-.6.5-.4.7-1 .7-1.8 0-1.5-1-2.3-3-2.3h-1.9z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bookbub
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bookbub (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bookbub {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bookbub {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bookbub 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bookbub 3s ease-in-out infinite alternate;
}
</style>