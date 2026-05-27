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
      <path d="M10.024 0H1.241C.56 0 0 .56 0 1.243v21.514C0 23.44.56 24 1.241 24h21.518A1.24 1.24 0 0 0 24 22.757V1.243C24 .56 23.44 0 22.759 0H11.675v15.592c-.04.775-.29 1.397-.761 1.865-.92.927-2.521 1.049-3.921 1.049-1.891 0-4.432-.244-4.862-2.273l-.06-.508c-.02-.101-.02-.387-.02-1.131V3.965c0-.488.16-.907.51-1.254A1.7 1.7 0 0 1 3.812 2.2l4.611.02.161.041v1.562H3.962c-.12 0-.18.061-.18.142v3.484h3.491v1.599H3.782v6.566c.04 1.15 1.74 1.375 3.181 1.375.64-.021 1.991-.021 2.601-.632.16-.165.32-.471.46-.928V0Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fyle
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for fyle (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fyle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fyle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fyle 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fyle 3s ease-in-out infinite alternate;
}
</style>