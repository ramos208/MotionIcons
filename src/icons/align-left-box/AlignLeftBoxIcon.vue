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
      <path d="M16.0041 3.995L15.993 4.005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.0041 3.995L19.993 4.005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.0041 7.995L19.993 8.005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.0041 11.995L19.993 12.005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.0041 15.995L19.993 16.005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.0041 19.995L19.993 20.005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.0041 19.995L15.993 20.005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.0059 3.995L4.00586 3.995L4.00586 19.995H12.0059L12.0059 3.995Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: align-left-box
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for align-left-box (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-align-left-box {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-align-left-box {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-align-left-box 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-align-left-box 3s ease-in-out infinite alternate;
}
</style>