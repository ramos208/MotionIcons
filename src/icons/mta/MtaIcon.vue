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
      <path d="M15.171 10.07l-1.293-.109v6.861l-1.926.34-.004-7.371-1.637-.145V6.944l4.86.85zm3.668 5.884l-1.142.198-.134-1-1.113.145-.14 1.1-1.473.26 1.458-8.651 1.385.24zm-1.48-2.492l-.305-2.642h-.068l-.31 2.682zM10.991 24c6.59 0 11.932-5.373 11.932-12 0-6.628-5.342-12-11.932-12C6.86 0 3.22 2.112 1.077 5.323l3.307.583.91 6.965c.003-.012.066-.004.066-.004l.998-6.615 3.309.58v10.735l-2.089.367V13.32s.078-1.987.032-2.327c0 0-.09.002-.092-.005l-1.246 7.18-2.075.366L2.672 10.8l-.092-.007c-.032.28.112 2.707.112 2.707v5.298l-1.364.24C3.498 22.044 7.016 24 10.991 24z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mta
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mta (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mta {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mta {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mta 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mta 3s ease-in-out infinite alternate;
}
</style>