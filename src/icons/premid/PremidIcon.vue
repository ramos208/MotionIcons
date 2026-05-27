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
      <path d="M22.46 4.075c.85 0 1.54.69 1.54 1.54v12.77c0 .85-.69 1.54-1.54 1.54H1.54c-.85 0-1.54-.69-1.54-1.54V5.615c0-.85.69-1.54 1.54-1.54ZM3.442 8.485c-.4 0-.725.323-.725.724v5.673a.725.725 0 0 0 1.08.631l5.043-2.836a.725.725 0 0 0 0-1.263L3.797 8.577a.7.7 0 0 0-.355-.093m17.162 5.372h-7.698a.68.68 0 1 0 0 1.358h7.698a.68.68 0 1 0 0-1.358m0-2.446h-7.698a.68.68 0 1 0 0 1.359h7.698a.68.68 0 1 0 0-1.359m-3.17-2.445h-4.528a.68.68 0 1 0 0 1.359h4.528a.68.68 0 1 0 0-1.359"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: premid
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for premid (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-premid {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-premid {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-premid 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-premid 3s ease-in-out infinite alternate;
}
</style>