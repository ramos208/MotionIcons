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
      <path d="m7.375 9.305-1.123 1.226c.304.426.471.934.471 1.469 0 .679-.264 1.317-.744 1.797s-1.118.744-1.797.744a2.525 2.525 0 0 1-1.797-.744A2.524 2.524 0 0 1 1.641 12a2.543 2.543 0 0 1 2.496-2.54l1.32-1.44a4.176 4.176 0 0 0-1.275-.202A4.187 4.187 0 0 0 0 12c0 1.117.435 2.167 1.225 2.957s1.84 1.225 2.957 1.225a4.153 4.153 0 0 0 2.957-1.225A4.154 4.154 0 0 0 8.364 12c0-.998-.35-1.941-.989-2.695M5.983 8.082v-.005L3.076 11.24h1.949l2.897-3.16H5.983m5.39 4.516h2.29c.314 0 .954.043.954.934 0 1.087-.764 1.108-1.269 1.108h-1.975zm0-3.162h1.998c.583 0 1.044.217 1.044.902 0 .63-.416.902-1.134.902h-1.908zm-1.684 6.563h3.693c.516 0 1.425-.076 1.987-.544.73-.608.853-1.26.853-1.673 0-.945-.494-1.64-.977-2a2.1 2.1 0 0 0 .775-1.63c0-.325-.157-2.075-2.952-2.075h-3.38v7.922m9.463-3.401h2.29c.314 0 .954.043.954.934 0 1.087-.764 1.108-1.269 1.108h-1.975zm0-3.162h1.998c.583 0 1.044.217 1.044.901 0 .63-.415.902-1.134.902h-1.908zm-1.684 6.563h3.693c.516 0 1.426-.076 1.987-.544.73-.608.853-1.26.853-1.673 0-.945-.494-1.64-.977-2a2.1 2.1 0 0 0 .775-1.63c0-.325-.157-2.075-2.952-2.075h-3.38l.001 7.922"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: obb
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for obb (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-obb {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-obb {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-obb 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-obb 3s ease-in-out infinite alternate;
}
</style>