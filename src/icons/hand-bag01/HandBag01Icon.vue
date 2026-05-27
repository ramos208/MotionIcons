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
      <path d="M19.1737 12.9256V12.12C19.1737 10.6492 19.1737 9.91383 18.7234 9.45691C18.2732 9 17.5485 9 16.0992 9H7.90077C6.45147 9 5.72682 9 5.27658 9.45691C4.82634 9.91383 4.82634 10.6492 4.82634 12.12V12.9256C4.82634 13.3018 4.82634 13.4899 4.79345 13.6739C4.76056 13.858 4.69549 14.0341 4.56534 14.3863L4.34812 14.9742C3.16867 18.166 2.57895 19.7619 3.34312 20.8809C4.1073 22 5.78684 22 9.14591 22H14.8541C18.2132 22 19.8927 22 20.6569 20.8809C21.4211 19.7619 20.8313 18.166 19.6519 14.9742L19.4347 14.3863C19.3045 14.0341 19.2394 13.858 19.2065 13.6739C19.1737 13.4899 19.1737 13.3018 19.1737 12.9256Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16 11C16 5 13.8655 2 12 2C10.1345 2 8 5 8 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 16C13.2504 16 14.944 18.6278 13.3547 18.8954C12.5228 19.0354 11.4711 19.0344 10.6453 18.8954C9.056 18.6278 10.7496 16 12 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.94 17.0049C15.2105 16.8729 17.4477 16.1267 19.0551 14.9424" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.1147 17.0314C8.84417 16.8993 6.60699 16.1532 4.99961 14.9689" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hand-bag01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hand-bag01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hand-bag01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hand-bag01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hand-bag01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hand-bag01 3s ease-in-out infinite alternate;
}
</style>