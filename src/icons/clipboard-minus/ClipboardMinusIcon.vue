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
      <path d="M14.5 2.00024H9.5C8.67157 2.00024 8 2.67182 8 3.50024C8 4.32867 8.67157 5.00024 9.5 5.00024H14.5C15.3284 5.00024 16 4.32867 16 3.50024C16 2.67182 15.3284 2.00024 14.5 2.00024Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16 3.50024C17.5535 3.54706 18.48 3.72032 19.1213 4.36161C20 5.24028 20 6.65448 20 9.48287L20 15.9997C20 18.8281 20 20.2423 19.1213 21.121C18.2426 21.9997 16.8284 21.9997 14 21.9997L10 21.9997C7.17158 21.9997 5.75737 21.9997 4.87869 21.121C4.00001 20.2424 4.00001 18.8282 4 15.9997L4.00001 9.48293C4.00001 6.6545 4 5.24028 4.87868 4.3616C5.51997 3.72031 6.44651 3.54705 7.9999 3.50024" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.00391 13.0002H15.0039" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: clipboard-minus
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for clipboard-minus (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-clipboard-minus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-clipboard-minus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-clipboard-minus 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-clipboard-minus 3s ease-in-out infinite alternate;
}
</style>