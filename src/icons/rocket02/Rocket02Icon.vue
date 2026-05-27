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
      <path d="M9.66667 7.7143V6.41327C9.66667 4.94834 10.2781 3.68557 11.179 2.62107C11.5294 2.20702 11.7046 2 12 2C12.2954 2 12.4706 2.20702 12.821 2.62107C13.7219 3.68557 14.3333 4.94834 14.3333 6.41327V7.7143C14.3333 8.78573 14.3333 9.09036 14.9807 9.559C15.4985 9.8919 16 10.2143 16 10.8598C16 11.6429 15.6667 12 14.9358 12H9.06415C8.33333 12 8 11.6429 8 10.8598C8 10.2143 8.50146 9.8919 9.01933 9.559C9.66667 9.09036 9.66667 8.78573 9.66667 7.7143Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.5 22C20.8807 22 22 20.8061 22 19.3333C22 17.8606 20.8807 16.6667 19.5 16.6667C19.5 15.1939 18.3807 14 17 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.5 22C3.11929 22 2 20.8061 2 19.3333C2 17.8606 3.11929 16.6667 4.5 16.6667C4.5 15.1939 5.61929 14 7 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 15V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 15V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rocket02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rocket02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rocket02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rocket02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rocket02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rocket02 3s ease-in-out infinite alternate;
}
</style>