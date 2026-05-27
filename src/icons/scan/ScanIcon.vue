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
      <path d="M23.363 9.13a5.8 5.8 0 0 1 0 5.285l-3.376 5.948a6.11 6.11 0 0 1-4.603 2.853h-6.76a6.09 6.09 0 0 1-4.605-2.83l-3.384-6.03a5.8 5.8 0 0 1 0-5.276l3.384-5.806A5.73 5.73 0 0 1 8.623.784h6.76a5.74 5.74 0 0 1 4.605 2.49zm-14.47 5.94a2.22 2.22 0 0 0-1.542.73 5.41 5.41 0 0 0 4.43 2.44 4.305 4.305 0 0 0 4.886-3.716c.124-3.02-2.04-3.834-4.264-4.248-1.12-.232-2.207-.382-2.207-1.427 0-.888.946-1.26 1.95-1.26a2.49 2.49 0 0 1 2.132 1.21l2.182-1.46a4.98 4.98 0 0 0-4.314-2.256c-2.298 0-4.513 1.27-4.662 3.683 0 2.821 2.04 3.759 4.048 4.066 1.319.183 2.489.43 2.489 1.535 0 1.302-1.012 1.6-2.15 1.6-1.658 0-1.658-.88-2.92-.88"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: scan
// Category: search
// Physics Presets: Dynamic kinetic adaptation for scan (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-scan {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-scan {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-scan 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-scan 3s ease-in-out infinite alternate;
}
</style>