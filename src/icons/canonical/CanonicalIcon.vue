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
      <path d="M4.427 0v24h15.146V0Zm9.994 10.25a1.568 1.568 0 0 1 1.567 1.568 1.568 1.568 0 0 1-1.567 1.568 1.568 1.568 0 0 1-1.568-1.568 1.568 1.568 0 0 1 1.568-1.568zm-2.157.16c.122 0 .245.005.369.015a2.268 2.268 0 0 0-.476 1.271 3.825 3.825 0 0 0-3.08 1.647 2.243 2.243 0 0 0-1.308-.335 5.159 5.159 0 0 1 4.495-2.599zm4.242 2.296a5.14 5.14 0 0 1 .74 3.905 5.139 5.139 0 0 1-.997 2.113 2.25 2.25 0 0 0-.75-1.167 3.837 3.837 0 0 0 .125-3.818 2.26 2.26 0 0 0 .882-1.033zm-8.616.982a1.568 1.568 0 0 1 1.568 1.568 1.568 1.568 0 0 1-1.568 1.568 1.568 1.568 0 0 1-1.567-1.568 1.568 1.568 0 0 1 1.567-1.568Zm.933 3.618a3.818 3.818 0 0 0 2.604 1.986c.127.027.256.048.385.063.01.476.17.932.459 1.31a5.161 5.161 0 0 1-1.114-.114 5.105 5.105 0 0 1-3.675-3.08 2.26 2.26 0 0 0 1.34-.165zm5.244.427a1.568 1.568 0 0 1 1.568 1.568 1.568 1.568 0 0 1-1.568 1.568A1.568 1.568 0 0 1 12.5 19.3a1.568 1.568 0 0 1 1.568-1.568z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: canonical
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for canonical (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-canonical {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-canonical {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-canonical 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-canonical 3s ease-in-out infinite alternate;
}
</style>