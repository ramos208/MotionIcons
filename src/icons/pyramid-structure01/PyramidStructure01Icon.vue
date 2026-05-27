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
      <path d="M12 2C12.9022 2 13.675 2.70814 14.5875 3.99725C15.4939 5.2777 15.9471 5.91793 15.6683 6.45896C15.3895 7 14.5733 7 12.9409 7H11.0591C9.42669 7 8.6105 7 8.33169 6.45896C8.05287 5.91793 8.50607 5.2777 9.41248 3.99725C10.325 2.70814 11.0978 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.82894 14H18.1711C18.9276 14 19.3059 14 19.4509 13.7508C19.5958 13.5017 19.4091 13.1765 19.0359 12.526C18.9358 12.3515 18.8353 12.1773 18.7346 12.0031C18.1692 11.0254 17.8866 10.5365 17.4209 10.2683C16.9552 10 16.3876 10 15.2523 10H8.74773C7.61242 10 7.04477 10 6.57911 10.2683C6.11344 10.5365 5.83076 11.0254 5.2654 12.0031C5.16471 12.1773 5.06424 12.3515 4.96412 12.526C4.59085 13.1765 4.40422 13.5017 4.54914 13.7508C4.69406 14 5.07236 14 5.82894 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.24328 22H15.7567C19.3099 22 21.0866 22 21.7671 20.8828C22.1944 20.1813 22.0132 19.3288 21.392 18.0487C21.1514 17.5529 21.0311 17.305 20.7877 17.1525C20.5442 17 20.2499 17 19.6613 17H4.33871C3.75012 17 3.45582 17 3.21234 17.1525C2.96886 17.305 2.84856 17.5529 2.60797 18.0487C1.98681 19.3288 1.80564 20.1813 2.23293 20.8828C2.91344 22 4.69006 22 8.24328 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pyramid-structure01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pyramid-structure01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pyramid-structure01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pyramid-structure01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pyramid-structure01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pyramid-structure01 3s ease-in-out infinite alternate;
}
</style>