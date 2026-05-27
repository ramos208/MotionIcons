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
      class="icon-geometry anim-float-drift"
    >
      <path d="M12.983 21.186a1 1 0 0 1-1.966 0 10 10 0 0 0-8.203-8.203 1 1 0 0 1 0-1.966 10 10 0 0 0 8.203-8.203 1 1 0 0 1 1.966 0 10 10 0 0 0 8.203 8.203 1 1 0 0 1 0 1.966 10 10 0 0 0-8.203 8.203"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: astroid
// Category: generic
// Physics Presets: This motion design focuses on creating a visually engaging and energetic experience for the ASTROID icon, emphasizing its complex geometry with subtle yet impactful hover interactions. The animation is designed to mimic the dynamic properties of the astroid shape, ensuring it feels both stable and alive.

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

.anim-float-drift {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-astroid {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(54deg) translate(0px, 0px) skew(0.24deg); }
  100% { transform: scale(1.1) rotate(-45deg) translate(0px, 0px) skew(0.2deg); }
}

@keyframes motion-ai-idle-astroid {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-astroid 1500s cubic-in forwards;
}

.anim-float-drift {
  animation: motion-ai-idle-astroid 2000s cubic-out infinite alternate;
}
</style>