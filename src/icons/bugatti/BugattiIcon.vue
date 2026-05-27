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
      <path d="M0 2.978h18.593c.021.004.042.012.063.013.436.019.863.09 1.279.218 1.459.451 2.507 1.367 3.117 2.772.454 1.046.5 2.259.316 3.156a4.634 4.634 0 0 1-1.37 2.482c-.014.014-.027.03-.04.045.021.026.052.04.077.061a4.774 4.774 0 0 1 1.951 3.564c.001.021.01.042.014.063v.79c-.005.027-.012.053-.014.08-.004.046-.002.093-.007.14a5.501 5.501 0 0 1-.21 1.047c-.398 1.278-1.167 2.262-2.336 2.924-.836.474-1.744.686-2.7.687-6.24.004-12.48.002-18.72.002v-4.74h2.988l.001 1.738c.134.016 7.226.01 7.286-.006v-4.668h-3.06v1.425c-.102.019-2.928.014-2.986-.004V8.912h2.986v1.424c.103.019 3.003.014 3.06-.003V5.976H3V7.51H.008Zm13.753 15.05h4.744c.254 0 .505-.023.75-.09.77-.21 1.3-.683 1.546-1.447a2.605 2.605 0 0 0-.007-1.636 2.068 2.068 0 0 0-1.12-1.274 2.553 2.553 0 0 0-1.092-.239h-4.82zm.003-12.058v4.377h4.397a2.5 2.5 0 0 0 .723-.103c.678-.203 1.147-.63 1.376-1.304.145-.428.163-.868.068-1.308-.161-.742-.598-1.251-1.313-1.515a2.711 2.711 0 0 0-.947-.147Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bugatti
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bugatti (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bugatti {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bugatti {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bugatti 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bugatti 3s ease-in-out infinite alternate;
}
</style>