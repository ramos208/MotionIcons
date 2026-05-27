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
      <path d="M11.575.007A11.993 11.993 0 0 0 3.52 20.481l.124.121 6.532-12.11H3.188l1.227 2.066a.632.632 0 0 1 .076.49.677.677 0 0 1-.65.506.636.636 0 0 1-.544-.298L1.474 8.188a.633.633 0 0 1-.095-.342v-.027a.648.648 0 0 1 .642-.628h9.256c.167 0 .368.06.47.14l.01.008a.733.733 0 0 1 .22.942L4.908 21.388a.733.733 0 0 1-.14.182 11.994 11.994 0 0 0 14.225.185h-5.632a.744.744 0 0 1-.744-.744v-.015a.744.744 0 0 1 .744-.744h7.352a11.994 11.994 0 0 0-.232-16.733 12.06 12.06 0 0 0-1.618-1.358l-.003.006-.033.099c-.233.433-2.941 5.33-3.838 6.951l-.329.595c-.753 1.302-1.099 2.767-.925 3.92a3.775 3.775 0 0 0 .657 1.624 3.914 3.914 0 0 0 2.55 1.593 4.058 4.058 0 0 0 .682.058 3.981 3.981 0 0 0 2.405-.798 3.792 3.792 0 0 0 1.48-2.412 3.784 3.784 0 0 0-.7-2.892 4.015 4.015 0 0 0-2.583-1.581 4.377 4.377 0 0 0-.177-.026.699.699 0 0 1-.614-.718.69.69 0 0 1 .233-.503.705.705 0 0 1 .549-.172 5.41 5.41 0 0 1 3.735 2.182 5.18 5.18 0 0 1 .942 3.943 5.18 5.18 0 0 1-2.18 3.418 5.393 5.393 0 0 1-3.088.963h-.001a5.479 5.479 0 0 1-.915-.078 5.303 5.303 0 0 1-3.472-2.174 5.583 5.583 0 0 1-.425-.706c-.717-1.416-.753-3.07-.102-4.785a18.44 18.44 0 0 1 .758-1.678l4.078-7.45.096-.117.004-.008a12.04 12.04 0 0 0-.98-.467 11.993 11.993 0 0 0-5.093-.94z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: system76
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for system76 (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-system76 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-system76 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-system76 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-system76 3s ease-in-out infinite alternate;
}
</style>