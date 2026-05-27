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
      <path d="M12.031 6h-6v12h11.996v-6l-5.996 5.996Zm6.563 2.309a4.013 4.013 0 0 1-2.371-2.375 4.03 4.03 0 0 1-2.375 2.375 4.04 4.04 0 0 1 2.375 2.375 4.013 4.013 0 0 1 2.37-2.375ZM0 9.602c0-3.364 0-5.043.652-6.325A6.044 6.044 0 0 1 3.277.652C4.56 0 6.238 0 9.602 0h4.796c3.364 0 5.043 0 6.325.652a6.044 6.044 0 0 1 2.625 2.625C24 4.56 24 6.238 24 9.602v4.796c0 3.364 0 5.043-.652 6.325a6.044 6.044 0 0 1-2.625 2.625C19.44 24 17.762 24 14.398 24H9.602c-3.364 0-5.043 0-6.325-.652a6.044 6.044 0 0 1-2.625-2.625C0 19.44 0 17.762 0 14.398Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lunacy
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for lunacy (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-lunacy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lunacy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lunacy 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-lunacy 3s ease-in-out infinite alternate;
}
</style>