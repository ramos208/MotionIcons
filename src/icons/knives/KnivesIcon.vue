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
      <path d="M15.5 10L18.1025 7.39117C18.8659 7.49623 19.6693 7.26445 20.2565 6.69585C21.2478 5.73599 21.2478 4.17975 20.2565 3.21989C19.2652 2.26004 17.658 2.26004 16.6667 3.21989L12 7.73864" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17 12L18.4252 10.5448C19.2397 10.663 20.0968 10.4023 20.7233 9.76257C21.7376 8.72688 21.7345 7.0592 20.8538 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.6509 18.4629L15.6415 16.4928C16.8805 15.2666 17.5 14.6534 17.5 13.8916C17.5 13.1297 16.8805 12.5165 15.6415 11.2903L13.6703 9.33936C12.4313 8.11312 11.8118 7.5 11.042 7.5C10.2722 7.5 9.65267 8.11312 8.41368 9.33936L3.58868 14.1147C3.05152 14.6463 2.78294 14.9122 2.64147 15.2502C2.5 15.5882 2.5 15.9641 2.5 16.716V17.821C2.5 19.5552 2.5 20.4222 3.04434 20.961C3.58867 21.4997 4.4648 21.4997 6.21698 21.4997L12.6887 21.5C14.4565 21.5 15.3403 21.5 15.8895 20.9622C16.4387 20.4244 16.4387 19.5589 16.4387 17.8277V15.6928" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: knives
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for knives (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-knives {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-knives {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-knives 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-knives 3s ease-in-out infinite alternate;
}
</style>