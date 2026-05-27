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
      <path d="M12.025 0a3.868 3.868 0 00-1.964.525L1.354 5.55V6.5h15.853a3.9 3.9 0 003.463-2.115L13.922.508A3.868 3.868 0 0012.025 0zm9.81 5.072L13.91 18.801a3.9 3.9 0 00.1 4.056l6.734-3.908a3.865 3.865 0 001.914-3.35V5.55l-.822-.477zM1.46 7.848a3.9 3.9 0 00-.117.004l.017 7.787a3.868 3.868 0 001.946 3.334L12.008 24l.824-.475-7.926-13.73A3.9 3.9 0 001.46 7.848zM11.992 9.1a2.6 2.6 0 00-2.584 2.6 2.6 2.6 0 002.6 2.599 2.6 2.6 0 002.6-2.6 2.6 2.6 0 00-2.6-2.6 2.6 2.6 0 00-.016 0Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: nucleo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for nucleo (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-nucleo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-nucleo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-nucleo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-nucleo 3s ease-in-out infinite alternate;
}
</style>