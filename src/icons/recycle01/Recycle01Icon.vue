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
      <path d="M17.9999 15.9988C16.4999 16.999 14.6842 18.9772 14 22M15 19.3372C12.6321 14.0106 17.4087 12.2141 21.0443 12.0143C21.4831 11.9902 21.7025 11.9782 21.86 12.1336C22.0176 12.289 22.0085 12.5106 21.9903 12.9536C21.8394 16.638 20.3286 21.707 15 19.3372Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 20H6.02099C3.73502 20 2.59203 20 2.15185 19.2655C1.71168 18.531 2.2625 17.5428 3.36416 15.5666L4.79185 13.0054C5.53109 11.6793 5.90071 11.0162 6.47924 11.0003C7.05776 10.9844 7.46426 11.6261 8.27725 12.9095L8.97855 14.0166" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 8.03384L8.99165 6.15531C10.4526 3.38777 11.1831 2.004 12.2929 2.00001C13.4027 1.99601 14.1419 3.37449 15.6204 6.13145L15.8647 6.58709C16.7821 8.29766 17.2407 9.15294 16.8728 9.68491C16.5048 10.2169 15.6024 10.0032 13.7975 9.5758L13.715 9.55628" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: recycle01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for recycle01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-recycle01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-recycle01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-recycle01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-recycle01 3s ease-in-out infinite alternate;
}
</style>