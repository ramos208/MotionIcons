<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-pendulum']"
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
      class="icon-geometry anim-subtle-drift"
    >
      <path d="M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.5 19.4959C11.0337 19.4898 9.56682 19.5077 9.09883 19.4959C5.95033 19.4166 4.37608 19.377 3.24496 18.2394C2.11383 17.1018 2.08114 15.5661 2.01577 12.4947C1.99475 11.5071 1.99474 10.5254 2.01576 9.53781C2.08114 6.46642 2.11382 4.93072 3.24495 3.79312C4.37608 2.65551 5.95033 2.61589 9.09882 2.53663C11.0393 2.48779 12.9607 2.48779 14.9012 2.53664C18.0497 2.6159 19.6239 2.65553 20.755 3.79313C21.8862 4.93073 21.9189 6.46643 21.9842 9.53783C21.9983 10.1973 22.0029 10.8542 21.9982 11.512" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.015 14.8866C16.0876 14.2469 17.0238 14.5047 17.5863 14.9153C17.8169 15.0837 17.9322 15.1679 18 15.1679C18.0678 15.1679 18.1831 15.0837 18.4137 14.9153C18.9762 14.5047 19.9124 14.2469 20.985 14.8866C22.3928 15.7261 22.7113 18.4958 19.4642 20.8324C18.8457 21.2775 18.5365 21.5 18 21.5C17.4635 21.5 17.1543 21.2775 16.5358 20.8324C13.2887 18.4958 13.6072 15.7261 15.015 14.8866Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mail-love02
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for mail-love02 (hugeicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

.anim-subtle-drift {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-mail-love02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mail-love02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mail-love02 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-mail-love02 2.5s ease-in-out infinite alternate;
}
</style>