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
      <path d="M16.59 9.348v5.304h.796V9.348Zm-8.497-.09c-1.55 0-2.752 1.127-2.752 2.742 0 1.687 1.202 2.742 2.752 2.742 1.55 0 2.754-1.055 2.751-2.742a2.72 2.72 0 0 0-2.751-2.742ZM10.05 12c0 1.195-.876 1.987-1.957 1.987-1.082 0-1.958-.792-1.958-1.987 0-1.174.876-1.987 1.958-1.987 1.08 0 1.957.813 1.957 1.987zM0 9.176v5.476h.812v-3.619l4.218 3.79v-1.135zM11.442 12l2.952 2.652h1.184L12.622 12l2.956-2.652h-1.184ZM24 14.652h-.875l-.64-1.175h-2.898l-.64 1.175h-.875l1.06-1.958h2.937l-1.465-2.72.432-.798Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: nokia
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for nokia (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-nokia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-nokia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-nokia 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-nokia 3s ease-in-out infinite alternate;
}
</style>