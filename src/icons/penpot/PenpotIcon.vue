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
      <path d="M7.654 0 5.13 3.554v2.01L2.934 6.608l-.02-.009v13.109l8.563 4.045L12 24l.523-.247 8.563-4.045V6.6l-.017.008-2.196-1.045V3.555l-.077-.108L16.349.001l-2.524 3.554v.004L11.989.973l-1.823 2.566-.065-.091zm.447 2.065.976 1.374H6.232l.964-1.358zm8.694 0 .976 1.374h-2.845l.965-1.358zm-4.36.971.976 1.375h-2.845l.965-1.359zM5.962 4.132h1.35v4.544l-1.35-.638Zm2.042 0h1.343v5.506l-1.343-.635zm6.652 0h1.35V9l-1.35.637V4.132zm2.042 0h1.343v3.905l-1.343.634zm-6.402.972h1.35v5.62l-1.35-.638zm2.042 0h1.343v4.993l-1.343.634zm6.534 1.493 1.188.486-1.188.561zM5.13 6.6v1.047l-1.187-.561ZM3.96 8.251l7.517 3.55v10.795l-7.516-3.55zm16.08 0v10.794l-7.517 3.55V11.802z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: penpot
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for penpot (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-penpot {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-penpot {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-penpot 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-penpot 3s ease-in-out infinite alternate;
}
</style>