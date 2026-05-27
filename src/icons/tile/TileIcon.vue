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
      <path d="M7.486 8.483h1.617a.16.16 0 0 1 .15.15v9.706a.16.16 0 0 1-.15.15H7.486a.162.162 0 0 1-.15-.15V8.633c0-.075.075-.15.15-.15zm3.536-2.972h1.617c.076 0 .151.075.151.15v12.64c0 .075-.075.15-.15.15h-1.618a.162.162 0 0 1-.15-.15V5.66c0-.075.075-.15.15-.15zM5.68 8.483H1.918V5.66a.162.162 0 0 0-.15-.15H.15a.162.162 0 0 0-.15.15v7.787c0 2.746 2.257 5.003 5.003 5.003h.677c.075 0 .15-.075.15-.15v-1.618a.162.162 0 0 0-.15-.15h-.677a3.099 3.099 0 0 1-3.085-3.085v-3.084H5.68c.075 0 .15-.076.15-.15V8.595c0-.076-.075-.113-.15-.113zM22.533 9.95a5.018 5.018 0 0 0-7.035 0c-1.956 1.918-1.918 5.078 0 7.034 1.919 1.956 5.079 1.919 7.035 0a4.48 4.48 0 0 0 .865-1.166.08.08 0 0 0-.075-.075h-2.07l-.225.075c-1.279 1.129-3.235.978-4.363-.338-.339-.414-.602-.903-.678-1.43 0-.075.038-.113.113-.113h7.75c.075 0 .15-.075.15-.15v-.301a5.013 5.013 0 0 0-1.467-3.536zm-.903 2.257h-5.266c-.076 0-.113-.038-.113-.113a3.066 3.066 0 0 1 2.708-1.655c1.129 0 2.182.64 2.709 1.655 0 .038 0 .075-.038.113zM9.404 6.602a1.09 1.09 0 0 1-1.09 1.09 1.09 1.09 0 0 1-1.091-1.09 1.09 1.09 0 0 1 1.09-1.091 1.09 1.09 0 0 1 1.091 1.09Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tile
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tile (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tile {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tile {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tile 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tile 3s ease-in-out infinite alternate;
}
</style>