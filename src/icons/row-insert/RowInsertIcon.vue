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
      <path d="M7 6.5C7 5.09554 7 4.39331 7.33706 3.88886C7.48298 3.67048 7.67048 3.48298 7.88886 3.33706C8.39331 3 9.09554 3 10.5 3H18.5C19.9045 3 20.6067 3 21.1111 3.33706C21.3295 3.48298 21.517 3.67048 21.6629 3.88886C22 4.39331 22 5.09554 22 6.5C22 7.90446 22 8.60669 21.6629 9.11114C21.517 9.32952 21.3295 9.51702 21.1111 9.66294C20.6067 10 19.9045 10 18.5 10H10.5C9.09554 10 8.39331 10 7.88886 9.66294C7.67048 9.51702 7.48298 9.32952 7.33706 9.11114C7 8.60669 7 7.90446 7 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 17.5C7 16.0955 7 15.3933 7.33706 14.8889C7.48298 14.6705 7.67048 14.483 7.88886 14.3371C8.39331 14 9.09554 14 10.5 14H18.5C19.9045 14 20.6067 14 21.1111 14.3371C21.3295 14.483 21.517 14.6705 21.6629 14.8889C22 15.3933 22 16.0955 22 17.5C22 18.9045 22 19.6067 21.6629 20.1111C21.517 20.3295 21.3295 20.517 21.1111 20.6629C20.6067 21 19.9045 21 18.5 21H10.5C9.09554 21 8.39331 21 7.88886 20.6629C7.67048 20.517 7.48298 20.3295 7.33706 20.1111C7 19.6067 7 18.9045 7 17.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 9L3.53318 10.5858C4.17772 11.2525 4.5 11.5858 4.5 12C4.5 12.4142 4.17773 12.7475 3.53318 13.4142L2 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: row-insert
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for row-insert (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-row-insert {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-row-insert {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-row-insert 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-row-insert 3s ease-in-out infinite alternate;
}
</style>