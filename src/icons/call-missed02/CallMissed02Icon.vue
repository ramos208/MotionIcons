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
      <path d="M17.0539 14.0292V16.7928C17.0539 17.3565 17.4143 17.8705 17.9747 18.1385C18.413 18.3481 18.9322 18.6067 19.3546 18.847C19.7452 19.0692 20.293 19.0557 20.6214 18.765L21.5133 17.9757C22.17 17.3945 22.1749 16.4442 21.4501 15.9302C15.9402 12.0233 8.05983 12.0233 2.54993 15.9302C1.82509 16.4442 1.82997 17.3945 2.48673 17.9757L3.3786 18.765C3.70697 19.0557 4.24369 19.0574 4.62554 18.8235C5.0468 18.5655 5.53006 18.3258 5.94613 18.1356C6.54384 17.8623 6.94607 17.3266 6.94607 16.7312V14.0292" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.2368 9C7.14942 7.99573 6.74189 5.76249 7.25219 5.25219C7.76249 4.74189 9.99573 5.14942 11 5.2368M7.5 5.5L11.1464 9.14645C11.3728 9.37282 11.6799 9.5 12 9.5C12.3201 9.5 12.6272 9.37282 12.8536 9.14645L17 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: call-missed02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for call-missed02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-call-missed02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-call-missed02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-call-missed02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-call-missed02 3s ease-in-out infinite alternate;
}
</style>