<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      <rect x="2" y="21" width="7" height="5" rx="0.6" transform="rotate(-90 2 21)" stroke="currentColor" stroke-width="1.5"/><rect x="17" y="15.5" width="7" height="5" rx="0.6" transform="rotate(-90 17 15.5)" stroke="currentColor" stroke-width="1.5"/><rect x="2" y="10" width="7" height="5" rx="0.6" transform="rotate(-90 2 10)" stroke="currentColor" stroke-width="1.5"/><path d="M7 17.5H10.5C11.6046 17.5 12.5 16.6046 12.5 15.5V8.5C12.5 7.39543 11.6046 6.5 10.5 6.5H7" stroke="currentColor" stroke-width="1.5"/><path d="M12.5 12H17" stroke="currentColor" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: network-left
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for network-left (iconoir). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-network-left {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-network-left {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-network-left 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-network-left 2s ease-in-out infinite alternate;
}
</style>