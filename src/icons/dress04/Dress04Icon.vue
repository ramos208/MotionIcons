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
      <path d="M15 4L12 6L9 4C8.41425 4.50941 7.07071 5.29343 7.00348 6.14565C6.97434 6.51512 7.12883 6.71716 7.43782 7.12122C8.11164 8.00239 8.87991 8.52009 8.87991 10H15.1201C15.1201 8.52009 15.8884 8.00239 16.5622 7.12122C16.8712 6.71716 17.0257 6.51512 16.9965 6.14565C16.9293 5.29343 15.5858 4.50941 15 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.8632 17.8082C19.1589 15.1179 17.3658 12.6502 16.1811 11.2368C15.3314 10.2231 14.7041 10 13.3704 10H10.6296C9.29591 10 8.66864 10.2231 7.81893 11.2368C6.63423 12.6502 4.8411 15.1179 4.13677 17.8082C3.70683 19.4504 4.29064 20.3493 5.88646 20.9301C7.32124 21.4523 9.43708 22 12 22C14.5629 22 16.6788 21.4523 18.1135 20.9301C19.7094 20.3493 20.2932 19.4504 19.8632 17.8082Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 4V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 4V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 15C14 15 16 18 16 21.5M10 15C10 15 8 18 8 21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dress04
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dress04 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dress04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dress04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dress04 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dress04 3s ease-in-out infinite alternate;
}
</style>