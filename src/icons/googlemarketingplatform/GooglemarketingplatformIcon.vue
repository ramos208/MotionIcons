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
      <path d="M12 0C8.926 0 5.852 1.17 3.511 3.511c-4.37 4.371-4.66 11.299-.869 16.01a3.138 3.138 0 0 1 .719-3.314 3.138 3.138 0 0 1 3.672-.56 6.163 6.163 0 0 1 9.324-8.004 2.921 2.921 0 1 0 4.132-4.132A11.968 11.968 0 0 0 12 0zm9.36 4.481a3.138 3.138 0 0 1-.72 3.313 3.138 3.138 0 0 1-3.672.56 6.165 6.165 0 0 1-.61 8.003 2.921 2.921 0 1 0 4.131 4.132c4.37-4.37 4.66-11.298.87-16.008zM5.576 15.501a2.92 2.92 0 0 0-2.922 2.922 2.92 2.92 0 0 0 2.922 2.922 2.92 2.92 0 0 0 2.922-2.922A2.92 2.92 0 0 0 5.577 15.5zm10.07 1.467a6.168 6.168 0 0 1-7.293 0 3.14 3.14 0 0 1-.56 3.672 3.136 3.136 0 0 1-3.314.718c4.376 3.523 10.665 3.523 15.04 0a3.136 3.136 0 0 1-3.313-.718 3.138 3.138 0 0 1-.56-3.672z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: googlemarketingplatform
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for googlemarketingplatform (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-googlemarketingplatform {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-googlemarketingplatform {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-googlemarketingplatform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-googlemarketingplatform 3s ease-in-out infinite alternate;
}
</style>