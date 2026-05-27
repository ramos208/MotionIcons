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
      <path d="M9.473.191C3.827.191 0 4.271 0 9.917c0 5.317 3.86 9.726 9.472 9.726 5.61 0 9.433-4.409 9.433-9.726C18.905 4.27 15.116.19 9.473.19zm-.002 2.77c3.677 0 5.79 3.422 5.79 6.956 0 3.314-1.785 6.956-5.79 6.956-4.007 0-5.827-3.642-5.827-6.956 0-3.534 2.148-6.956 5.827-6.956zm11.69 12.48a5.47 5.47 0 0 0-2.44.588l.13 1.367c.543-.353 1.204-.66 1.9-.66.695 0 1.34.355 1.34 1.11 0 1.509-2.791 3.84-3.558 4.584v1.38H24v-1.298h-3.36c1.344-1.32 3.1-2.924 3.1-4.668 0-1.614-1.013-2.403-2.58-2.403z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: o2
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for o2 (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-o2 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-o2 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-o2 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-o2 3s ease-in-out infinite alternate;
}
</style>