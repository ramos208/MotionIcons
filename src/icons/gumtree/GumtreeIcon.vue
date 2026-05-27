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
      <path d="M18.846 6.582a.698.698 0 0 1-.333-.599C18.181 2.66 15.39 0 12 0 8.609 0 5.75 2.593 5.485 5.983a.796.796 0 0 1-.332.599C3.49 7.778 2.36 9.707 2.36 11.9c0 2.991 2.061 5.584 4.853 6.316.465.133.998.2 1.13.066.333-.2.798-1.862.599-2.194-.134-.2-.533-.399-1.064-.532-1.662-.465-2.86-1.928-2.86-3.723 0-.997.4-1.861.998-2.592a2.927 2.927 0 0 1 .998-.798c.73-.4 1.13-1.13 1.13-1.928 0-.4.066-.798.2-1.196.531-1.53 1.927-2.66 3.656-2.66 1.728 0 3.125 1.13 3.656 2.66.132.399.2.798.2 1.196 0 .798.397 1.529 1.13 1.928.398.2.664.465.997.798a3.918 3.918 0 0 1 .997 2.592 3.859 3.859 0 0 1-3.855 3.856c-2.46 0-4.388 1.995-4.388 4.455v2.526c0 .465.066.997.2 1.13.266.267 1.995.267 2.26 0 .133-.133.2-.665.2-1.13v-2.593c0-.93.797-1.728 1.728-1.728 3.59 0 6.515-2.925 6.515-6.515-.002-2.128-1.133-4.056-2.794-5.252z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gumtree
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gumtree (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gumtree {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gumtree {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gumtree 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gumtree 3s ease-in-out infinite alternate;
}
</style>