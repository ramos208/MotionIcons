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
      <path d="M9.3267 3.4848c-.7965.627-.9744 1.6212-1.1644 3.3173-.3653 3.257-.641 5.1982-1.0473 8.658-.199 1.7013.9756 1.9015 2.3646 1.8861h2.8841c.2604.002.3525.1229.3193.3807-.1241.9654-.2579 2.7882-1.19 2.7882L0 20.4933s2.8304-1.032 3.165-3.3723L4.5047 6.234c.2086-1.357 1.2885-2.7492 2.634-2.7492h2.188zm5.5567 17.0306c1.3454 0 2.4254-1.3922 2.634-2.7491L18.857 6.8792c.3346-2.3404 3.165-3.3723 3.165-3.3723L10.529 3.485c-.9321 0-1.0658 1.8228-1.19 2.7882-.0332.2578.0589.3787.3193.3806h2.8841c1.389-.0153 2.5636.185 2.3646 1.8861-.4062 3.46-.682 5.401-1.0473 8.6581-.19 1.696-.3679 2.6903-1.1644 3.3173h2.188zM23.202 6.6528c.259.0006.4964-.2092.5284-.4658l.2662-2.2309c.0313-.2565-.1549-.4715-.4133-.4715h-.8797c-1.0883 0-2.2022 1.7952-2.2559 2.696-.0339.2585.151.4696.4114.4722h2.3429z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ltspice
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ltspice (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ltspice {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ltspice {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ltspice 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ltspice 3s ease-in-out infinite alternate;
}
</style>