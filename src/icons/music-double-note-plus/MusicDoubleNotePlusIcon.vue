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
      <path d="M17 6.5H20M23 6.5H20M20 6.5V3.5M20 6.5V9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 15.9999V4.99992L14 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 14V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 19H13C14.1046 19 15 18.1046 15 17V14H12C10.8954 14 10 14.8954 10 16V17C10 18.1046 10.8954 19 12 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 21H4C5.10457 21 6 20.1046 6 19V16H3C1.89543 16 1 16.8954 1 18V19C1 20.1046 1.89543 21 3 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: music-double-note-plus
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for music-double-note-plus (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-music-double-note-plus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-music-double-note-plus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-music-double-note-plus 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-music-double-note-plus 3s ease-in-out infinite alternate;
}
</style>