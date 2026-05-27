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
      <path d="M248,200h-8a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8h8a8,8,0,0,0,0-16h-8a24,24,0,0,0-24,24v8H199.2a40.09,40.09,0,0,0-33.71-31.61L129.44,49.85A16,16,0,0,0,114.67,40H24A16,16,0,0,0,8,56v96a40,40,0,0,0,32,64H160a40.07,40.07,0,0,0,39.2-32H216v8a24,24,0,0,0,24,24h8a8,8,0,0,0,0-16ZM148,136H64V56h50.67ZM48,56v80H40a39.72,39.72,0,0,0-16,3.35V56ZM160,200H40a24,24,0,0,1,0-48H160a24,24,0,0,1,0,48Zm8-24a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H160A8,8,0,0,1,168,176Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bulldozer
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bulldozer (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bulldozer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bulldozer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bulldozer 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bulldozer 3s ease-in-out infinite alternate;
}
</style>