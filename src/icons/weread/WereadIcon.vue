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
      <path d="M5.12 0A5.11 5.11 0 0 0 0 5.12v13.76A5.11 5.11 0 0 0 5.12 24h13.76A5.11 5.11 0 0 0 24 18.88V5.12A5.11 5.11 0 0 0 18.88 0Zm12.954 10.24c2.04 0 3.694 1.39 3.694 3.107 0 1.716-1.653 3.107-3.694 3.107-.43 0-.842-.063-1.226-.177a.37.37 0 0 0-.29.032l-.794.463a.123.123 0 0 1-.18-.14l.177-.668a.25.25 0 0 0-.098-.267c-.785-.57-1.284-1.41-1.284-2.35 0-1.716 1.655-3.107 3.695-3.107m-1.231 1.616a.495.495 0 0 0-.493.497c0 .274.22.497.493.497a.495.495 0 0 0 .492-.497.495.495 0 0 0-.492-.497m2.462 0a.495.495 0 0 0-.492.497c0 .274.22.497.492.497a.495.495 0 0 0 .493-.497.495.495 0 0 0-.493-.497M18.08 18.88h5.12c0 2.4-1.92 4.32-4.32 4.32H5.12C2.72 23.2.8 21.28.8 18.88h5.12c1.6 0 3.914-.012 5.28 1.28.489.462.677 1.17.798 1.17.12 0 .292-.671.802-1.17 1.305-1.275 3.215-1.28 5.28-1.28"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: weread
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for weread (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-weread {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-weread {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-weread 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-weread 3s ease-in-out infinite alternate;
}
</style>