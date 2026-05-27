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
      <path d="M.006 0v5.027H3.83V0h-.685v4.18H2.23V.074h-.677V4.18h-.87V0H.007zm5.623.004v14.154h8.658V7.254h8.791V.004H5.628zM3.145 6.076v3.9H.005v.85H3.83v-4.75h-.685zM23 9.926 5.389 18.502c2.371 4.857 8.236 6.874 13.1 4.506v.002C23.352 20.64 25.372 14.783 23 9.926zM.006 12.129v5.027H3.83V12.13h-.685v4.18H2.23v-4.106h-.677v4.106h-.87v-4.18H.007zm0 6.07v5.791h.687v-2.47H3.83v-.848H.693v-2.473H.006z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tele5
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tele5 (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tele5 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tele5 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tele5 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tele5 3s ease-in-out infinite alternate;
}
</style>