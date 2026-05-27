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
      <path d="M12.0043 0C5.3911 0 0 5.3805 0 12c0 6.6108 5.3825 12 12.0043 12C18.6263 24 24 18.6108 24 12c0-6.6195-5.3824-12-11.9957-12Zm9.8288 12a9.7343 9.7343 0 0 1-.8234 3.925v-7.85c.5288 1.1958.8235 2.53.8235 3.925zm-4.0996 7.9798v-1.8715h-2.0889v3.0152a9.7946 9.7946 0 0 1-3.6403.7018c-.3033 0-.6067-.0173-.91-.0433V9.1928H9.0054v12.1646c-3.961-1.2736-6.8385-4.9906-6.8385-9.366 0-5.4239 4.4117-9.834 9.8374-9.834 2.6956 0 5.1485 1.0917 6.9253 2.8592v13.8888h.0607c-.39.3986-.8148.7538-1.2568 1.0744zM15.6446 9.2014h2.0889v4.3322h-2.0889zm-3.2849 5.3372h2.0888v4.3322h-2.0888Zm0-8.9068h2.0888v4.3321h-2.0888Zm3.285 9.1668h2.0888v2.0447h-2.0889Zm-3.285-3.5697h2.0888v2.0448h-2.0888Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: geopandas
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for geopandas (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-geopandas {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-geopandas {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-geopandas 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-geopandas 3s ease-in-out infinite alternate;
}
</style>