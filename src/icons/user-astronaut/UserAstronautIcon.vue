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
      <path d="M224 336c74.6 0 138.4-46.4 164-112l4 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24l-4 0C362.4 30.4 298.6-16 224-16S85.6 30.4 60 96l-4 0c-13.3 0-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24l4 0c25.6 65.6 89.4 112 164 112zM208 80l32 0c53 0 96 43 96 96s-43 96-96 96l-32 0c-53 0-96-43-96-96s43-96 96-96zM16 484.6C16 499.7 28.3 512 43.4 512l52.6 0 0-48c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 48 52.6 0c15.1 0 27.4-12.3 27.4-27.4 0-59.8-31.9-112.2-79.6-141-36.4 25.5-80.6 40.4-128.4 40.4s-92-14.9-128.4-40.4C47.9 372.4 16 424.8 16 484.6zM183.3 141.5c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3 .9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6-6-21.2zM152 488l0 24 48 0 0-24c0-13.3-10.7-24-24-24s-24 10.7-24 24zm120-24c-13.3 0-24 10.7-24 24l0 24 48 0 0-24c0-13.3-10.7-24-24-24z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: user-astronaut
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for user-astronaut (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-user-astronaut {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-user-astronaut {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-user-astronaut 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-user-astronaut 3s ease-in-out infinite alternate;
}
</style>