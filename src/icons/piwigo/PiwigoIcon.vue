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
      <path d="M16.712 12.777A4.713 4.713 0 0 1 12 17.49a4.713 4.713 0 0 1-4.713-4.713A4.713 4.713 0 0 1 12 8.066a4.713 4.713 0 0 1 4.712 4.711zm2.4-12.776c-2.572.058-2.358 1.544-8.237 1.555h-4.15A5.947 5.947 0 0 0 .777 7.503v10.55A5.947 5.947 0 0 0 6.725 24h10.55a5.947 5.947 0 0 0 5.948-5.947V4.081l-.008-.018c0-.014.004-.028.004-.043 0-2.227-1.88-4.02-4.108-4.02zm.09 2.545a1.409 1.409 0 0 1 1.407 1.41A1.409 1.409 0 0 1 19.2 5.364a1.409 1.409 0 0 1-1.41-1.408 1.409 1.409 0 0 1 1.41-1.41zM12 6.12a6.656 6.656 0 0 1 6.656 6.655A6.656 6.656 0 0 1 12 19.434a6.656 6.656 0 0 1-6.656-6.657A6.656 6.656 0 0 1 12 6.122z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: piwigo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for piwigo (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-piwigo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-piwigo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-piwigo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-piwigo 3s ease-in-out infinite alternate;
}
</style>