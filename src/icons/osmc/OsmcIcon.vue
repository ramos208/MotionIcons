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
      <path d="M22.768 12.002c0 5.935-4.829 10.768-10.768 10.768-5.935-.005-10.763-4.833-10.763-10.768 0-5.94 4.828-10.767 10.768-10.767 5.934 0 10.763 4.828 10.763 10.767m.292-4.673a11.913 11.913 0 0 0-2.57-3.813 11.963 11.963 0 0 0-3.813-2.57A11.857 11.857 0 0 0 12.005 0a11.926 11.926 0 0 0-8.486 3.516A11.963 11.963 0 0 0 .948 7.33C.318 8.811.002 10.38.002 12.002s.316 3.192.942 4.673a11.913 11.913 0 0 0 2.57 3.813A11.963 11.963 0 0 0 12 24c1.619 0 3.191-.32 4.673-.942a11.913 11.913 0 0 0 3.813-2.57 11.963 11.963 0 0 0 3.512-8.486c0-1.623-.311-3.191-.938-4.673M8.566 14.631V9.263l2.574 2.684-2.574 2.684zM7.327 6.296v11.422l8.116-8.455v6.767c0 .343.279.618.617.618a.622.622 0 0 0 .622-.622v-9.74l-4.677 4.77-4.678-4.76z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: osmc
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for osmc (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-osmc {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-osmc {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-osmc 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-osmc 3s ease-in-out infinite alternate;
}
</style>