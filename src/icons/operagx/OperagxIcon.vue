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
      <path d="M24 12.01c0 3.412-1.462 6.674-4.013 8.943A12 12 0 0 1 11.992 24c-.178 0-.385-.019-.563-.019C5.016 23.681 0 18.403 0 11.991 0 5.37 5.372 0 11.99 0h.038c2.944 0 5.775 1.087 7.96 3.047A12.04 12.04 0 0 1 24 12.009zm-9.14 10.443c-2.729-.056-5.279-1.397-7.041-3.684-1.388-1.64-2.203-4.013-2.269-6.516v-.544c.047-2.521.881-4.893 2.269-6.534 1.744-2.269 4.294-3.61 7.012-3.666a10.67 10.67 0 0 0-2.784-.384h-.038c-5.99 0-10.865 4.894-10.865 10.866 0 5.812 4.528 10.584 10.34 10.847a10.087 10.087 0 0 0 3.375-.385zm7.996-10.444c0-3.065-1.303-5.99-3.59-8.053a7.69 7.69 0 0 0-4.228-1.284c-2.447 0-4.754 1.181-6.357 3.244-1.247 1.462-1.969 3.59-2.025 5.83v.526c.056 2.25.778 4.369 2.006 5.812l.02.02c1.602 2.071 3.909 3.252 6.355 3.252a7.69 7.69 0 0 0 4.229-1.284 10.894 10.894 0 0 0 3.59-8.063zm-3.75 0c0 4.05-2.184 7.341-4.912 7.585 2.128-1.388 3.61-4.257 3.61-7.585 0-3.328-1.463-6.197-3.61-7.575 2.728.244 4.912 3.525 4.912 7.575z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: operagx
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for operagx (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-operagx {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-operagx {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-operagx 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-operagx 3s ease-in-out infinite alternate;
}
</style>