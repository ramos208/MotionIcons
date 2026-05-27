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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47"/><path d="M3.186 10.209a9 9 0 0 0 0 3.508"/><path d="M4.5 16.962a9 9 0 0 0 2.47 2.495"/><path d="M10.209 20.814a9 9 0 0 0 3.5 0"/><path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47"/><path d="M20.814 13.791a9 9 0 0 0 0 -3.508"/><path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495"/><path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02"/><path d="M12 8l-2 4h4l-2 4"/><path d="M12 21a9 9 0 0 0 0 -18"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: recharging
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for recharging (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-recharging {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-recharging {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-recharging 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-recharging 3s ease-in-out infinite alternate;
}
</style>