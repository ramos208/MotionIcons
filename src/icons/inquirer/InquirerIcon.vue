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
      <path d="M8.132 7.14v-.99h.992v-.992h5.752v.992h.793v.991h.992v2.777h-.992v.992h-.793v.992h-.992v.992h-.991v2.975h-1.786V12.1h.992v-.992h.992v-.991h.992v-.992h.991v-1.19h-.991v-.992H9.917v.992h-.991v1.983H7.14V7.14Zm-2.578-.198H1.587v10.116h3.967v1.785H0V5.157h5.554zm12.892 0h3.967v10.116h-3.967v1.785H24V5.157h-5.554zm-7.339 10.116h1.786v1.785h-1.786z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: inquirer
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for inquirer (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-inquirer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-inquirer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-inquirer 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-inquirer 3s ease-in-out infinite alternate;
}
</style>