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
      <path d="M240 32c79.5 0 144 64.5 144 144l0 65.2c18.8-10.9 40.7-17.2 64-17.2 70.7 0 128 57.3 128 128S518.7 480 448 480c-35.8 0-68.2-14.7-91.4-38.4-28.8 42.5-77.4 70.4-132.6 70.4-17.7 0-32-14.3-32-32s14.3-32 32-32c53 0 96-43 96-96l0-176c0-44.2-35.8-80-80-80s-80 35.8-80 80l0 208c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224c0-35.3-28.7-64-64-64-17.7 0-32-14.3-32-32S14.3 32 32 32C72.6 32 108.8 51 132.2 80.5 158.6 50.7 197.1 32 240 32zM448 288a64 64 0 1 0 0 128 64 64 0 1 0 0-128z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: capricorn
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for capricorn (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-capricorn {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-capricorn {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-capricorn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-capricorn 3s ease-in-out infinite alternate;
}
</style>