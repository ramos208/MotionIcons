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
      <path d="M12 8.99988C8.41012 8.99988 5.49997 11.91 5.49997 15.4999C5.49997 19.0897 8.41012 21.9999 12 21.9999C15.5898 21.9999 18.5 19.0897 18.5 15.4999C18.5 11.91 15.5898 8.99988 12 8.99988Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.5 4.49988C14.0085 3.99418 12.7002 1.99988 12 1.99988M9.49998 4.49988C9.99151 3.99418 11.2998 1.99988 12 1.99988M12 1.99988L12 6.49988" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.4375 18.1667L10.4375 12.8333M12 12.8333V11.5M12 19.5V18.1667M10.4375 15.5H13.5625M13.5625 15.5C14.0803 15.5 14.5 15.9477 14.5 16.5V17.1667C14.5 17.719 14.0803 18.1667 13.5625 18.1667H9.49998M13.5625 15.5C14.0803 15.5 14.5 15.0523 14.5 14.5V13.8333C14.5 13.281 14.0803 12.8333 13.5625 12.8333H9.49998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bitcoin-up01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bitcoin-up01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bitcoin-up01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-bitcoin-up01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bitcoin-up01 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bitcoin-up01 3s ease-in-out infinite alternate;
}
</style>