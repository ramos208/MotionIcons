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
      <path d="m2.677 12.923 3.768.011 1.949 3.369-1.926 3.323H2.666L.727 16.292l1.95-3.369Zm-.004-8.6 3.761.011 1.944 3.367-1.922 3.326H2.662L.727 7.69l1.946-3.367Zm14.882 0 3.768.011 1.95 3.367-1.928 3.326h-3.801L15.606 7.69l1.949-3.367Zm0 8.6 3.768.011 1.95 3.369-1.928 3.323h-3.802l-1.937-3.334 1.949-3.369Zm-7.456 4.373 3.767.011 1.951 3.368L13.889 24h-3.801l-1.939-3.336 1.95-3.368Zm0-17.296 3.767.011 1.951 3.369-1.928 3.324h-3.801L8.149 3.368 10.099 0Zm0 8.628 3.767.011 1.951 3.368-1.928 3.325h-3.801l-1.939-3.336 1.95-3.368Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: miraheze
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for miraheze (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-miraheze {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-miraheze {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-miraheze 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-miraheze 3s ease-in-out infinite alternate;
}
</style>