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
      <path d="M21.9986 8.83415H21.0513C20.4058 8.83415 19.7775 8.62541 19.2595 8.23886L14.3566 4.58042C13.7911 4.15849 13.0896 3.82148 12.4419 4.10005C11.3935 4.551 10.7124 5.82324 12.2843 7.38045L13.9937 8.97804L3.57057 8.97804C1.52742 9.03427 1.42614 12.3231 3.57057 12.4637H9.5106C9.31946 13.9441 10.3629 20.9177 14.7831 19.9012C14.9931 19.8529 15.2063 19.8047 15.4165 19.7576C16.3353 19.5519 17.9727 18.9439 18.93 18.2735C19.9266 17.5755 21.5155 17.8218 22 17.8218" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hand-pointing-left01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hand-pointing-left01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hand-pointing-left01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hand-pointing-left01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hand-pointing-left01 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hand-pointing-left01 3s ease-in-out infinite alternate;
}
</style>