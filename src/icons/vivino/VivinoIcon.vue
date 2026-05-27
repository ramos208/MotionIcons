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
      <path d="M12.476 18.034c0-1.087.889-1.989 1.988-1.989 1.1 0 1.989.902 1.989 1.989 0 1.1-.89 1.989-1.989 1.989-1.1 0-1.988-.89-1.988-1.99M12.043 24c-1.1 0-1.988-.902-1.988-1.989 0-1.099.889-1.988 1.988-1.988 1.087 0 1.989.889 1.989 1.988A2.003 2.003 0 0112.043 24M5.2 14.007c0-1.087.89-1.988 1.989-1.988 1.087 0 1.989.901 1.989 1.988 0 1.1-.902 1.989-1.99 1.989-1.098 0-1.988-.89-1.988-1.989m4.385-5.892c1.1 0 1.989.902 1.989 1.989 0 1.1-.89 1.976-1.989 1.976-1.1 0-1.988-.877-1.988-1.976 0-1.087.889-1.989 1.988-1.989m2.384-4.187c1.1 0 1.989.89 1.989 1.989 0 1.087-.89 1.988-1.989 1.988A2.003 2.003 0 019.98 5.917c0-1.1.902-1.99 1.99-1.99M14.401 0c1.1 0 1.99.89 1.99 1.989 0 1.087-.89 1.988-1.99 1.988a2.003 2.003 0 01-1.988-1.988c0-1.1.901-1.989 1.988-1.989M11.6 18.034c0 1.1-.89 1.989-1.99 1.989a1.995 1.995 0 01-1.988-1.99c0-1.086.902-1.988 1.989-1.988 1.1 0 1.989.902 1.989 1.989m-1.544-4.027c0-1.087.889-1.988 1.988-1.988 1.087 0 1.989.901 1.989 1.988 0 1.1-.902 1.989-1.989 1.989-1.1 0-1.988-.89-1.988-1.989m4.385-1.927c-1.1 0-1.99-.877-1.99-1.976 0-1.087.89-1.989 1.99-1.989 1.099 0 1.988.902 1.988 1.989 0 1.1-.89 1.976-1.988 1.976m4.36 1.927c0 1.1-.89 1.989-1.989 1.989-1.1 0-1.989-.89-1.989-1.989 0-1.087.89-1.988 1.99-1.988 1.098 0 1.988.901 1.988 1.988Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: vivino
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for vivino (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-vivino {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-vivino {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-vivino 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-vivino 3s ease-in-out infinite alternate;
}
</style>