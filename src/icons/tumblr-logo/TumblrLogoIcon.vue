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
      <path d="M192,120a8,8,0,0,0,8-8V72a8,8,0,0,0-8-8H152V24a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8A40,40,0,0,1,64,64a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8H88v56a64.07,64.07,0,0,0,64,64h40a8,8,0,0,0,8-8V184a8,8,0,0,0-8-8H160a8,8,0,0,1-8-8V120Zm-32,72h24v32H152a48.05,48.05,0,0,1-48-48V112a8,8,0,0,0-8-8H72V79.43A56.13,56.13,0,0,0,119.43,32H136V72a8,8,0,0,0,8,8h40v24H144a8,8,0,0,0-8,8v56A24,24,0,0,0,160,192Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tumblr-logo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tumblr-logo (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tumblr-logo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tumblr-logo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tumblr-logo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tumblr-logo 3s ease-in-out infinite alternate;
}
</style>