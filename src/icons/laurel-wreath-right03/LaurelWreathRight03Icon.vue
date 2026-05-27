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
      <path d="M13.0111 6.5C13.0111 6.5 11.179 6.4339 10.3382 4.9339C9.4975 3.4339 10.4889 2 10.4889 2C10.4889 2 12.321 2.0661 13.1618 3.5661C14.0025 5.0661 13.0111 6.5 13.0111 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.8171 6.5C14.2805 8.59896 16.1341 13.475 11.8415 16.1875C6.47567 19.5781 5.9878 20.5469 5.5 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.9679 18.5C7.9679 18.5 11.5403 17.1364 9.49877 13.5C9.49877 13.5 5.41625 14.8636 7.9679 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 19.0001C8 19.0001 10.3674 15.9252 13.5 19.105C13.5 19.105 10.9923 22.6818 8 19.0001Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.5094 12.9391C14.5094 12.9391 14.1124 8.85377 18.4701 9.00405C18.4701 9.00405 19.1061 13.5764 14.5094 12.9391Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.4906 12.5001C14.4906 12.5001 14.8876 8.41481 10.5299 8.56508C10.5299 8.56508 9.89393 13.1374 14.4906 12.5001Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: laurel-wreath-right03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for laurel-wreath-right03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-laurel-wreath-right03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-laurel-wreath-right03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-laurel-wreath-right03 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-laurel-wreath-right03 3s ease-in-out infinite alternate;
}
</style>