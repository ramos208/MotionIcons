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
      <path d="M10.189 0a3.784 3.784 0 0 0-3.055 5.93l1.741 2.562a1.855 1.855 0 0 0 3.334-.13l1.454-2.929h-.006A3.784 3.784 0 0 0 10.189 0zm9.173 4.496a4.235 4.235 0 0 0-1.662.306 4.23 4.23 0 0 0-1.817 1.396l-2.214 2.837c-.025.032-.05.063-.074.096l-.01.012a2.088 2.088 0 0 0 1.509 3.306l3.614.536-.003-.007a4.259 4.259 0 0 0 4.532-5.807 4.264 4.264 0 0 0-3.875-2.675zM3.586 7.242A3.154 3.154 0 0 0 .55 9.628a3.151 3.151 0 0 0 3.903 3.804l2.539-.737a1.545 1.545 0 0 0 .742-2.673L5.79 8.118v.005a3.13 3.13 0 0 0-2.204-.881zM13.9 13.959a1.886 1.886 0 0 0-1.858 2.233l.387 3.263.005-.003a3.846 3.846 0 0 0 6.134 2.574 3.846 3.846 0 0 0-.9-6.645l-2.877-1.197a1.89 1.89 0 0 0-.89-.225zm-5.55.08c-.377 0-.75.104-1.076.3L4.06 16.018l.006.003a4.21 4.21 0 0 0-1.593 1.485 4.24 4.24 0 0 0 1.342 5.843 4.239 4.239 0 0 0 5.845-1.332 4.21 4.21 0 0 0 .647-2.172l.108-3.45a2.079 2.079 0 0 0-2.062-2.356z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: icq
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for icq (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-icq {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-icq {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-icq 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-icq 3s ease-in-out infinite alternate;
}
</style>