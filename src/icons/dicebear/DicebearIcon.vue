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
      <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v21A1.5 1.5 0 0 0 1.5 24h12.84a.99.99 0 0 0 .87-1.468c-.986-1.777-1.929-3.346-2.523-4.024-1.69-1.933-9.626-.13-9.877-6.435-.016-.415.262-.777.655-.908l3.872-1.29c.226-.076.418-.23.547-.43.365-.569 1.182-1.768 1.928-2.375.707-.574 1.85-1.301 3.936-1.636.417-.067.749-.379.952-.75.488-.89 1.457-1.432 2.478-1.285 1.332.192 2.249 1.483 2.048 2.883a.3.3 0 0 0 .094.276c.889.794 1.829 1.894 2.759 3.137.596.797 1.921.393 1.921-.602V1.5A1.5 1.5 0 0 0 22.5 0zm9.375 9.625a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 1 0-2.5 0"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dicebear
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dicebear (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dicebear {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dicebear {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dicebear 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dicebear 3s ease-in-out infinite alternate;
}
</style>