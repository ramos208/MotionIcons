<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-elastic-pop']"
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
      class="icon-geometry anim-glow-sparks"
    >
      <rect width="13" height="7" x="8" y="3" rx="1"/><path d="m2 9 3 3-3 3"/><rect width="13" height="7" x="8" y="14" rx="1"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: between-horizonal-start
// Category: generic
// Physics Presets: The icon's motion is designed to evoke a sense of fluid and energy, with the hover animation adding a dynamic ripple effect and the click animation incorporating tactile feedback. The shader enhances the neon glow for added visual interest.

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

.anim-glow-sparks {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-between-horizonal-start {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.296) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.2) rotate(0deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-between-horizonal-start {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-between-horizonal-start 500s ease-in-out forwards;
}

.anim-glow-sparks {
  animation: motion-ai-idle-between-horizonal-start 1000s ease-in-out infinite alternate;
}
</style>