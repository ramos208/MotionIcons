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
      <path d="M.225 5.549 0 5.778v2.484l.253.25h2.912c3.16 0 3.252.003 3.75.146 1.053.3 1.658 1.022 1.893 2.256.052.27.059.395.06 1.034 0 .635-.008.766-.058 1.044-.256 1.401-.98 2.149-2.308 2.382-.252.045-.446.05-2.14.05H2.497l-.013-2.335-.014-2.335-.222-.207H.227L0 10.769v7.379l.253.249h2.774c1.526-.001 2.96-.013 3.184-.027 1.906-.117 3.257-.803 4.114-2.09.512-.77.81-1.654.98-2.905.06-.456.07-2.266.012-2.736-.141-1.158-.44-2.1-.9-2.84-.67-1.077-1.743-1.81-3.056-2.087-.708-.15-.514-.142-3.951-.153Zm12.614.002-.233.232.01 4.94c.008 4.933.008 4.938.065 5.229.086.439.155.66.298.96.394.828.996 1.27 2.008 1.475.206.042.581.047 4.491.055l4.267.01L24 18.2v-2.489l-.24-.236-3.878-.013-3.878-.013-.152-.062a1.03 1.03 0 0 1-.601-.605c-.133-.35-.13-.258-.131-4.775l-.001-4.226-.23-.23h-1.026z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: debridlink
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for debridlink (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-debridlink {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-debridlink {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-debridlink 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-debridlink 3s ease-in-out infinite alternate;
}
</style>