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
      <path d="M14 22H16M14 22C13.1716 22 12.5 21.3284 12.5 20.5V18L12 18M14 22H10M10 22H8M10 22C10.8284 22 11.5 21.3284 11.5 20.5V18L12 18M12 18V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 4H8C5.17157 4 3.75736 4 2.87868 4.87868C2 5.75736 2 7.17157 2 10V12C2 14.8284 2 16.2426 2.87868 17.1213C3.75736 18 5.17157 18 8 18H16C18.8284 18 20.2426 18 21.1213 17.1213C21.8897 16.3529 21.9862 15.175 21.9983 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 5.62043V3.6493C22 3.3393 21.7723 3.08201 21.477 3.02921C20.2869 2.81643 19.299 2.34309 18.817 2.08062C18.6197 1.97313 18.3803 1.97313 18.183 2.08062C17.701 2.34309 16.7131 2.81643 15.523 3.02921C15.2277 3.08201 15 3.3393 15 3.6493V5.62043C15 8.19182 17.5424 9.59437 18.2935 9.9526C18.426 10.0158 18.574 10.0158 18.7065 9.9526C19.4576 9.59437 22 8.19182 22 5.62043Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: computer-protection
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for computer-protection (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-computer-protection {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-computer-protection {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-computer-protection 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-computer-protection 3s ease-in-out infinite alternate;
}
</style>