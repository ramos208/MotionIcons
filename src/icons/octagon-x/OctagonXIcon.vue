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
      <path d="M14.9999 9L8.99994 15M8.99994 9L14.9999 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.6863 22H11.3137C9.67871 22 8.8612 22 8.12612 21.6955C7.39104 21.391 6.81297 20.813 5.65685 19.6569L4.34315 18.3431C3.18702 17.187 2.60896 16.609 2.30448 15.8739C2 15.1388 2 14.3213 2 12.6863V11.3137C2 9.67871 2 8.8612 2.30448 8.12612C2.60896 7.39104 3.18702 6.81298 4.34315 5.65685L5.65685 4.34315C6.81297 3.18702 7.39104 2.60896 8.12612 2.30448C8.8612 2 9.67871 2 11.3137 2H12.6863C14.3213 2 15.1388 2 15.8739 2.30448C16.609 2.60896 17.187 3.18702 18.3431 4.34315L19.6569 5.65685C20.813 6.81297 21.391 7.39104 21.6955 8.12612C22 8.8612 22 9.67871 22 11.3137V12.6863C22 14.3213 22 15.1388 21.6955 15.8739C21.391 16.609 20.813 17.187 19.6569 18.3431L18.3431 19.6569C17.187 20.813 16.609 21.391 15.8739 21.6955C15.1388 22 14.3213 22 12.6863 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: octagon-x
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for octagon-x (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-octagon-x {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-octagon-x {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-octagon-x 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-octagon-x 3s ease-in-out infinite alternate;
}
</style>