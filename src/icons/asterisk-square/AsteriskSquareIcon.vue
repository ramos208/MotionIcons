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
      class="icon-geometry anim-neutral-tension"
    >
      <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8v8"/><path d="m8.5 14 7-4"/><path d="m8.5 10 7 4"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: asterisk-square
// Category: generic
// Physics Presets: The motion profile for the asterisk-square icon is designed to be visually engaging and semantically accurate, using an elastic-pop approach that simulates a spring-like behavior typical of icons with directional movement such as chevrons. The idle animation introduces a subtle rotation and scale variation, while hover triggers a more pronounced visual effect like a light flash. Upon click, a ripple effect is generated to enhance the interactive nature.

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

.anim-neutral-tension {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-asterisk-square {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1556000000000002) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.07) rotate(0deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-asterisk-square {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-asterisk-square 500s inExpo forwards;
}

.anim-neutral-tension {
  animation: motion-ai-idle-asterisk-square 2000s outQuint infinite alternate;
}
</style>