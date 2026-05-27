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
      <path d="M6.43614 8C6.15488 8.84221 6 9.76282 6 10.7273C6 14.7439 8.68629 18 12 18C15.3137 18 18 14.7439 18 10.7273C18 9.76282 17.8451 8.84221 17.5639 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.5 21C14.5 21 13.818 18 12 18C10.182 18 9.5 21 9.5 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.5202 5.22967C18.8121 6.89634 17.5004 8 17.5004 8C17.5004 8 15.8969 7.437 15.605 5.77033C15.3131 4.10366 16.6248 3 16.6248 3C16.6248 3 18.2284 3.56301 18.5202 5.22967Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.0942 12.1393C19.8128 13.4061 18.0778 12.9003 18.0778 12.9003C18.0778 12.9003 17.6241 11.1276 18.9055 9.86074C20.1868 8.59388 21.9219 9.09972 21.9219 9.09972C21.9219 9.09972 22.3756 10.8724 21.0942 12.1393Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.2335 18.1896C16.7335 17.614 16.5 16 16.5 16C16.5 16 17.7665 14.9616 19.2665 15.5372C20.7665 16.1128 21 17.7268 21 17.7268C21 17.7268 19.7335 18.7652 18.2335 18.1896Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.76651 18.1895C7.26651 17.6139 7.5 15.9999 7.5 15.9999C7.5 15.9999 6.23349 14.9615 4.73349 15.5371C3.23349 16.1127 3 17.7267 3 17.7267C3 17.7267 4.26651 18.7651 5.76651 18.1895Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.90552 12.1393C4.18688 13.4061 5.92191 12.9003 5.92191 12.9003C5.92191 12.9003 6.37559 11.1276 5.09423 9.86074C3.81288 8.59388 2.07785 9.09972 2.07785 9.09972C2.07785 9.09972 1.62417 10.8724 2.90552 12.1393Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.47987 5.22967C5.18799 6.89634 6.49968 8 6.49968 8C6.49968 8 8.10325 7.437 8.39513 5.77033C8.68701 4.10366 7.37532 3 7.37532 3C7.37532 3 5.77175 3.56301 5.47987 5.22967Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: laurel-wreath01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for laurel-wreath01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-laurel-wreath01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-laurel-wreath01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-laurel-wreath01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-laurel-wreath01 3s ease-in-out infinite alternate;
}
</style>