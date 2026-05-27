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
      <path d="M12 20.5C19.1328 20.5 22 16.4706 22 11.5C22 6.52944 20.1328 2.5 12 2.5C4.13281 2.5 2 6.52944 2 11.5C2 13.5712 2.37034 15.4791 3.37161 17C4.63281 19 3.99253 20.8333 3 21.5C4.61547 21.5 5.70211 20.9858 6.39239 20.4766C6.88252 20.115 7.50688 19.9364 8.0984 20.0815C9.20689 20.3533 10.4991 20.5 12 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.1248 11.5H11.9998M16.125 11.5H16M8.125 11.5H8M12.2498 11.5C12.2498 11.6381 12.1379 11.75 11.9998 11.75C11.8618 11.75 11.7498 11.6381 11.7498 11.5C11.7498 11.3619 11.8618 11.25 11.9998 11.25C12.1379 11.25 12.2498 11.3619 12.2498 11.5ZM16.25 11.5C16.25 11.6381 16.1381 11.75 16 11.75C15.8619 11.75 15.75 11.6381 15.75 11.5C15.75 11.3619 15.8619 11.25 16 11.25C16.1381 11.25 16.25 11.3619 16.25 11.5ZM8.25 11.5C8.25 11.6381 8.13807 11.75 8 11.75C7.86193 11.75 7.75 11.6381 7.75 11.5C7.75 11.3619 7.86193 11.25 8 11.25C8.13807 11.25 8.25 11.3619 8.25 11.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: message02
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for message02 (hugeicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-message02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-message02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-message02 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-message02 2.5s ease-in-out infinite alternate;
}
</style>