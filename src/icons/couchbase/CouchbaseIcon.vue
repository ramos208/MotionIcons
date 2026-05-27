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
      <path d="M20.111 14.104a1.467 1.458 0 0 1-1.235 1.503c-1.422.244-4.385.398-6.875.398s-5.454-.15-6.877-.398c-.814-.14-1.235-.787-1.235-1.503V9.417a1.57 1.56 0 0 1 1.235-1.505 15.72 15.619 0 0 1 2.156-.14.537.533 0 0 1 .523.543v3.303c1.463 0 2.727-.086 4.201-.086 1.474 0 2.727.086 4.196.086V8.342a.535.532 0 0 1 .494-.569h.027a15.995 15.891 0 0 1 2.156.14 1.57 1.56 0 0 1 1.234 1.504zM12.001 0C5.373 0 0 5.374 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.626-5.373-12-12-12z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: couchbase
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for couchbase (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-couchbase {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-couchbase {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-couchbase 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-couchbase 3s ease-in-out infinite alternate;
}
</style>