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
      <path d="M16.73.313c-3.56-.049-7.797 1.68-11.288 5.02-.87.83-1.607 1.725-2.28 2.642h3.042L5.497 9.99H1.864c-.346.636-.672 1.266-.922 1.906h4.307l-.687 2.016H.327c-.724 3.079-.262 5.953 1.559 7.777 3.54 3.538 11.01 2.292 16.591-3.048.977-.93 1.783-1.931 2.511-2.96h-3.906l.596-2.013h4.568c.334-.64.643-1.274.883-1.914h-4.992l.554-2.01h5.051c.623-2.917.132-5.62-1.638-7.39C20.76 1.01 18.867.34 16.73.312Zm-1.044 4.714h4.968l-.634 2.938h-3.002c-.323 0-.46.054-.592.201-.05.058-.07.115-.09.23l-1.639 6.22c-.385 2.179-3.065 4.359-6.555 4.359H3.288l.842-3.198h3.119a.984.984 0 0 0 .775-.347c.076-.09.177-.232.19-.377L9.509 9.62c.381-2.182 2.686-4.592 6.177-4.592Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: schneiderelectric
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for schneiderelectric (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-schneiderelectric {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-schneiderelectric {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-schneiderelectric 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-schneiderelectric 3s ease-in-out infinite alternate;
}
</style>