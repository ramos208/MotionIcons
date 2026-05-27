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
      <path d="M6 0h16v7.996a.7.7 0 0 1-.288.566l-2.173 1.58a.7.7 0 0 0-.289.565v.586c0 .224.107.434.289.566l1.895 1.377a.7.7 0 0 1 .254.783l-.649 1.997a.7.7 0 0 1-.665.484H18.03a.7.7 0 0 0-.566.288l-.344.474a.7.7 0 0 0-.1.627l.724 2.229a.7.7 0 0 1-.254.782l-1.699 1.234a.7.7 0 0 1-.823 0l-1.895-1.377a.7.7 0 0 0-.628-.099l-.556.18a.7.7 0 0 0-.45.45l-.724 2.228a.7.7 0 0 1-.665.484H2V4zm12 8V4H6v16h4v-5h4v-4h-4V8z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: freecad
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for freecad (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-freecad {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-freecad {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-freecad 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-freecad 3s ease-in-out infinite alternate;
}
</style>