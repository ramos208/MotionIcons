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
      <path d="M6.75 13.034H4.5l-2.25 2.257v-2.257H0v6.018h2.25v-2.257l2.25 2.257h3l-3.375-3.385zm3 0H7.5v6.018h6v-1.518H9.75zm10.5 0l-1.125 3.385L18 13.034h-3.75v6.018h2.25v-4.514l1.5 4.514h2.25l1.5-4.514v4.514H24v-6.018zM10.5 9.649c.725 0 1.313-.589 1.313-1.316s-.588-1.317-1.313-1.317-1.312.589-1.312 1.317.587 1.316 1.312 1.316zm1.688-1.316c0 .727.588 1.316 1.312 1.316.725 0 1.313-.589 1.313-1.316s-.588-1.317-1.313-1.317-1.312.589-1.312 1.317zm2.999 0c0 .727.588 1.316 1.312 1.316.725 0 1.313-.589 1.313-1.316s-.588-1.317-1.313-1.317-1.312.589-1.312 1.317zm-6.375 0c0-.727-.588-1.317-1.313-1.317s-1.312.589-1.312 1.317.588 1.316 1.313 1.316 1.312-.589 1.312-1.316zM7.5 10.025h9v1.505h-9zm4.125-2.821h.75v-.752h.75V5.7h-.75v-.753h-.75V5.7h-.75v.752h.75z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: klm
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for klm (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-klm {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-klm {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-klm 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-klm 3s ease-in-out infinite alternate;
}
</style>