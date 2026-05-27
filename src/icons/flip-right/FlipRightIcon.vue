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
      <path d="M22 9.66676V14.3334M16.5 3.01509C16.0004 2.99793 15.5001 2.99705 15 2.99855M16.5 20.9849C16.0004 21.0021 15.5001 21.003 15 21.0015M19.2547 3.53709C20.213 4.02122 20.9914 4.80249 21.4718 5.76305M21.5 18.1797C21.0221 19.1665 20.232 19.9692 19.2547 20.4629" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 5.5049C12 3.54683 11.3622 3.00683 9.5 3.00683C6.96832 3.00683 4.04633 2.7569 2.60289 5.25509C2 6.29851 2 7.69935 2 10.501V13.4987C2 16.3004 2 17.7012 2.60289 18.7447C4.04633 21.2429 6.96832 20.9929 9.5 20.9929C11.3622 20.9929 12 20.4529 12 18.4949V5.5049Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: flip-right
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for flip-right (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-flip-right {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-flip-right {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-flip-right 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-flip-right 3s ease-in-out infinite alternate;
}
</style>