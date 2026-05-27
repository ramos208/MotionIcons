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
      <path d="M13.5 19.5V11.5C13.5 10.5572 13.5 10.0858 13.2071 9.79289C12.9142 9.5 12.4428 9.5 11.5 9.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V19.5C9.5 20.4428 9.5 20.9142 9.79289 21.2071C10.0858 21.5 10.5572 21.5 11.5 21.5C12.4428 21.5 12.9142 21.5 13.2071 21.2071C13.5 20.9142 13.5 20.4428 13.5 19.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.5 12.5V19.5C20.5 20.4428 20.5 20.9142 20.2071 21.2071C19.9142 21.5 19.4428 21.5 18.5 21.5C17.5572 21.5 17.0858 21.5 16.7929 21.2071C16.5 20.9142 16.5 20.4428 16.5 19.5V12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.4375 9.16667L17.4375 3.83333M19 3.83333V2.5M19 10.5V9.16667M17.4375 6.5H20.5625M20.5625 6.5C21.0803 6.5 21.5 6.94772 21.5 7.5V8.16667C21.5 8.71895 21.0803 9.16667 20.5625 9.16667H16.5M20.5625 6.5C21.0803 6.5 21.5 6.05228 21.5 5.5V4.83333C21.5 4.28105 21.0803 3.83333 20.5625 3.83333H16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.5 19.5V14.5C6.5 13.5572 6.5 13.0858 6.20711 12.7929C5.91421 12.5 5.44281 12.5 4.5 12.5C3.55719 12.5 3.08579 12.5 2.79289 12.7929C2.5 13.0858 2.5 13.5572 2.5 14.5V19.5C2.5 20.4428 2.5 20.9142 2.79289 21.2071C3.08579 21.5 3.55719 21.5 4.5 21.5C5.44281 21.5 5.91421 21.5 6.20711 21.2071C6.5 20.9142 6.5 20.4428 6.5 19.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bitcoin-graph
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bitcoin-graph (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bitcoin-graph {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bitcoin-graph {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bitcoin-graph 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bitcoin-graph 3s ease-in-out infinite alternate;
}
</style>