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
      class="icon-geometry anim-subtle-drift"
    >
      <rect width="6" height="14" x="2" y="5" rx="2"/><rect width="6" height="10" x="16" y="7" rx="2"/><path d="M12 2v20"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: align-horizontal-justify-center
// Category: generic
// Physics Presets: The motion is designed to feel elastic and playful, mimicking the icon's semantic meaning of centering alignment in a gentle and fluid manner. The animation starts with an initial drift for idle interaction, followed by a slight fade-in when hovered over, emphasizing symmetry and balance.

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

.anim-subtle-drift {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-align-horizontal-justify-center {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1664) rotate(0deg) translate(0px, -30px) skew(0deg); }
  100% { transform: scale(1.08) rotate(0deg) translate(0px, -20px) skew(0deg); }
}

@keyframes motion-ai-idle-align-horizontal-justify-center {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-align-horizontal-justify-center 300s cubic-out forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-align-horizontal-justify-center 200s cubic-out infinite alternate;
}
</style>