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
      <path d="M23.305 11.95c-1.014-1.134-2.772-1.242-3.927-.248l-.67.577a2.48 2.48 0 0 1 1.274 2.309 2.493 2.493 0 0 1-2.403 2.35 2.488 2.488 0 0 1-2.564-2.484c.067-1.745 1.41-2.484 2.517-2.484l-2.745-6.504c-.59-1.396-2.215-2.054-3.631-1.477-.296.128-1.101.463-1.55 1.484l-2.149 4.994L5.35 5.486C4.765 4.09 3.134 3.432 1.718 4.009.295 4.586-.376 6.184.214 7.574l4.632 10.96c.59 1.397 2.215 2.055 3.631 1.477.437-.194 1.108-.53 1.55-1.483l2.149-4.994 2.108 4.987a2.756 2.756 0 0 0 1.644 1.53 2.83 2.83 0 0 0 2.806-.51l4.33-3.738a2.7 2.7 0 0 0 .241-3.853z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: netim
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for netim (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-netim {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-netim {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-netim 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-netim 3s ease-in-out infinite alternate;
}
</style>