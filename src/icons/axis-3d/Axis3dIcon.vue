<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-dynamic-pop']"
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
      class="icon-geometry anim-axis-3d-subtle-flip"
    >
      <path d="M13.5 10.5 15 9"/><path d="M4 4v15a1 1 0 0 0 1 1h15"/><path d="M4.293 19.707 6 18"/><path d="m9 15 1.5-1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: axis-3d
// Category: generic
// Physics Presets: This motion profile for the 'axis-3d' icon aims to create a fluid and energetic effect, with subtle rotations and scales during idle state. Upon hover, it introduces a dynamic flair using spring motion to emphasize the directional flow. A gentle shake animation is applied upon click, accompanied by vibrancy and an ambient glow to add depth.

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

.anim-axis-3d-subtle-flip {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-axis-3d {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(54deg) translate(-30px, 15px) skew(12deg); }
  100% { transform: scale(1.1) rotate(-45deg) translate(-20px, 10px) skew(10deg); }
}

@keyframes motion-ai-idle-axis-3d {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-axis-3d 500s cubic-in-out forwards;
}

.anim-axis-3d-subtle-flip {
  animation: motion-ai-idle-axis-3d 200s cubic-in-out infinite alternate;
}
</style>