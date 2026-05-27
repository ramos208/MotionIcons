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
      <path d="M0 0v24h24V0Zm17.1797 2.9477a5.452 5.452 0 0 1 3.9047 1.364L19.7078 5.972a3.672 3.672 0 0 0-2.596-1.0086c-1.6 0-2.8555 1.408-2.8555 3.096v.0282c0 1.816 1.2517 3.1523 3.0117 3.1523a3.492 3.492 0 0 0 2.064-.5921V9.2234h-2.2V7.336h4.3157v4.3157a6.436 6.436 0 0 1-4.2438 1.5757c-3.096 0-5.2242-2.1797-5.2242-5.1117v-.0281a5.1 5.1 0 0 1 5.2-5.1398zm-14.7438.1718h3.8758c3.12 0 5.2805 2.1439 5.2805 4.9399v.028c0 2.8-2.1605 4.968-5.2805 4.968H2.436Zm4.075 1.9688a2.852 2.852 0 0 0-.1992.003H4.6203v6h1.6914A2.832 2.832 0 0 0 9.304 8.1235v-.036a2.852 2.852 0 0 0-2.793-2.9991Zm-4.303 14.407h9v1.5h-9z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: datagrip
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for datagrip (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-datagrip {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-datagrip {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-datagrip 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-datagrip 3s ease-in-out infinite alternate;
}
</style>