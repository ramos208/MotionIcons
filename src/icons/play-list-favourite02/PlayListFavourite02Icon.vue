<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M21.5 12.5V11.05C21.5 7.01949 21.5 5.00424 20.2479 3.75212C18.9958 2.5 16.9805 2.5 12.95 2.5H11.05C7.01949 2.5 5.00424 2.5 3.75212 3.75212C2.5 5.00424 2.5 7.01949 2.5 11.05V12.95C2.5 16.9805 2.5 18.9958 3.75212 20.2479C5.00424 21.5 7.01949 21.5 11.05 21.5H12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.4515 15.859C16.4572 15.265 17.3349 15.5044 17.8621 15.8857C18.0783 16.042 18.1864 16.1202 18.25 16.1202C18.3136 16.1202 18.4217 16.042 18.6379 15.8857C19.1651 15.5044 20.0428 15.265 21.0485 15.859C22.3682 16.6386 22.6669 19.2104 19.6227 21.3801C19.0429 21.7934 18.7529 22 18.25 22C17.7471 22 17.4571 21.7934 16.8773 21.3801C13.8331 19.2104 14.1318 16.6386 15.4515 15.859Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.9609 11.782C14.8347 12.2297 14.2381 12.546 13.0449 13.1787C11.8914 13.7903 11.3147 14.0961 10.8499 13.9732C10.6578 13.9224 10.4827 13.8259 10.3415 13.6929C10 13.3713 10 12.7475 10 11.5C10 10.2525 10 9.6287 10.3415 9.30711C10.4827 9.17415 10.6578 9.07763 10.8499 9.02681C11.3147 8.90388 11.8914 9.20969 13.0449 9.82131C14.2381 10.454 14.8347 10.7703 14.9609 11.218C15.013 11.4028 15.013 11.5972 14.9609 11.782Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: play-list-favourite02
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for play-list-favourite02 (hugeicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-play-list-favourite02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(4.5px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(3px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-play-list-favourite02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-play-list-favourite02 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-play-list-favourite02 3s ease-in-out infinite alternate;
}
</style>