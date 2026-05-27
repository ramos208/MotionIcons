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
      <path d="M6.9044 17.2866a6.0512 6.0512 0 01-3.7595-1.3008c1.2048-2.7146 3.6545-6.3581 6.998-9.9166a6.0702 6.0702 0 012.2617 7.729c-1.0599-.49-2.0497-1.106-2.8876-1.8798l1.8307 3.4375a6.0582 6.0582 0 01-4.4433 1.9307M.8292 11.2115a6.0752 6.0752 0 016.0762-6.0772c.8998 0 1.7527.196 2.5226.546-3.2935 2.9095-5.8432 6.293-7.353 9.2177a6.0512 6.0512 0 01-1.2458-3.6875m12.3403 2.9126a6.862 6.862 0 00.6419-2.9126c0-2.3997-1.2248-4.5144-3.0846-5.7532a49.6072 49.6072 0 013.5825-3.3416A31.1727 31.1727 0 0010.11 5.0903a6.907 6.907 0 00-8.4368 10.6265C.3493 18.5795.1193 20.8781 1.285 21.654c1.2489.832 3.9625-.6769 5.5903-3.1345 0 0-2.5177 2.2736-3.9015 1.7517-.8519-.322-.8549-1.6248-.152-3.4925a6.871 6.871 0 004.0835 1.3378c1.8937 0 3.6065-.7599 4.8533-1.9917l.245.462c3.0095-.245 11.9963-.483 11.9963-.483 0-.431-5.9502-.04-10.8325-1.9797"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: boeing
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for boeing (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-boeing {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-boeing {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-boeing 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-boeing 3s ease-in-out infinite alternate;
}
</style>