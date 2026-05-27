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
      <path d="M16.23881 21.91267c0 1.04353-.5217 2.08705-4.17383 2.08705-3.65226 0-4.17395-1.04365-4.17395-2.08705 0-1.56521 1.04352-2.6086 4.17395-2.6086s4.17383 1.04339 4.17383 2.6086zM7.89103-.00038c2.08691 0 10.43483 6.26087 10.43483 11.47835 0 3.52136-1.65048 5.06209-3.09492 5.73623-1.09417.5108-1.39726-.17027-.78877-1.21866.409-.7044.75325-1.55688.75325-2.43065 0-1.56522-.52182-2.60874-1.56522-3.65214-1.04352-1.04352-2.38385-1.56521-3.13043-1.56521-1.04353 0-1.56522 3.06697-1.56522 4.69565 0 1.29764.3872 2.4663.77658 3.31301.3672.79877.05988 1.34726-.76363 1.04442-.89954-.33079-1.97832-.98377-2.6217-2.27064-1.04351-2.08679-.52182-5.09017-.52182-7.82597 0-4.17395 0-7.30426 2.08705-7.30426z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: niri
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for niri (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-niri {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-niri {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-niri 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-niri 3s ease-in-out infinite alternate;
}
</style>