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
      <path d="M160,80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H160a16,16,0,0,0,16-16V96A16,16,0,0,0,160,80Zm0,128H48V96H160ZM136,40a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,40Zm88,8v8a8,8,0,0,1-16,0V48h-8a8,8,0,0,1,0-16h8A16,16,0,0,1,224,48Zm0,48v16a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm0,56v8a16,16,0,0,1-16,16h-8a8,8,0,0,1,0-16h8v-8a8,8,0,0,1,16,0ZM80,56V48A16,16,0,0,1,96,32h8a8,8,0,0,1,0,16H96v8a8,8,0,0,1-16,0Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: selection-background
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for selection-background (phosphor). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-selection-background {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(4.5px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(3px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-selection-background {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-selection-background 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-selection-background 3s ease-in-out infinite alternate;
}
</style>