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
      <path d="M11.586 1.655a6.623 6.623 0 0 0-6.62 6.62v.773a7.503 7.503 0 0 1 3.31 3.269V8.276a3.302 3.302 0 0 1 3.31-3.31A1.66 1.66 0 0 0 13.24 3.31a1.66 1.66 0 0 0-1.656-1.655zm-9.93 7.448A1.66 1.66 0 0 0 0 10.758c0 .91.745 1.655 1.655 1.655a3.302 3.302 0 0 1 3.31 3.31v4.966c0 .91.745 1.655 1.655 1.655a1.66 1.66 0 0 0 1.655-1.655v-4.966a6.623 6.623 0 0 0-6.62-6.621zm15.724 0a6.623 6.623 0 0 0-6.622 6.621 6.623 6.623 0 0 0 6.622 6.621 6.583 6.583 0 0 0 3.462-.979c.262.58.84.98 1.503.98A1.66 1.66 0 0 0 24 20.69v-9.93a1.66 1.66 0 0 0-1.655-1.655c-.676 0-1.241.4-1.503.979a6.574 6.574 0 0 0-3.462-.98zm0 3.311a3.303 3.303 0 0 1 3.31 3.31 3.303 3.303 0 0 1-3.31 3.31 3.302 3.302 0 0 1-3.31-3.31 3.303 3.303 0 0 1 3.31-3.31z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: favro
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for favro (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-favro {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-favro {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-favro 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-favro 3s ease-in-out infinite alternate;
}
</style>