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
      <path d="M10.18 0c-2.081 0-3.807 1.608-4 3.64H4.019A4.033 4.033 0 0 0 0 7.66v4.017h1.498a2.13 2.13 0 0 1 2.143 2.144 2.13 2.13 0 0 1-2.143 2.143H0V24h8.036v-1.498a2.13 2.13 0 0 1 2.144-2.143 2.13 2.13 0 0 1 2.143 2.143V24h4.018a4.03 4.03 0 0 0 4.018-4.018v-2.163C22.392 17.627 24 15.901 24 13.821s-1.608-3.807-3.64-4V7.66a4.03 4.03 0 0 0-4.019-4.018h-2.162C13.986 1.608 12.26 0 10.179 0m0 1.875a2.13 2.13 0 0 1 2.143 2.143v1.498h4.018a2.13 2.13 0 0 1 2.143 2.143v4.018h1.498a2.13 2.13 0 0 1 2.143 2.144 2.13 2.13 0 0 1-2.143 2.143h-1.498v4.018a2.13 2.13 0 0 1-2.143 2.143h-2.162c-.193-2.033-1.919-3.64-4-3.64s-3.806 1.607-3.998 3.64H1.875V17.82c2.033-.192 3.64-1.918 3.64-3.998s-1.607-3.807-3.64-4V7.66a2.13 2.13 0 0 1 2.143-2.143h4.018V4.018a2.13 2.13 0 0 1 2.144-2.143"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wxt
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for wxt (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-wxt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wxt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wxt 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-wxt 3s ease-in-out infinite alternate;
}
</style>