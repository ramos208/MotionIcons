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
      <path d="M11.5 10.5C11.2818 10.0721 10.9725 9.72785 10.6018 9.49708C9.28087 8.67461 8.12796 9.00606 7.43537 9.53401C7.15139 9.75048 7.0094 9.85871 6.92586 9.85871C6.84232 9.85871 6.70033 9.75048 6.41636 9.53401C5.72376 9.00606 4.57085 8.67461 3.24991 9.49708C1.51631 10.5765 1.12404 14.1374 5.12277 17.1417C5.8844 17.7139 6.26521 18 6.92586 18C7.58651 18 7.96733 17.7139 8.72896 17.1417C8.96385 16.9652 9.18359 16.7868 9.38879 16.6071" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.2687 12.4971C14.6095 11.6746 15.7798 12.0061 16.4828 12.534C16.7711 12.7505 16.9152 12.8587 17 12.8587C17.0848 12.8587 17.2289 12.7505 17.5172 12.534C18.2202 12.0061 19.3905 11.6746 20.7313 12.4971C22.491 13.5765 22.8891 17.1374 18.8302 20.1417C18.0571 20.7139 17.6706 21 17 21C16.3294 21 15.9429 20.7139 15.1698 20.1417C11.1109 17.1374 11.509 13.5765 13.2687 12.4971Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.5 7.5C15.5 6.67157 16.1716 6 17 6C17.8284 6 18.5 6.67157 18.5 7.5C18.5 8.64806 17 8.65873 17 9.5V12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.5 4.5C5.5 3.67157 6.17157 3 7 3C7.82843 3 8.5 3.67157 8.5 4.5C8.5 5.64806 7 5.65873 7 6.5V9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ear-rings01
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for ear-rings01 (hugeicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ear-rings01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ear-rings01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ear-rings01 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-ear-rings01 2.5s ease-in-out infinite alternate;
}
</style>