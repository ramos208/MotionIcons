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
      <path d="M8.17 11.335a.106.106 0 0 0-.173.022L1.754 23.466a.105.105 0 0 0 .032.133c.04.029.101.027.138-.012l8.89-9.11a.107.107 0 0 0 .005-.144l-2.649-3Zm9.76-3.519L.146.39C.041.346-.047.478.028.56l12.034 12.874a.11.11 0 0 0 .075.034.102.102 0 0 0 .075-.03L17.96 7.99a.106.106 0 0 0-.032-.174Zm6.047.547-2.188-4.405a.21.21 0 0 0-.189-.117h-8.77a.212.212 0 0 0-.08.408l10.96 4.405a.211.211 0 0 0 .268-.29z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: snapcraft
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for snapcraft (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-snapcraft {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-snapcraft {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-snapcraft 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-snapcraft 3s ease-in-out infinite alternate;
}
</style>