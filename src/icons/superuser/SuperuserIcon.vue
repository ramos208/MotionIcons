<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-radar']"
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
      <path d="M2.523 0c-.223 0-.336.111-.336.28v23.439c0 .196.113.252.336.252h5.594c.224 0 .335-.084.307-.252v-1.483c0-.167-.14-.252-.363-.252H5.543c-.252 0-.363-.083-.363-.279V2.293c0-.196.112-.307.42-.307h2.488c.224 0 .336-.056.336-.252V.28C8.424.084 8.284 0 8.06 0H2.523zm8.8.02c-.224 0-.364.083-.364.279v1.398c0 .196.112.28.336.28h.447c2.154 0 3.664 1.706 3.664 3.412v4.42c0 1.37.98 2.517 2.518 3.216.112.056.139.14.139.196 0 .056-.027.112-.14.14-1.677.616-2.517 2.294-2.517 3.496v3.916c0 1.735-1.51 1.258-3.664 1.258h-.447c-.224 0-.336.084-.336.28v1.398c0 .196.14.28.363.28h.56c3.609 0 6.516.335 6.516-2.714v-4.082c0-1.426 1.008-2.295 2.49-2.714.672-.196.95-.307.923-.56v-1.173c0-.447-.308-.477-.868-.644-1.51-.532-2.515-1.342-2.515-2.74V5.64c0-3.05-2.937-5.621-6.545-5.621h-.56zm.183 8.396c-.336 0-.645.252-.645.588v1.342c0 .307.281.588.645.588h1.482c.336 0 .643-.253.643-.588V9.004c0-.308-.28-.588-.643-.588h-1.482Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: superuser
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for superuser (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-superuser {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-superuser {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-superuser 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-superuser 3s ease-in-out infinite alternate;
}
</style>