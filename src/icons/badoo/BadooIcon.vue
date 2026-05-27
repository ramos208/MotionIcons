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
      <path d="M17.68 2.809c3.392 0 6.32 2.788 6.32 6.228 0 6.71-6.6 12.158-12 12.158S0 15.748 0 9.037c0-3.44 2.928-6.228 6.32-6.228 4.128 0 5.578 3.179 5.68 3.411a6.079 6.079 0 0 1 5.67-3.411zm1.078 6.488V9.11h-2.38v.186c0 2.352-1.97 4.276-4.378 4.276-2.417 0-4.369-1.924-4.369-4.276V9.11H5.233v.186c0 1.766.697 3.42 1.98 4.666a6.795 6.795 0 0 0 4.778 1.933 6.797 6.797 0 0 0 4.777-1.933 6.488 6.488 0 0 0 1.98-4.666Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: badoo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for badoo (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-badoo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-badoo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-badoo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-badoo 3s ease-in-out infinite alternate;
}
</style>