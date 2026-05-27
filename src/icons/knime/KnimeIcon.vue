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
      <path d="m10.445 21.393 11.54-.775.451.775zM7.56 11.113l-5.092 10.28h-.904Zm10.427 2.652-6.43-9.505.452-.775zm2.57 5.216.627.896-10.652.707zM4.655 20.976l-1.143.09 4.709-9.488Zm6.173-14.667.476-.998 5.984 8.782zm8.272 11.055.847 1.015-8.685 1.413zM6.76 20.532l-1.32.224 3.11-8.162Zm3.406-12.189.472-1.207 5.558 6.732Zm7.403 7.54 1.13 1.016-6.378 1.98zm-8.759 4.08-1.46.448 1.46-6.44zm.8-9.539.363-1.48 4.868 4.477zm-.348 9.402v-7.851l.244-1.085 6.864 3.926.834.758L10.34 19.5zM12.01 1.694 0 22.306h24z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: knime
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for knime (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-knime {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-knime {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-knime 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-knime 3s ease-in-out infinite alternate;
}
</style>