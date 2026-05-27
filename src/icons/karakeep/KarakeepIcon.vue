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
      <path d="M22.582.054H1.418C.635.054 0 .69 0 1.472v21.056c0 .783.635 1.418 1.418 1.418h21.164c.783 0 1.418-.635 1.418-1.418V1.472C24 .69 23.365.054 22.582.054M10.487 20.437a.37.37 0 0 1-.37.37H3.592a.37.37 0 0 1-.37-.37V3.485a.37.37 0 0 1 .37-.37h6.422a.37.37 0 0 1 .37.37v6.452s-.035 2.776.103 4.955zm10.188 0a.371.371 0 0 1-.575.31l-2.975-1.945a.37.37 0 0 0-.42.01l-2.608 1.887a.36.36 0 0 1-.345.042.37.37 0 0 1-.159-.302V7.274c.353-.07.746-.106 1.2-.106 2.229 0 5.882 1.257 5.882 4.81z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: karakeep
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for karakeep (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-karakeep {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-karakeep {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-karakeep 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-karakeep 3s ease-in-out infinite alternate;
}
</style>