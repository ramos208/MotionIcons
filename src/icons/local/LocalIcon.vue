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
      <path d="m4.49 11.97 6.682-6.681a.638.638 0 0 0 .204-.476V.838a.7.7 0 0 0-.42-.624.68.68 0 0 0-.736.148L1.4 9.193c-.94.94-1.388 1.85-1.4 2.805s.434 1.85 1.36 2.774l8.858 8.86a.638.638 0 0 0 .476.203.39.39 0 0 0 .26-.082.68.68 0 0 0 .42-.626v-4a.692.692 0 0 0-.204-.476L4.489 11.97h.002zm-2.64 1.32c-.34-.45-.502-.872-.502-1.28.012-.57.34-1.182 1.007-1.85l7.66-7.662v2.057l-7.06 7.06A4.355 4.355 0 0 0 1.85 13.29zm8.166 8.205-6.451-6.45a.748.748 0 0 0-.094-.12c-.204-.207-.816-.819.094-1.961l6.45 6.449v2.082zM13.782.376a.668.668 0 0 0-.734-.15.68.68 0 0 0-.422.626v4.015c.004.18.076.35.204.476l6.681 6.68-6.681 6.682a.638.638 0 0 0-.204.476v3.96a.682.682 0 0 0 1.156.49l8.817-8.817c.94-.94 1.389-1.85 1.4-2.804.017-.952-.433-1.85-1.36-2.775L13.782.376zm.204 4.205V2.5l6.451 6.448c.026.044.06.084.094.122.204.204.816.817-.094 1.96l-6.449-6.45-.002.002zm7.647 9.267-7.66 7.661v-2.04l7.06-7.077a4.451 4.451 0 0 0 1.104-1.674c.34.45.504.872.504 1.28-.014.57-.34 1.17-1.008 1.85zm-4.626-1.294H6.9a.516.516 0 0 1-.516-.516v-.054c0-.286.23-.518.516-.518h10.11a.52.52 0 0 1 .518.518v.054a.526.526 0 0 1-.518.516h-.004zm-1.44-2.544v.056a.516.516 0 0 1-.52.516H8.842a.516.516 0 0 1-.518-.516v-.056c0-.285.232-.517.518-.517h6.205c.286 0 .516.232.516.517h.002zm-1.92-1.987v.054a.516.516 0 0 1-.517.518h-2.464a.516.516 0 0 1-.516-.518v-.054c0-.286.232-.516.516-.516h2.464a.508.508 0 0 1 .516.516zm-.517 7.443c.284 0 .516.232.516.518v.054a.516.516 0 0 1-.516.516h-2.464a.516.516 0 0 1-.516-.516v-.054c0-.286.232-.518.516-.518h2.464zm1.918-.912H8.843a.516.516 0 0 1-.518-.516v-.054a.52.52 0 0 1 .518-.518h6.205c.286 0 .516.232.516.518v.054a.516.516 0 0 1-.516.516z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: local
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for local (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-local {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-local {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-local 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-local 3s ease-in-out infinite alternate;
}
</style>