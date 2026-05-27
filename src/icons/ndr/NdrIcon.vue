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
      <path d="M5.184 19.325l-3.137-5.648v5.649H0V9.64h2.149l3.267 6.025V9.641h2.047v9.684zm2.279-9.684V.537H8.61v9.104zm0 13.822v-4.138H8.61v4.138zM12.037 9.64c2.395 0 3.63 1.147 3.63 3.368v2.918c0 2.28-1.19 3.398-3.63 3.398H8.61V9.641zm-.19 7.855c1.163 0 1.728-.581 1.728-1.771v-2.498c0-1.176-.58-1.757-1.727-1.757h-1.03v6.026zm9.845 1.83l-1.728-3.718h-1.161v3.717h-2.15V9.641h3.384c2.381 0 3.513.944 3.513 2.962 0 1.335-.493 2.134-1.597 2.613L24 19.326zm-1.568-5.475c.857 0 1.365-.494 1.365-1.32 0-.858-.377-1.177-1.365-1.177H18.76v2.498h1.365z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ndr
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ndr (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ndr {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ndr {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ndr 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ndr 3s ease-in-out infinite alternate;
}
</style>