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
      <path d="M22.0029 3V7.49704C22.0029 7.77482 21.7777 8 21.4999 8V8C21.3 8 21.1201 7.88104 21.034 7.70059C19.4263 4.32948 15.9866 2 12.0029 2C6.81752 2 2.55397 5.94668 2.05225 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 9.99999L17 15C17 16.1046 16.1046 17 15 17H9C7.89543 17 7 16.1046 7 15V10C7 8.89543 7.89543 8 9 8H15C16.1045 8 17 8.89543 17 9.99999Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 11L12 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.05084 21V16.503C2.05084 16.2252 2.27603 16 2.5538 16V16C2.75372 16 2.93363 16.119 3.01969 16.2994C4.62743 19.6705 8.06709 22 12.0508 22C17.2362 22 21.4997 18.0533 22.0015 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: consumable
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for consumable (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-consumable {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-consumable {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-consumable 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-consumable 3s ease-in-out infinite alternate;
}
</style>