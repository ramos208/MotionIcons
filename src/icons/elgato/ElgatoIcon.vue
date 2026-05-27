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
      <path d="m13.8818 8.3964.0261.0196 9.9494 5.7172c-.4884 2.729-1.9196 5.2223-4.0384 7.0253A11.9262 11.9262 0 0 1 12.097 24c-3.1925 0-6.1939-1.2477-8.4527-3.5144C1.3868 18.2188.1427 15.2044.1427 12c0-3.2042 1.244-6.2187 3.5015-8.4854C5.9019 1.248 8.9032 0 12.097 0c2.4394 0 4.7847.7333 6.783 2.1187 1.9526 1.354 3.4466 3.2357 4.3227 5.4422.1112.2829.2149.5736.3051.8657l-2.1255 1.2359a9.4924 9.4924 0 0 0-.2619-.8694c-1.354-3.8303-4.9813-6.4048-9.0237-6.4048C6.8171 2.3883 2.522 6.7005 2.522 12c0 5.2995 4.295 9.6115 9.5748 9.6115 2.052 0 4.0084-.6442 5.6596-1.8647 1.6172-1.1955 2.8036-2.8337 3.4309-4.7364l.0065-.0419L9.5906 8.3048v7.2256l4.0004-2.3138 2.06 1.1811-5.9962 3.4688-2.12-1.2126V7.1943l2.1174-1.2245 4.2309 2.4279-.0013-.0013"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: elgato
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for elgato (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-elgato {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-elgato {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-elgato 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-elgato 3s ease-in-out infinite alternate;
}
</style>