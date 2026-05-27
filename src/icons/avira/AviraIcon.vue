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
      <path d="M24 23.414a.586.586 0 0 1-.586.587H.585A.586.586 0 0 1 0 23.414V.586c0-.324.262-.587.585-.587h22.829c.325 0 .586.263.586.587v22.828Zm-4.971-9.675-.04-.044-1.323 1.256a.925.925 0 0 1-1.342 1.272 1.234 1.234 0 0 1-.118-.122l-3.56-3.753 4.857-4.609c-3.034-2.858-7.795-2.984-10.765-.111-2.969 2.874-3.337 7.527-.539 10.838l5.106-4.845 3.748 3.952a2.777 2.777 0 0 0 1.995.74 2.681 2.681 0 0 0 1.772-.742c.559-.526.894-1.272.887-2.022a2.702 2.702 0 0 0-.678-1.81Zm-4.573-5.55-7.65 7.259c-2.576-4.553 2.815-10.009 7.65-7.259Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: avira
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for avira (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-avira {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-avira {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-avira 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-avira 3s ease-in-out infinite alternate;
}
</style>