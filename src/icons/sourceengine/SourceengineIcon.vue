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
      <path d="M19.865.716h-.26L7.64.784a12.76 12.76 0 0 0-7.01 1.69l.002.001A1.211 1.211 0 0 0 1.21 4.75c.35 0 .662-.148.883-.383a10.321 10.321 0 0 1 8.818-.462c5.275 2.165 7.805 8.22 5.64 13.495a10.283 10.283 0 0 1-2.495 3.613l.01.013a1.21 1.21 0 1 0 1.63 1.69 12.638 12.638 0 0 0 3.04-4.419c.05-.118 4.952-12.06 4.964-12.093A3.992 3.992 0 0 0 21.522.996c-.55-.226-1.064-.278-1.657-.28zM6.067 6.851c-2.635 0-5.342.807-5.342 3.941 0 2.16 1.946 2.85 3.893 3.277 2.422.522 3.823.878 3.823 1.9 0 1.187-1.235 1.567-2.208 1.567-1.33 0-2.564-.594-2.588-2.066H.44c.143 3.252 2.92 4.32 5.77 4.32 2.801 0 5.603-1.044 5.603-4.273 0-2.28-1.923-2.992-3.894-3.443-1.923-.45-3.823-.617-3.823-1.828 0-.997 1.116-1.14 1.877-1.14 1.21 0 2.207.357 2.302 1.662h3.205c-.26-3.015-2.73-3.917-5.413-3.917z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sourceengine
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for sourceengine (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sourceengine {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sourceengine {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sourceengine 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sourceengine 3s ease-in-out infinite alternate;
}
</style>