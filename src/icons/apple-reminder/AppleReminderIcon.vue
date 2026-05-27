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
      <path d="M3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.37545 7.99976H7.25045M7.37482 11.9999H7.24982M7.37498 15.9999H7.24998M7.50045 7.99976C7.50045 8.13783 7.38852 8.24976 7.25045 8.24976C7.11238 8.24976 7.00045 8.13783 7.00045 7.99976C7.00045 7.86169 7.11238 7.74976 7.25045 7.74976C7.38852 7.74976 7.50045 7.86169 7.50045 7.99976ZM7.49982 11.9999C7.49982 12.138 7.38789 12.2499 7.24982 12.2499C7.11175 12.2499 6.99982 12.138 6.99982 11.9999C6.99982 11.8618 7.11175 11.7499 7.24982 11.7499C7.38789 11.7499 7.49982 11.8618 7.49982 11.9999ZM7.49998 15.9999C7.49998 16.138 7.38805 16.2499 7.24998 16.2499C7.11191 16.2499 6.99998 16.138 6.99998 15.9999C6.99998 15.8618 7.11191 15.7499 7.24998 15.7499C7.38805 15.7499 7.49998 15.8618 7.49998 15.9999Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 8H17M11 12H17M11 16H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: apple-reminder
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for apple-reminder (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-apple-reminder {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-apple-reminder {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-apple-reminder 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-apple-reminder 3s ease-in-out infinite alternate;
}
</style>