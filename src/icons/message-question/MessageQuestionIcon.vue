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
      <path d="M12 20.5C19.1328 20.5 22 16.4706 22 11.5C22 6.52944 20.1328 2.5 12 2.5C4.13281 2.5 2 6.52944 2 11.5C2 13.5712 2.37034 15.4791 3.37161 17C4.63281 19 3.99253 20.8333 3 21.5C4.61547 21.5 5.70211 20.9858 6.39239 20.4766C6.88252 20.115 7.50688 19.9364 8.0984 20.0815C9.20689 20.3533 10.4991 20.5 12 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.57777 13.755 10.0983 13.3632 10.4634C12.7572 11.0282 12 11.6716 12 12.5M12.125 15.75H12M12.25 15.75C12.25 15.8881 12.1381 16 12 16C11.8619 16 11.75 15.8881 11.75 15.75C11.75 15.6119 11.8619 15.5 12 15.5C12.1381 15.5 12.25 15.6119 12.25 15.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: message-question
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for message-question (hugeicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-message-question {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-message-question {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-message-question 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-message-question 2.5s ease-in-out infinite alternate;
}
</style>