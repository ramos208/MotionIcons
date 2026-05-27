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
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 7.188 10.98l3.339-9.459a2.118 2.118 0 1 1 2.946 0l3.339 9.46A12 12 0 0 0 24 12 12 12 0 0 0 12 0m0 2.824a9.177 9.177 0 0 1 4.969 16.892l-.486-1.376a7.765 7.765 0 1 0-8.967 0l-.485 1.376A9.177 9.177 0 0 1 12 2.824m0 3.529a5.647 5.647 0 0 1 3.739 9.879l-.521-1.478a4.235 4.235 0 1 0-6.436 0l-.522 1.478A5.647 5.647 0 0 1 12 6.353m0 8.298-1.618 4.584a7.4 7.4 0 0 0 3.236 0zm-2.21 6.258-.937 2.656A12 12 0 0 0 12 24a12 12 0 0 0 3.146-.435l-.937-2.656a9.2 9.2 0 0 1-2.209.267 9.2 9.2 0 0 1-2.21-.267"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: antennapod
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for antennapod (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-antennapod {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-antennapod {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-antennapod 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-antennapod 3s ease-in-out infinite alternate;
}
</style>