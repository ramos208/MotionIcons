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
      <path d="M10.7962 2.91338C11.4188 2.29077 12.2756 1.96039 13.1551 2.0038L18.7587 2.28039C20.3601 2.35944 21.6406 3.63993 21.7196 5.24131L21.9962 10.8449C22.0396 11.7244 21.7092 12.5811 21.0866 13.2037L13.5082 20.7822C11.8844 22.4059 9.25177 22.4059 7.62799 20.7822L3.21783 16.372C1.59406 14.7482 1.59406 12.1156 3.21783 10.4918L10.7962 2.91338Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.982 11.2064L11.0004 13M11.0004 13L8.01869 14.7936M11.0004 13L11.0187 16.5M11.0004 13L10.982 9.5M11.0004 13L14 14.7063M11.0004 13L8 11.2935" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.875 6.25H17.75M18 6.25C18 6.38807 17.8881 6.5 17.75 6.5C17.6119 6.5 17.5 6.38807 17.5 6.25C17.5 6.11193 17.6119 6 17.75 6C17.8881 6 18 6.11193 18 6.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: creative-market
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for creative-market (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-creative-market {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-creative-market {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-creative-market 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-creative-market 3s ease-in-out infinite alternate;
}
</style>