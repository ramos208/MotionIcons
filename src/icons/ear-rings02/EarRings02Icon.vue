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
      <path d="M4 14.0056C7.6 14.0056 6.4 18.0056 10 18.0056" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 14.0056C17.6 14.0056 16.4 18.0056 20 18.0056" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 20.9998C8.65685 20.9998 10 18.5382 10 15.5016C10 12.4651 8.65685 10.0035 7 10.0035C5.34315 10.0035 4 12.4651 4 15.5016C4 18.5382 5.34315 20.9998 7 20.9998Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17 20.9999C18.6569 20.9999 20 18.5383 20 15.5018C20 12.4653 18.6569 10.0037 17 10.0037C15.3431 10.0037 14 12.4653 14 15.5018C14 18.5383 15.3431 20.9999 17 20.9999Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.95511 7.2344C9.60461 7.03294 9.06061 6.71307 8.93297 4.78798C8.81979 3.08095 7.26883 2.90969 6.67606 3.03009C6.11908 3.14328 5.07565 3.73133 5.00769 4.95443C4.96211 5.77417 5.47047 6.56049 6.67279 7.03896C6.87541 7.1196 7.0183 7.30991 7.0183 7.52792V9.76224" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.937 7.2344C19.5865 7.03294 19.0425 6.71307 18.9149 4.78798C18.8017 3.08095 17.2508 2.90969 16.658 3.03009C16.101 3.14328 15.0576 3.73133 14.9896 4.95443C14.944 5.77417 15.4524 6.56049 16.6547 7.03896C16.8573 7.1196 17.0002 7.30991 17.0002 7.52792V9.76224" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ear-rings02
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for ear-rings02 (hugeicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ear-rings02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ear-rings02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ear-rings02 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-ear-rings02 2.5s ease-in-out infinite alternate;
}
</style>