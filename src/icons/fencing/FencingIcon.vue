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
      <path d="M6.88673 15.6009L2.72303 18.5907C2.56872 18.7001 2.42869 18.8285 2.30621 18.9728C1.33417 20.1179 2.8868 21.6661 4.03001 20.6924C4.17151 20.5719 4.29775 20.4344 4.40576 20.283L7.38448 16.0995M9.01217 14.006C7.05577 12.0464 4.94319 13.6542 4.94319 13.6542C4.94319 13.6542 5.9327 14.6453 7.15333 15.868C8.37395 17.0906 9.31531 18.0335 9.31531 18.0335C9.31531 18.0335 10.9686 15.9657 9.01217 14.006ZM9.01217 14.006L20 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.1133 15.6009L21.277 18.5907C21.4313 18.7001 21.5713 18.8285 21.6938 18.9728C22.6658 20.1179 21.1132 21.666 19.97 20.6924C19.8285 20.5719 19.7023 20.4344 19.5942 20.283L16.6155 16.0995M14.9878 14.006C16.9442 12.0464 19.0568 13.6542 19.0568 13.6542C19.0568 13.6542 18.0673 14.6453 16.8467 15.868C15.626 17.0906 14.6847 18.0335 14.6847 18.0335C14.6847 18.0335 13.0314 15.9657 14.9878 14.006ZM14.9878 14.006L4 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fencing
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for fencing (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fencing {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fencing {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fencing 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fencing 3s ease-in-out infinite alternate;
}
</style>