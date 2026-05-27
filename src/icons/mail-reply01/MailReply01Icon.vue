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
      <path d="M1.99989 4.99994L8.91291 8.92456C11.4386 10.3584 12.5612 10.3584 15.0869 8.92456L21.9999 4.99994" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.9193 11.0333C21.9193 10.54 21.9141 10.0466 21.9036 9.55189C21.8386 6.47433 21.806 4.93555 20.6795 3.79566C19.5528 2.65578 17.985 2.61607 14.8491 2.53665C12.9164 2.4877 11.0028 2.4877 9.07012 2.53664C5.93431 2.61605 4.3664 2.65576 3.23983 3.79565C2.11325 4.93554 2.08071 6.47432 2.01559 9.55188C1.99465 10.5415 1.99466 11.5251 2.0156 12.5147C2.08071 15.5923 2.11326 17.131 3.23984 18.271C4.3664 19.4108 5.93431 19.4505 9.07013 19.5299C10.0365 19.5544 10.998 19.5666 11.9596 19.5666" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22.0001 21.5003C21.884 18.9757 21.9869 18.0573 20.3438 16.8792C19.5362 16.3002 17.9115 15.9188 15.7177 16.1247M17.4519 13.5927L15.1552 15.7463C14.9611 15.9406 14.9597 16.256 15.1519 16.452L17.4519 18.6401" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mail-reply01
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for mail-reply01 (hugeicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mail-reply01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mail-reply01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mail-reply01 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-mail-reply01 2.5s ease-in-out infinite alternate;
}
</style>