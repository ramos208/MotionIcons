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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"/><path d="M15 14a5 5 0 0 0-7.584 2"/><path d="M9.964 6.825C8.019 7.977 9.5 13 8 15"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: biceps-flexed
// Category: generic
// Physics Presets: The biceps-flexed icon undergoes a gentle yet dynamic pulse during idle state, emphasizing its muscular and toned appearance. Upon hover, it transforms into an energetic and lively motion with rotational skewing and scaling effects to showcase the flexed position more vividly. On click, it delivers a vibrant ripple effect accompanied by a subtle vibration for user feedback, enhancing both visual appeal and interactive experience.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-biceps-flexed {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.62) rotate(108deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.5) rotate(90deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-biceps-flexed {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-biceps-flexed 800s easeInCubic forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-biceps-flexed 2000s easeOutSine infinite alternate;
}
</style>