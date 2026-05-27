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
      <path d="M2.77 0A2.763 2.763 0 0 0 0 2.77v18.46A2.763 2.763 0 0 0 2.77 24h18.46A2.763 2.763 0 0 0 24 21.23V2.77A2.763 2.763 0 0 0 21.23 0Zm.922 1.846h5.539c1.023 0 1.846.824 1.846 1.846v16.616a1.842 1.842 0 0 1-1.846 1.846H3.692a1.842 1.842 0 0 1-1.846-1.846V3.692c0-1.022.824-1.846 1.846-1.846zm11.077 0h5.539c1.022 0 1.846.824 1.846 1.846v5.539a1.842 1.842 0 0 1-1.846 1.846h-5.539a1.842 1.842 0 0 1-1.846-1.846V3.692c0-1.022.823-1.846 1.846-1.846zm1.226 1.846-.946.961h2.964c.148 0 .29-.005.423-.012a.78.78 0 0 0 .312-.089L14.77 8.528l.725.703 3.923-3.941a1.031 1.031 0 0 0-.1.322 3.265 3.265 0 0 0-.023.38v3.071l1.014-1.004V3.692Zm-1.226 9.231h5.539c1.022 0 1.846.823 1.846 1.846v5.539a1.842 1.842 0 0 1-1.846 1.846h-5.539a1.842 1.842 0 0 1-1.846-1.846v-5.539c0-1.023.823-1.846 1.846-1.846z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: glance
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for glance (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-glance {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-glance {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-glance 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-glance 3s ease-in-out infinite alternate;
}
</style>