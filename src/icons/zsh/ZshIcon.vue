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
      <path d="M11.415 5.038a.58.58 0 0 0-.543.197L.135 18.021a.58.58 0 0 0 .071.814.58.58 0 0 0 .815-.07L11.757 5.979a.58.58 0 0 0-.07-.815.6.6 0 0 0-.272-.126m-8.113.317a3.133 3.133 0 0 0-3.12 3.12 3.13 3.13 0 0 0 3.12 3.119A3.133 3.133 0 0 0 6.42 8.475a3.13 3.13 0 0 0-3.119-3.119m0 1.806a1.3 1.3 0 0 1 1.314 1.313 1.3 1.3 0 0 1-1.314 1.312A1.3 1.3 0 0 1 1.99 8.475a1.3 1.3 0 0 1 1.312-1.314m5.253 5.253a3.13 3.13 0 0 0-3.119 3.119 3.13 3.13 0 0 0 3.12 3.118 3.133 3.133 0 0 0 3.118-3.12 3.133 3.133 0 0 0-3.119-3.118m0 1.805a1.3 1.3 0 0 1 1.313 1.314c0 .735-.577 1.312-1.312 1.312a1.3 1.3 0 0 1-1.314-1.312 1.3 1.3 0 0 1 1.313-1.314m7.201 3.276a.58.58 0 0 0-.578.578.58.58 0 0 0 .578.578h7.666a.58.58 0 0 0 .579-.578.58.58 0 0 0-.579-.578Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: zsh
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for zsh (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-zsh {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-zsh {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-zsh 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-zsh 3s ease-in-out infinite alternate;
}
</style>