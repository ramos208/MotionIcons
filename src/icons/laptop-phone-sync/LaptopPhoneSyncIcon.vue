<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-rotate']"
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
      class="icon-geometry anim-gear-sync"
    >
      <path d="M15.9999 13.5001V17.5001C15.9999 18.9143 15.9999 19.6214 16.4392 20.0608C16.8786 20.5001 17.5857 20.5001 18.9999 20.5001C20.4141 20.5001 21.1212 20.5001 21.5605 20.0608C21.9999 19.6214 21.9999 18.9143 21.9999 17.5001V13.5001C21.9999 12.0859 21.9999 11.3788 21.5605 10.9395C21.1212 10.5001 20.4141 10.5001 18.9999 10.5001C17.5857 10.5001 16.8786 10.5001 16.4392 10.9395C15.9999 11.3788 15.9999 12.0859 15.9999 13.5001Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3.99988 16.5005V8.50049C3.99988 6.14347 3.99988 4.96495 4.73254 4.23272C5.46521 3.50049 6.64442 3.50049 9.00283 3.50049H16.007C18.3654 3.50049 19.5446 3.50049 20.2773 4.23272C20.8346 4.78969 20.9679 5.60486 20.9999 7.00049" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.9999 20.5005H2.51567C2.13273 20.5005 1.88367 20.1093 2.05493 19.7769L3.99988 16.5005H12.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: laptop-phone-sync
// Category: loading
// Physics Presets: Dynamic kinetic adaptation for laptop-phone-sync (hugeicons). Selected semantic motion: rotate with custom idle (gear-sync) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-gear-sync {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-laptop-phone-sync {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-laptop-phone-sync {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(360deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-laptop-phone-sync 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-gear-sync {
  animation: motion-ai-idle-laptop-phone-sync 4s linear infinite alternate;
}
</style>