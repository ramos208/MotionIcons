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
      <path d="M0 8.198l4.182 7.604h2.442L8.15 13.07a4.276 4.276 0 0 1 2.054-4.872H7.112l-1.677 3.216-1.706-3.216zm14.342 0a4.24 4.24 0 0 1 1.923 2.206c.784 2.081-.098 4.415-2.145 5.398h2.767l1.564-1.754 1.42 1.754H24l-3.505-4.032 3.088-3.572H19.41l-.952 1.249-.931-1.249zm-2.09 1.596c-.949 0-1.913.69-2.074 1.775a2.132 2.132 0 0 0 2.064 2.483c1.268.01 2.192-1.126 2.156-2.18-.013-1.015-.877-2.08-2.146-2.078z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: vox
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for vox (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-vox {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-vox {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-vox 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-vox 3s ease-in-out infinite alternate;
}
</style>