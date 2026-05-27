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
      <path d="M2.12 0c-.2688.004-.5138.2196-.5138.5206v4.9981c0 .1875.1009.3604.2641.4525l9.8769 5.5768c.3522.199.3522.7062 0 .9051L1.8703 18.03a.52.52 0 0 0-.264.4526v4.997c0 .4016.436.6514.7824.4484L22.207 12.3121a.3777.3777 0 0 0-.0003-.652L2.3883.072A.516.516 0 0 0 2.1199 0zm-.005 7.9458c-.2671.006-.5088.2216-.5088.5203v7.056c0 .3982.4296.6484.776.452l6.222-3.528c.3512-.199.3512-.705 0-.904l-6.222-3.528a.515.515 0 0 0-.2674-.0683z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: libretube
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for libretube (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-libretube {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-libretube {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-libretube 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-libretube 3s ease-in-out infinite alternate;
}
</style>