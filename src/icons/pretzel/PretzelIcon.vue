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
      <path d="M22.439.03 10.757 6.516a.305.305 0 0 0-.142.236v5.426l2.72 1.704v-5.54a.303.303 0 0 1 .143-.235l6.24-3.48a.286.286 0 0 1 .415.237V15.186a2.807 2.807 0 0 1-1.38 2.555 2.827 2.827 0 0 1-2.909-.02l-6.24-3.951-.03-.03a5.569 5.569 0 0 0-6.245.333 5.524 5.524 0 0 0-1.977 5.917 5.462 5.462 0 0 0 2.662 3.331A5.656 5.656 0 0 0 6.676 24a5.961 5.961 0 0 0 1.597-.236 5.544 5.544 0 0 0 3.43-2.919l.09-.236-2.308-1.474-.237.56a2.792 2.792 0 0 1-1.74 1.478 2.836 2.836 0 0 1-2.189-.236 2.738 2.738 0 0 1-1.36-1.704c-.413-1.42.414-2.949 1.805-3.45.294-.105.604-.153.916-.142a2.834 2.834 0 0 1 1.449.413l6.241 3.977h.03a5.558 5.558 0 0 0 2.898.797 5.968 5.968 0 0 0 1.597-.236 5.572 5.572 0 0 0 2.896-2.049 5.544 5.544 0 0 0 1.067-3.377V.266A.29.29 0 0 0 22.576 0a.293.293 0 0 0-.137.03z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pretzel
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pretzel (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pretzel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pretzel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pretzel 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pretzel 3s ease-in-out infinite alternate;
}
</style>