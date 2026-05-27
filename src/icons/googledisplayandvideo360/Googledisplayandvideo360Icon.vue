<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M4.421.01a2.947 2.947 0 0 0-2.828 1.52 2.967 2.967 0 0 0 1.094 4.076l10.6 6.064 4.79-2.672a3.546 3.546 0 0 1 1.811-.443L5.701.424A2.947 2.947 0 0 0 4.42.01ZM1.164 4.768v14.484a3.474 3.474 0 0 1 2.972-1.687 3.47 3.47 0 0 1 2.961 1.672l.004-10.53L2.44 6.04a3.433 3.433 0 0 1-1.275-1.271Zm18.42 4.289a3.08 3.08 0 0 0-1.264.379L7.6 15.414c.003 1.873-.011 3.745.003 5.617 0 .4-.072.988-.396 1.606l12.548-7.227 1.487-.83a2.978 2.978 0 0 0 1.463-3.511 3.08 3.08 0 0 0-3.121-2.012ZM4.136 18.065A2.967 2.967 0 1 0 4.134 24a2.967 2.967 0 0 0 .002-5.935z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: googledisplayandvideo360
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for googledisplayandvideo360 (simpleicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-googledisplayandvideo360 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(4.5px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(3px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-googledisplayandvideo360 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-googledisplayandvideo360 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-googledisplayandvideo360 3s ease-in-out infinite alternate;
}
</style>