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
      <path d="M12.571 5.714a5.714 5.714 0 1 1 11.43 0 5.714 5.714 0 0 1-11.43 0zm2.264 5.165l-3.502 3.502c2.015-1.488 4.48-2.31 6.953-2.31 1.155 0 2.307.182 3.428.53v-1.709a6.176 6.176 0 0 1-3.428 1.037 6.177 6.177 0 0 1-3.45-1.05zm6.88 11.407V13.12a11.074 11.074 0 0 0-3.43-.55 11.25 11.25 0 0 0-6.731 2.265c-.425.34-.697.863-.697 1.45V24H20a1.72 1.72 0 0 0 1.714-1.714zM13.12 9.165L.001 22.285V4a1.72 1.72 0 0 1 1.713-1.714h11.394a6.176 6.176 0 0 0-1.037 3.428c0 1.276.388 2.463 1.05 3.45zm-5.246-1.95a2.7 2.7 0 0 0-.077-.644h-2.94v1.142h1.69c.001.303-.228.755-.625 1.025-.258.176-.606.298-1.066.298-.818 0-1.512-.552-1.76-1.295a1.887 1.887 0 0 1 0-1.196c.248-.743.942-1.295 1.76-1.295.6 0 .987.268 1.19.458l.913-.889A3.018 3.018 0 0 0 4.857 4a3.143 3.143 0 1 0 0 6.287c.848 0 1.563-.279 2.083-.759.593-.547.935-1.356.935-2.313zm2.482 9.07c0-.511.17-.995.471-1.399L1.714 24h8.643v-7.714z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: googlestreetview
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for googlestreetview (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-googlestreetview {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-googlestreetview {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-googlestreetview 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-googlestreetview 3s ease-in-out infinite alternate;
}
</style>