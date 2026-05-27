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
      <path d="M21.46 2.172H2.54A2.548 2.548 0 0 0 0 4.712v14.575a2.548 2.548 0 0 0 2.54 2.54h18.92a2.548 2.548 0 0 0 2.54-2.54V4.713a2.548 2.548 0 0 0-2.54-2.54ZM10.14 16.465 5.524 19.15a1.235 1.235 0 1 1-1.242-2.137L8.9 14.33a1.235 1.235 0 1 1 1.241 2.136zm1.817-4.088h-.006a1.235 1.235 0 0 1-1.23-1.24l.023-5.32a1.236 1.236 0 0 1 1.236-1.23h.005a1.235 1.235 0 0 1 1.23 1.241l-.023 5.32a1.236 1.236 0 0 1-1.235 1.23zm8.17 6.32a1.235 1.235 0 0 1-1.688.453l-4.624-2.67a1.235 1.235 0 1 1 1.235-2.14l4.624 2.67a1.235 1.235 0 0 1 .452 1.688z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: k3s
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for k3s (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-k3s {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-k3s {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-k3s 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-k3s 3s ease-in-out infinite alternate;
}
</style>