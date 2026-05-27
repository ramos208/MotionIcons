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
      <path d="M21.9359 12.8119L20.9746 8.18614C20.6575 6.66014 20.4989 5.89714 19.9475 5.44857C19.3962 5 18.6169 5 17.0583 5H6.94174C5.38314 5 4.60384 5 4.05247 5.44857C3.50109 5.89714 3.34253 6.66014 3.02541 8.18614L2.06412 12.8119C1.86911 13.7503 2.08272 14.7586 3.20996 14.9718C3.87746 15.0981 4.5865 14.9574 5.26274 15.0369C6.77164 15.2142 8.12412 16.0187 8.96376 17.2382C9.69923 18.5906 10.405 19 12 19C13.595 19 14.3008 18.5906 15.0362 17.2382C15.8759 16.0187 17.2284 15.2142 18.7373 15.0369C19.4135 14.9574 20.1225 15.0981 20.79 14.9718C21.9173 14.7586 22.1309 13.7503 21.9359 12.8119Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16 16L13.8914 8M8 16L10.1086 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3.5 8H20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: underpants02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for underpants02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-underpants02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-underpants02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-underpants02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-underpants02 3s ease-in-out infinite alternate;
}
</style>