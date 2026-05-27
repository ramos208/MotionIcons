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
      <path d="M2.50003 13.5V6.5H21.5V13.5C21.5 17.2712 21.5 19.1569 20.3285 20.3284C19.1569 21.5 17.2713 21.5 13.5 21.5H10.5C6.72879 21.5 4.84318 21.5 3.6716 20.3284C2.50003 19.1569 2.50003 17.2712 2.50003 13.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.50003 6.5L3.10003 5.7C4.27774 4.12972 4.86659 3.34458 5.71118 2.92229C6.55576 2.5 7.53718 2.5 9.50003 2.5H14.5C16.4629 2.5 17.4443 2.5 18.2889 2.92229C19.1335 3.34458 19.7223 4.12972 20.9 5.7L21.5 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 14.5C15 14.5 12.7906 17.5 12 17.5C11.2095 17.5 9.00003 14.5 9.00003 14.5M12 17L12 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: download05
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for download05 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-download05 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, 6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, 4px) skew(0deg); }
}

@keyframes motion-ai-idle-download05 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-download05 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-download05 3s ease-in-out infinite alternate;
}
</style>