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
      <path d="M.738 2.879a.716.716 0 0 0-.738.74v16.762c0 .428.35.74.738.74h22.52a.739.739 0 0 0 .739-.74V3.619c.039-.428-.31-.74-.738-.74Zm6.614 6.34c1.167 0 2.1.935 2.1 2.101 0 .234-.04.427-.079.621h12.058v1.868h-.973v2.527h-.97v-1.283h-.935v1.283h-.972v-2.527H9.373c.04.194.079.428.079.623a2.09 2.09 0 0 1-2.1 2.1c-1.011 0-1.83-.7-2.063-1.634a3.388 3.388 0 0 1-.62.077 2.092 2.092 0 0 1-2.102-2.1c0-1.167.934-2.1 2.101-2.1.234 0 .427 0 .621.079.234-.934 1.052-1.635 2.063-1.635Zm0 1.168c-.545 0-.973.428-.934.933 0 .506.428.932.934.932a.945.945 0 0 0 .933-.932.947.947 0 0 0-.933-.933zM4.668 11.94a.947.947 0 0 0-.933.934c0 .506.428.934.933.934a.947.947 0 0 0 .934-.934.947.947 0 0 0-.934-.934zm2.684 1.518a.947.947 0 0 0-.934.934c0 .505.428.933.934.933a.947.947 0 0 0 .933-.933.947.947 0 0 0-.933-.934z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: coppel
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for coppel (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-coppel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-coppel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-coppel 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-coppel 3s ease-in-out infinite alternate;
}
</style>