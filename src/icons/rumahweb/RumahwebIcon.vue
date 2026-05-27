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
      <path d="M0 12.149c.028-.275.148-.543.36-.753l7.182-7.092a.972.972 0 0 1 .103-.091c.308-.265 1.807-1.473 3.743-1.553h.402c1.126.047 2.374.5 3.61 1.731 2.534 2.542 5.076 5.077 7.615 7.615 1.14 1.14 1.198 2.585.642 3.795a4.043 4.043 0 0 1-.819 1.173 3.973 3.973 0 0 1-1.188.823c-1.208.537-2.646.458-3.86-.753l-.053-.056-6.222-6.061a.93.93 0 0 0-1.03-.207 1.6 1.6 0 0 0-.499.325c-.15.141-.272.304-.352.473-.136.291-.141.627.085.907l6.806 6.802c.483.485.481 1.27-.005 1.752a1.246 1.246 0 0 1-1.758-.004l-6.889-6.89c-.999-1.138-1.021-2.48-.488-3.614a4.087 4.087 0 0 1 2.185-2.05c1.183-.468 2.553-.365 3.679.731 2.103 2.044 4.197 4.098 6.304 6.138.359.356.76.392 1.085.248a1.6 1.6 0 0 0 .76-.763c.154-.335.148-.726-.146-1.018-2.54-2.533-5.07-5.077-7.615-7.605-1.977-1.973-4.04-.345-4.347-.082l-7.178 7.086a1.245 1.245 0 0 1-1.757-.003A1.248 1.248 0 0 1 0 12.402v-.253Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rumahweb
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rumahweb (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rumahweb {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rumahweb {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rumahweb 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rumahweb 3s ease-in-out infinite alternate;
}
</style>