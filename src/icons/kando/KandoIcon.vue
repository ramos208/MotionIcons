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
      <path d="M22.953 6.435c-1.45 1.529-5.679 2.311-6.702 1.291-1.022-1.019-.298-5.006 1.154-6.535a3.826 3.826 0 0 1 5.402-.146 3.807 3.807 0 0 1 .146 5.39m-5.27 12.74c-1.906-.904-3.96-4.674-3.303-5.96.656-1.287 4.68-1.83 6.585-.926a3.824 3.813 0 0 1-3.282 6.886m-10.799.451c.274-2.088 3.234-5.2 4.663-4.975s3.188 3.878 2.914 5.965a3.822 3.811 0 1 1-7.578-.99M3.117 9.532c2.075-.388 5.959 1.454 6.187 2.878S6.6 16.638 4.526 17.027a3.82 3.82 0 0 1-4.46-3.044 3.813 3.813 0 0 1 3.051-4.45m8.466-6.707c1.01 1.849.453 6.103-.835 6.759S5.883 8.324 4.873 6.474A3.824 3.813 0 0 1 6.4 1.302a3.82 3.81 0 0 1 5.183 1.524"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: kando
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for kando (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-kando {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-kando {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-kando 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-kando 3s ease-in-out infinite alternate;
}
</style>