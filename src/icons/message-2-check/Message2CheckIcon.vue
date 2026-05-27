<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-pendulum']"
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8"/><path d="M8 13h6"/><path d="M12 21l-1 -1l-2 -2h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6"/><path d="M15 19l2 2l4 -4"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: message-2-check
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for message-2-check (tabler). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-message-2-check {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-message-2-check {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-message-2-check 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-message-2-check 2.5s ease-in-out infinite alternate;
}
</style>