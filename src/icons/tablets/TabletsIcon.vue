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
      <path d="M495.3 76.6c-4.6-8.7-16.3-9.7-23.3-2.7L297.9 248c-7 7-6 18.7 2.7 23.3 20.1 10.7 43 16.7 67.4 16.7 79.5 0 144-64.5 144-144 0-24.3-6-47.3-16.7-67.4zM240.7 211.4c4.6 8.7 16.3 9.7 23.3 2.7L438.1 40c7-7 6-18.7-2.7-23.3-20.1-10.7-43-16.7-67.4-16.7-79.5 0-144 64.5-144 144 0 24.3 6 47.3 16.7 67.4zM144 224C79.2 224 24.4 266.8 6.3 325.6 3.4 335.1 11 344 20.9 344l246.2 0c9.9 0 17.5-8.9 14.6-18.4-.9-3-1.9-5.9-3-8.7-37.4-18.1-68-48-87-84.8-14.9-5.2-30.9-8.1-47.6-8.1zM281.7 410.4c2.9-9.5-4.7-18.4-14.6-18.4L20.9 392C11 392 3.4 400.9 6.3 410.4 24.4 469.2 79.2 512 144 512s119.6-42.8 137.7-101.6z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tablets
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tablets (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tablets {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tablets {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tablets 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tablets 3s ease-in-out infinite alternate;
}
</style>