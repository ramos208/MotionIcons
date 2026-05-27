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
      <path d="M24 11.9872c0-.0894 0-.1787-.0128-.2808v-.0383c0-.0766-.0127-.1532-.0127-.2426v-.0128c-.2681-2.5787-2.3107-4.6085-4.8766-4.8766h-.0128c-.0766-.0128-.1532-.0128-.2426-.0128h-.0383c-.0893 0-.1787-.0128-.2808-.0128-1.4553 0-2.8468.5745-3.868 1.6086l-1.864 1.851 1.3533 1.3532 1.3404-1.3532h-.0128l.5107-.5105c.6638-.6766 1.583-1.0468 2.5276-1.0468h.2043c.051 0 .1021 0 .1532.0128h.0128c1.685.1787 3.0127 1.5063 3.1787 3.1787v.0128c0 .051.0128.1021.0128.1532v.4084c0 .0511-.0128.1022-.0128.1532-.1277 1.2255-.8809 2.2979-1.9787 2.834l-.0383.0129a.3813.3813 0 0 0-.1022.051l-.0766.0256-.0638.0255-.1149.0383-.0255.0128c-1.2894.4468-2.7192.1148-3.6894-.8554l-.4979-.4979-3.3702-3.3574-5.3617-5.3617-1.3532 1.3532L0 12l1.3532 1.3532 5.3872 5.3872 1.3532-1.3532 3.3702-3.3702-1.3532-1.3532-3.3702 3.3702L2.6936 12l4.0468-4.0468 2.017 2.0298 5.3873 5.3872.4979.4979c1.0212 1.034 2.4255 1.6085 3.8808 1.5957.6128 0 1.2128-.102 1.7872-.2936l.0511-.0128c.051-.0255.1149-.0383.166-.0638l.102-.0383.1022-.051.1532-.0767.051-.0255c1.698-.8298 2.8469-2.4766 3.0511-4.3532.0128-.0766.0128-.166.0128-.2425v-.3192z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: showpad
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for showpad (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-showpad {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-showpad {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-showpad 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-showpad 3s ease-in-out infinite alternate;
}
</style>