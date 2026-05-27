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
      <path d="M73.3 192C100.8 99.5 186.5 32 288 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-65.6 0-122 39.5-146.7 96L272 192c13.3 0 24 10.7 24 24s-10.7 24-24 24l-143.2 0c-.5 5.3-.8 10.6-.8 16s.3 10.7 .8 16L272 272c13.3 0 24 10.7 24 24s-10.7 24-24 24l-130.7 0c24.7 56.5 81.1 96 146.7 96l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-101.5 0-187.2-67.5-214.7-160L40 320c-13.3 0-24-10.7-24-24s10.7-24 24-24l24.6 0c-.7-10.5-.7-21.5 0-32L40 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l33.3 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: euro-sign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for euro-sign (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-euro-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-euro-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-euro-sign 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-euro-sign 3s ease-in-out infinite alternate;
}
</style>