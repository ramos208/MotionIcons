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
      <path d="M1.727 0C.782 0 .02.761.02 1.707v20.586C.02 23.24.782 24 1.727 24h20.546c.945 0 1.707-.761 1.707-1.707V1.707C23.98.76 23.218 0 22.273 0H1.727zm18.714 3.273c-1.861 3.694-3.3 7.627-5.674 11.046-1.064 1.574-2.329 3.163-4.16 3.86-1.31.552-2.936.337-3.98-.647-.628-.523-.54-1.43-.173-2.075.96-1.224 2.34-2.02 3.59-2.915 3.842-2.625 7.446-5.654 10.397-9.27zm-1.693 1.25c-2.503 2.751-5.381 5.16-8.452 7.269l-.003.002-.003.003c-1.327.979-2.835 1.824-3.993 3.114-.349.333-.583 1.042-.537 1.481-.622-1.043-.8-2.614-.257-3.74.526-1.19 1.742-1.807 2.876-2.292 3.757-1.353 6.695-2.926 10.369-5.836z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: thymeleaf
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for thymeleaf (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-thymeleaf {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-thymeleaf {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-thymeleaf 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-thymeleaf 3s ease-in-out infinite alternate;
}
</style>