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
      <path d="M7.72161 14.8947V11.5789M7.72161 11.5789V6.15789C7.72161 5.24227 8.45287 4.5 9.35494 4.5C10.257 4.5 10.9883 5.24226 10.9883 6.15789V10.6316L13.8601 11.084C15.6602 11.3581 16.5602 11.4951 17.1942 11.8806C18.2414 12.5174 19 13.4737 19 14.8697C19 15.8421 18.7632 16.4945 18.1876 18.2472C17.8224 19.3594 17.6398 19.9154 17.342 20.3556C16.8517 21.0804 16.1285 21.6095 15.2961 21.8524C14.7905 22 14.213 22 13.0581 22H11.7468C10.0813 22 9.24852 22 8.53345 21.6827C8.21038 21.5393 7.90896 21.3502 7.63815 21.121C7.03875 20.6138 6.66633 19.8577 5.92149 18.3456C5.31747 17.1194 5.01546 16.5063 5.00077 15.8707C4.99414 15.584 5.0303 15.298 5.108 15.0223C5.28029 14.411 5.72499 13.8951 6.61438 12.8634L7.72161 11.5789Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.3164 6C13.3164 3.79086 11.5255 2 9.31641 2C7.10727 2 5.31641 3.79086 5.31641 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tap04
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tap04 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tap04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tap04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tap04 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tap04 3s ease-in-out infinite alternate;
}
</style>