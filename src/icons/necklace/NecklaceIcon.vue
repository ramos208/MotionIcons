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
      <path d="M10.542 12.0002L10.9325 8.87621C11.0235 8.14822 11.3545 8.00024 12.042 8.00024C12.7295 8.00024 13.0605 8.14822 13.1515 8.87621L13.542 12.0002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.2844 12.6118C9.6196 11.8003 10.785 12.1273 11.485 12.6482C11.7721 12.8618 11.9156 12.9685 12 12.9685C12.0845 12.9685 12.228 12.8618 12.5151 12.6482C13.2151 12.1273 14.3805 11.8003 15.7157 12.6118C17.468 13.6767 17.8645 17.1898 13.8226 20.1538C13.0527 20.7183 12.6678 21.0005 12 21.0005C11.3323 21.0005 10.9474 20.7183 10.1775 20.1538C6.13558 17.1898 6.53208 13.6767 8.2844 12.6118Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.0059 3.00024C1.90863 4.57792 2.97686 8.0433 8.05347 9.66205M21.9941 3.00024C22.0914 4.57792 21.0231 8.0433 15.9465 9.66205" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: necklace
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for necklace (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-necklace {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-necklace {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-necklace 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-necklace 3s ease-in-out infinite alternate;
}
</style>