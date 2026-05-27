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
      <path d="M17.928 0H6.072A6.076 6.076 0 0 0 0 6.073v11.854A6.076 6.076 0 0 0 6.073 24h11.854A6.076 6.076 0 0 0 24 17.927V6.073A6.076 6.076 0 0 0 17.927 0m1.42 7.013a1.4 1.4 0 0 1-.26.39c-.11.11-.24.2-.39.26-.14.06-.3.09-.45.09-2.511 0-3.482 1.53-4.792 4.042l-.8 1.51c-1.231 2.382-2.762 5.323-6.894 5.323-.31 0-.62-.12-.84-.35a1.188 1.188 0 0 1 .84-2.031c2.511 0 3.482-1.53 4.792-4.042l.8-1.51c1.231-2.382 2.762-5.323 6.894-5.323q.24 0 .45.09c.14.06.27.15.39.26.11.11.2.24.26.39a1.17 1.17 0 0 1 0 .9"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lottiefiles
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for lottiefiles (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-lottiefiles {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lottiefiles {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lottiefiles 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-lottiefiles 3s ease-in-out infinite alternate;
}
</style>