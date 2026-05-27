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
      <path d="M2.34 0v10.45l3.2-1.83V5.27l2.93 1.67 3.01-1.72L2.34 0zm19.31 0L12.5 5.22l3.02 1.73 2.94-1.68v3.35l3.2 1.83V0h-.01zm-9.9 5.64-9.4 5.38V24l9.4-5.36v-3.76l-6.21 3.56v-5.5l6.21-3.54V5.64zm.5 0V9.4l6.22 3.54v5.5l-6.22-3.56v3.76L21.66 24V11.02l-9.41-5.38zM7.7 12.3l-1.65.94v1.86l2.17 1.24 3.28-1.87-3.8-2.17zm8.61 0-3.8 2.16 3.28 1.88 2.17-1.24v-1.86l-1.65-.94z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: backbonedotjs
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for backbonedotjs (simpleicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-backbonedotjs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(4.5px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(3px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-backbonedotjs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-backbonedotjs 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-backbonedotjs 3s ease-in-out infinite alternate;
}
</style>