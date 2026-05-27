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
      <path d="M2 5.49994L8.91302 9.41691C11.4616 10.8609 12.5384 10.8609 15.087 9.41691L22 5.49994" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.9953 10.0283C21.9299 6.96108 21.8972 5.42743 20.7655 4.29135C19.6337 3.15526 18.0586 3.11568 14.9083 3.03653C12.9668 2.98775 11.0443 2.98774 9.10276 3.03652C5.95252 3.11567 4.3774 3.15524 3.24564 4.29133C2.11389 5.42742 2.08118 6.96107 2.01577 10.0283C1.99474 11.0146 1.99474 11.995 2.01577 12.9813C2.08119 16.0486 2.11389 17.5822 3.24565 18.7183C4.3774 19.8544 5.95252 19.894 9.10277 19.9731C9.57102 19.9849 10.0382 19.9938 10.5047 19.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.8522 13.4391L21.5446 14.1315C22.1304 14.7172 22.1304 15.667 21.5446 16.2528L17.9172 19.9484C17.6319 20.2338 17.2669 20.4262 16.8702 20.5002L14.622 20.9883C14.2671 21.0653 13.951 20.7502 14.027 20.395L14.5056 18.1597C14.5796 17.763 14.772 17.398 15.0574 17.1126L18.7309 13.4391C19.3167 12.8533 20.2665 12.8533 20.8522 13.4391Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mail-edit01
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for mail-edit01 (hugeicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mail-edit01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mail-edit01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mail-edit01 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-mail-edit01 2.5s ease-in-out infinite alternate;
}
</style>