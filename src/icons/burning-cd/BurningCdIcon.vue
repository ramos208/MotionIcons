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
      <path d="M15 16.5C15 18.8456 15 20.0184 14.3237 20.8263C14.1496 21.0343 13.9465 21.2205 13.7196 21.3801C12.8382 22 11.5588 22 9 22C6.44119 22 5.16178 22 4.28042 21.3801C4.05351 21.2205 3.85041 21.0343 3.6763 20.8263C3 20.0184 3 18.8456 3 16.5L3 7.5C3 5.15442 3 3.98164 3.6763 3.17372C3.85041 2.96572 4.05351 2.77954 4.28042 2.61994C5.16179 2 6.44119 2 9 2C11.5588 2 12.8382 2 13.7196 2.61994C13.9465 2.77954 14.1496 2.96572 14.3237 3.17372C15 3.98164 15 5.15443 15 7.5L15 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 13.5L12 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 19C18.866 19 22 15.866 22 12C22 8.13401 18.866 5 15 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: burning-cd
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for burning-cd (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-burning-cd {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-burning-cd {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-burning-cd 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-burning-cd 3s ease-in-out infinite alternate;
}
</style>