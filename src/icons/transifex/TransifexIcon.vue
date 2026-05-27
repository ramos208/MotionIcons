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
      <path d="m20.073 12.851-2.758-2.757 3.722-3.659a.33.33 0 0 1 .467.003l2.27 2.309a.33.33 0 0 1-.004.468zm0 0h-.001zm-9.04-6.433 12.87 12.869c.129.13.129.34 0 .469l-2.289 2.289a.331.331 0 0 1-.468 0l-5.168-5.168-2.863 2.815c-.604.593-1.244 1.159-1.975 1.591a7.037 7.037 0 0 1-2.248.83c-2.191.42-4.557-.047-6.303-1.468A7.065 7.065 0 0 1 0 15.207V2.069a.33.33 0 0 1 .331-.33h3.237a.33.33 0 0 1 .331.33v4.125H6.65c.178 0 .323.145.323.323v3.617a.323.323 0 0 1-.323.323H3.899v4.75c0 1.272.808 2.429 1.988 2.893.753.295 1.617.321 2.397.131.852-.206 1.484-.717 2.097-1.319l2.839-2.792-4.945-4.945a.331.331 0 0 1 0-.468l2.289-2.289a.333.333 0 0 1 .469 0"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: transifex
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for transifex (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-transifex {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-transifex {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-transifex 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-transifex 3s ease-in-out infinite alternate;
}
</style>