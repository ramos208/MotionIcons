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
      <path d="M24 15.366V6.922l-2.188-1.998-2.426 2.569V5.66h-.357v2.236l-.571.595V6.589L16.65 4.924l-2.164 2.212.261.261.547-.547.69.619v2.093h-.119c-1.046 0-1.689.714-1.689 1.689 0 .5.072.737.143.904h.238a1.033 1.033 0 011.023-.833h.404v3.782c-1.26.428-1.998 1.522-2.14 3.02l.166.096c.57-.69 1.308-1.118 1.974-1.284v5.209l.048.023 2.26-2.069 1.07 1 .047-.025v-4.043c.476.142.904.475 1.213.904zm-2.426.523c-.571-.57-1.26-.88-2.165-.999V7.85l1.023-1.095 1.142 1.047zm-2.545 4.4l-.571-.523V8.825l.57-.571zm-5.78-6.017V7.04L11.06 4.9 8.8 7.255 6.399 4.9 4.115 7.302v-.785c0-2.021-1.26-1.688-1.26-2.997 0-.832.523-1.237 1.165-1.546l-.143-.142C1.927 2.522.88 3.544.88 4.662c0 1 .761 1.047.761 2.212v2.973C.214 9.847 0 11.18 0 11.703c0 .309.048.594.095.737h.19c.072-.404.31-.69.81-.69h.546v3.806l2.807 2.426 2.07-2.33 2.71 2.33zm-2.45 1.879l-1.927-1.642V7.73l.833-.832 1.094 1.094zm-4.424-.904l-.595.69-1.665-1.428V7.802l.904-.928L6.375 8.23Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: thewashingtonpost
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for thewashingtonpost (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-thewashingtonpost {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-thewashingtonpost {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-thewashingtonpost 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-thewashingtonpost 3s ease-in-out infinite alternate;
}
</style>