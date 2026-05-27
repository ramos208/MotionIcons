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
      <path d="M3.785 16.14.124 21.287c-.311.437 0 1.044.536 1.044h22.681c.535 0 .846-.608.536-1.045l-4.2-5.927-1.979 1.161c-.037 1.063-.907 1.913-1.976 1.913-1.092 0-1.977-.887-1.977-1.982 0-.055.003-.11.007-.165l-3.173-2.328c-.341.278-.775.445-1.249.445-.56 0-1.065-.234-1.425-.609l-4.12 2.346Zm7.693-14.194L3.813 12.732c-.222.314-.132.751.197.95l.691.417 2.66-1.515a1.747 1.747 0 0 1-.007-.163c0-1.095.885-1.982 1.977-1.982 1.091 0 1.976.887 1.976 1.982 0 .138-.014.273-.041.403l3.047 2.237c.359-.366.858-.592 1.409-.592.634 0 1.198.299 1.56.764l2.831-1.66c.219-.222.258-.581.068-.849L12.553 1.948c-.262-.371-.812-.373-1.075-.002Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pinescript
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pinescript (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pinescript {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pinescript {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pinescript 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pinescript 3s ease-in-out infinite alternate;
}
</style>