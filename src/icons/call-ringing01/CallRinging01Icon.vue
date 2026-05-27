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
      <path d="M17.0539 14.0292V16.7928C17.0539 17.3565 17.4143 17.8705 17.9747 18.1385C18.413 18.3481 18.9322 18.6067 19.3546 18.847C19.7452 19.0692 20.293 19.0557 20.6214 18.765L21.5133 17.9757C22.17 17.3945 22.1749 16.4442 21.4501 15.9302C15.9402 12.0233 8.05983 12.0233 2.54993 15.9302C1.82509 16.4442 1.82997 17.3945 2.48673 17.9757L3.3786 18.765C3.70697 19.0557 4.24369 19.0574 4.62554 18.8235C5.0468 18.5655 5.53006 18.3258 5.94613 18.1356C6.54384 17.8623 6.94607 17.3266 6.94607 16.7312V14.0292" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 5V8M18 8L16 10M6 8L8 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: call-ringing01
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for call-ringing01 (hugeicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-call-ringing01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-call-ringing01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-call-ringing01 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-call-ringing01 2.5s ease-in-out infinite alternate;
}
</style>