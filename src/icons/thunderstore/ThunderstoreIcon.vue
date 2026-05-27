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
      <path d="m.322 13.174 4.706 8.192L7.2 16.855 4.824 12.72a1.416 1.416 0 0 1 0-1.444l2.965-5.16c.265-.46.718-.723 1.245-.723h1.595l-3.086 6.953h3.812L6.171 22.403 16.583 9.914h-3.201l2.184-4.52h6.052L24 1.25H7.175c-.86 0-1.598.428-2.028 1.174l-4.825 8.4a2.306 2.306 0 0 0 0 2.35m7.213 9.576h9.29a2.29 2.29 0 0 0 2.03-1.176l4.825-8.4a2.317 2.317 0 0 0 0-2.35l-1.93-3.36h-4.763l2.19 3.813c.262.46.262.987 0 1.444l-2.964 5.162a1.41 1.41 0 0 1-1.248.723h-2.154l-1.497-.017z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: thunderstore
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for thunderstore (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-thunderstore {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-thunderstore {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-thunderstore 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-thunderstore 3s ease-in-out infinite alternate;
}
</style>