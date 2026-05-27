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
      <path d="M2.03909 8.24024C2.03617 8.32299 2.03341 8.40609 2.03081 8.4895C2.01057 9.13838 2 9.80695 2 10.4899M22 10.4899C22 9.8071 21.9894 9.13868 21.9692 8.48993M8 18.4118V20.76C8 21.1631 8.32679 21.4899 8.72991 21.4899C8.90419 21.4899 9.07273 21.4276 9.20503 21.3141L11.3845 19.4452C11.9325 18.9754 12.2064 18.7405 12.532 18.6165C12.8576 18.4925 13.2282 18.4855 13.9693 18.4714C14.6638 18.4583 15.342 18.4382 16 18.4118M14 2.50903C14.6838 2.52221 15.3517 2.54204 16 2.56802M20 3.09558C20.3223 3.24384 20.6057 3.44112 20.8699 3.70739C21.1106 3.9499 21.2939 4.20572 21.4348 4.48993M21.8781 14.4899C21.7797 15.7669 21.5624 16.5748 20.8699 17.2725C20.6057 17.5387 20.3223 17.736 20 17.8843M10 2.50903C9.31624 2.52221 8.64834 2.54204 8 2.56802M4 3.09558C3.67772 3.24384 3.39434 3.44112 3.13007 3.70739C2.88949 3.94978 2.70626 4.20547 2.56545 4.4895M2.12184 14.4895C2.22024 15.7668 2.43751 16.5747 3.13007 17.2725C3.39434 17.5387 3.67772 17.736 4 17.8843" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: message-square-dashed
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for message-square-dashed (hugeicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-message-square-dashed {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-message-square-dashed {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-message-square-dashed 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-message-square-dashed 2.5s ease-in-out infinite alternate;
}
</style>