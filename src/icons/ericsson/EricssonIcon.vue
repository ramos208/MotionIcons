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
      <path d="M20.76 1.593A2.36 2.36 0 0 0 19.572.225c-.54-.27-1.188-.336-2.256.02L5.187 4.29c-1.068.357-1.548.795-1.818 1.338a2.36 2.36 0 0 0 1.059 3.174c.54.27 1.188.336 2.256-.021l12.129-4.044c1.068-.354 1.548-.795 1.818-1.338a2.35 2.35 0 0 0 .13-1.806zm0 7.485a2.36 2.36 0 0 0-1.188-1.368c-.54-.27-1.188-.336-2.256.021L5.187 11.775c-1.068.357-1.548.795-1.818 1.338a2.36 2.36 0 0 0 1.059 3.174c.54.27 1.188.336 2.256-.021l12.129-4.041c1.068-.357 1.548-.795 1.818-1.341a2.35 2.35 0 0 0 .13-1.806zm0 7.488a2.36 2.36 0 0 0-1.188-1.368c-.54-.27-1.188-.336-2.256.021L5.187 19.263c-1.068.357-1.548.795-1.818 1.338a2.36 2.36 0 0 0 1.059 3.174c.54.27 1.188.336 2.256-.02l12.129-4.045c1.068-.354 1.548-.795 1.818-1.338a2.35 2.35 0 0 0 .13-1.806z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ericsson
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ericsson (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ericsson {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ericsson {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ericsson 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ericsson 3s ease-in-out infinite alternate;
}
</style>