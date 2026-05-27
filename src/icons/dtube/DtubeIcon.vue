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
      <path d="M0 1.6416v20.7168h8.5156c1.3133 0 2.4886-.1588 3.5371-.4766 1.038-.3177 1.9716-.7833 2.7871-1.4082 1.1545-.8896 2.0431-2.0456 2.668-3.4648.6143-1.4192.9316-3.0486.9316-4.8809-.0105-1.578-.243-3.0203-.709-4.3125-.466-1.2921-1.1116-2.3919-1.959-3.3027-.8366-.9109-1.8536-1.6108-3.0292-2.1191-1.1757-.4979-2.4784-.752-3.9082-.752zm5.2012 5.709l8.039 4.6601-8.039 4.6485zm15.9922 9.162c-1.4934 0-2.711 1.2177-2.711 2.711 0 1.4934 1.2176 2.711 2.711 2.711h.0957c1.4933 0 2.7109-1.2176 2.7109-2.711 0-1.4933-1.2176-2.711-2.711-2.711z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dtube
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dtube (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dtube {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dtube {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dtube 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dtube 3s ease-in-out infinite alternate;
}
</style>