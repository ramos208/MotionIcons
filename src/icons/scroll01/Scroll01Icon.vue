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
      <path d="M6 9H4.57143C3.56905 9 3.06786 9 2.70195 8.77009C2.51115 8.6502 2.3498 8.48885 2.22991 8.29805C2 7.93214 2 7.43095 2 6.42857V5C2 3.89543 2.89543 3 4 3C5.10457 3 6 3.89543 6 5V9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 9V19C6 20.1046 6.89543 21 8 21M8 21H19.1429C19.9408 21 20.3398 21 20.6606 20.8878C21.2351 20.6867 21.6867 20.2351 21.8878 19.6606C22 19.3398 22 18.9408 22 18.1429C22 17.5444 22 17.2451 21.9158 17.0046C21.7651 16.5737 21.4263 16.2349 20.9954 16.0842C20.7549 16 20.4556 16 19.8571 16H13C11.5858 16 10.8787 16 10.4393 16.4393C10 16.8787 10 17.5858 10 19C10 20.1046 9.10457 21 8 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4 3H14C16.357 3 17.5355 3 18.2678 3.73223C19 4.46447 19 5.64298 19 8V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 7H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 11H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: scroll01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for scroll01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-scroll01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-scroll01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-scroll01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-scroll01 3s ease-in-out infinite alternate;
}
</style>