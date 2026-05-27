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
      <path d="M12 0C5.4 0 0 4.9 0 10.95 0 17 5.4 21.9 12 21.9c1.4 0 2.85-.25 4.2-.7.15-.05.35 0 .45.1 1 1.35 2.55 2.3 4.25 2.7l.25-.1v-.3a4.65 4.65 0 01.2-5.9C22.9 15.85 24 13.5 24 10.95 24 4.9 18.55 0 12 0zm-.05 5.2c.15 0 .3.1.35.25L13.55 9l3.85.1c.15 0 .3.1.35.2.05.15 0 .3-.15.4L14.55 12l1.1 3.6c.05.15 0 .3-.15.4h-.4l-3.15-2.15L8.8 16h-.4c-.15-.1-.2-.25-.15-.4l1.1-3.6L6.3 9.7c-.15-.1-.2-.25-.15-.4.05-.1.2-.2.35-.2l3.85-.1 1.25-3.55c.05-.15.2-.25.35-.25z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: microdotblog
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for microdotblog (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-microdotblog {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-microdotblog {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-microdotblog 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-microdotblog 3s ease-in-out infinite alternate;
}
</style>