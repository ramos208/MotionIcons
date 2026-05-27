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
      <path d="M0 3.393v12.949h3.662v-3.44h2c1.8-.002 4.084-.395 5.276-2.183.468-.716.703-1.56.703-2.535 0-.986-.235-1.836-.704-2.551-.468-.728-1.135-1.284-1.998-1.666-.85-.382-1.836-.574-3.02-.574H0zm3.662 2.886h2.035c.765 0 1.331.167 1.701.5.382.332.575.8.575 1.405 0 .592-.193 1.055-.575 1.388-.37.333-.936.5-1.7.5H3.661V6.28zm8.906 4.301 3.764 5.012-3.764 5.015h3.92l1.795-2.388 1.795 2.388H24L16.488 10.58h-3.92zm7.51 0-1.369 1.834 1.969 2.61L24 10.58h-3.922zM9.096 12.912s-1.496.628-3.467.604l2.115 2.826h3.92l-2.568-3.43z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: reactiveresume
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for reactiveresume (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-reactiveresume {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-reactiveresume {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-reactiveresume 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-reactiveresume 3s ease-in-out infinite alternate;
}
</style>