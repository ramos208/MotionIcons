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
      <path d="M0 0v24h16.998A7.002 7.002 0 0 0 24 16.998V0Zm18.707 15.129h.896v.895h-.896zm-.281-3.857h1.455v1.456h-1.455Zm-.224-3.801h1.903v1.905h-1.903Zm-3.073 11.234h.895v.896h-.896zm-.28-3.902h1.456v1.457h-1.456zm-.224-3.755h1.906v1.904h-1.904Zm.224-1.897V7.696h1.456V9.15Zm-6.874 9.554h.896v.896h-.896Zm-.28-3.856h1.456v1.454H7.695Zm.28-2.401v-.896h.896v.896zm-.28-4.752h1.456V9.15H7.695ZM4.4 18.706h.897v.895h-.897Zm0-3.577h.897v.895h-.897Zm-.28-3.857h1.455v1.456H4.12Zm-.224-3.801h1.904v1.905H3.895Zm-.837-4.413H20.94v3.577h-7.153v14.307h-3.576V6.635H3.058Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: thanos
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for thanos (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-thanos {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-thanos {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-thanos 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-thanos 3s ease-in-out infinite alternate;
}
</style>