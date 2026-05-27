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
      <path d="M18.918 17.48c-.126 2.727-2.384 4.696-5.364 4.696H7.34v-6.123l-2.185-.957V24h8.381c4.334 0 7.549-2.962 7.549-6.881v-.163c-.65.235-1.372.415-2.167.524Zm1.355-9.501C18.611 4.313 17.726.989 15.432.213c-1.336-.452-2.005-.091-2.637.217-.199.09-.235.361-.072.505.361.307.813.687 1.336 1.174-1.95-1.138-7.333-2.835-7.874-.776-.488 1.86-1.319 4.587-1.319 4.587S.603 5.487.116 7.293c-.488 1.806 3.323 5.274 9.627 7.134 6.303 1.861 11.198 1.373 13.311-.921 2.113-2.294.072-5.473-2.781-5.527Zm-1.247.036c-.487.47-2.077 1.68-5.563 1.427-3.738-.271-6.809-2.474-7.604-3.088-.126-.091-.18-.235-.126-.398.054-.18.126-.469.253-.849.072-.234.343-.343.542-.216 1.571.903 4.1 2.221 6.791 2.402 2.402.163 3.847-.542 4.786-1.066.199-.108.452-.018.542.199l.47 1.156c.036.162.018.325-.091.433Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cyberdefenders
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cyberdefenders (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cyberdefenders {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cyberdefenders {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cyberdefenders 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cyberdefenders 3s ease-in-out infinite alternate;
}
</style>