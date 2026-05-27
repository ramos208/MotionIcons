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
      <path d="M1.38 12.94l.576-.5 1.273 1.698h1.835l-2.001-2.593 1.85-1.683h-1.82L1.38 11.545V9.862H0v4.276h1.38z M7.353 9.726c-1.455 0-2.683.5-2.683 2.274s1.228 2.274 2.683 2.274 2.684-.5 2.684-2.274-1.228-2.274-2.684-2.274zm0 3.593c-.728 0-1.228-.41-1.228-1.319 0-.894.5-1.319 1.228-1.319.743 0 1.228.425 1.228 1.32 0 .894-.5 1.318-1.228 1.318zM11.795 14.138v-1.653h2.365v-.925h-2.365v-.742h2.547v-.956h-3.926v4.276zM22.21 11.91l1.593-2.063h-1.638L21.407 11l-.758-1.153h-1.637l1.592 2.062-1.607 2.001-1.668-4.048h-1.683l-1.759 4.276h1.471l.243-.698h1.804l.242.698h2.896l.88-1.289.879 1.289H24zm-6.276.651l.576-1.622h.015l.577 1.622z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: kofax
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for kofax (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-kofax {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-kofax {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-kofax 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-kofax 3s ease-in-out infinite alternate;
}
</style>