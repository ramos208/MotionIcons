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
      <path d="M12.791 8.76757L17.4838 10.6039C20.1905 11.663 21.5438 12.1926 21.4989 13.0326C21.454 13.8726 20.0417 14.2578 17.217 15.0282C16.3759 15.2576 15.9554 15.3722 15.6638 15.6638C15.3722 15.9554 15.2576 16.3759 15.0282 17.217C14.2578 20.0417 13.8726 21.454 13.0326 21.4989C12.1926 21.5438 11.663 20.1905 10.6039 17.4838L8.76757 12.791C7.6587 9.95727 7.10427 8.54038 7.82233 7.82233C8.54038 7.10427 9.95727 7.6587 12.791 8.76757Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.5 2.5H3.5C2.94772 2.5 2.5 2.94772 2.5 3.5V4.5C2.5 5.05228 2.94772 5.5 3.5 5.5H4.5C5.05228 5.5 5.5 5.05228 5.5 4.5V3.5C5.5 2.94772 5.05228 2.5 4.5 2.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.5 13.5H3.5C2.94772 13.5 2.5 13.9477 2.5 14.5V15.5C2.5 16.0523 2.94772 16.5 3.5 16.5H4.5C5.05228 16.5 5.5 16.0523 5.5 15.5V14.5C5.5 13.9477 5.05228 13.5 4.5 13.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.5 2.5H14.5C13.9477 2.5 13.5 2.94772 13.5 3.5V4.5C13.5 5.05228 13.9477 5.5 14.5 5.5H15.5C16.0523 5.5 16.5 5.05228 16.5 4.5V3.5C16.5 2.94772 16.0523 2.5 15.5 2.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.5 4H5.5M4 5.5V13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cursor-edit02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cursor-edit02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cursor-edit02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cursor-edit02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cursor-edit02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cursor-edit02 3s ease-in-out infinite alternate;
}
</style>