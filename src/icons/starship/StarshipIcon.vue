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
      <path d="M15.521 9.62a1.057 1.057 0 11-2.115 0 1.057 1.057 0 012.115 0zM24 12c0 6.627-5.373 12-12 12-.35 0-.697-.015-1.04-.044 2.019-1.89 2.548-5.061 2.548-5.061l-3.226-1.053s-1.499 3.23-5.599 3.67A11.98 11.98 0 010 12C0 5.373 5.373 0 12 0s12 5.373 12 12zM8.628 6.606c-1.23-.13-1.885-.83-2.03-2.031-.142 1.159-.77 1.88-2.032 2.031 1.168.227 1.83.918 2.031 2.032-.02-1.154.666-1.825 2.031-2.032zm7.786 5.207c1.11-2.483.392-4.252-1.233-6.246-2.043 1.5-3.759 3.023-3.636 5.149-1.375.675-2.261 1.206-3.147 2.289l2.779 1.103-.368 1.267 3.637 1.062.443-1.181 2.825.651c.014-1.496-.38-3.097-1.3-4.094z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: starship
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for starship (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-starship {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-starship {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-starship 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-starship 3s ease-in-out infinite alternate;
}
</style>