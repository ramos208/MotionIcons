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
      <path d="M21 17.4C21 19.0971 21 19.9456 20.3491 20.4728C19.6983 21 18.6507 21 16.5556 21H15.4444C13.3493 21 12.3017 21 11.6509 20.4728C11 19.9456 11 19.0971 11 17.4L11 6.6C11 4.90294 11 4.05442 11.6509 3.52721C12.3017 3 13.3493 3 15.4444 3L16.5556 3C18.6507 3 19.6983 3 20.3491 3.52721C21 4.05442 21 4.90294 21 6.6L21 17.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 5.04096C3 4.07884 3 3.59778 3.29289 3.29889C3.58579 3 4.05719 3 5 3C5.94281 3 6.41421 3 6.70711 3.29889C7 3.59778 7 4.07884 7 5.04096L7 15.8877C7 16.7952 7 17.2489 6.92429 17.6878C6.855 18.0895 6.73877 18.4813 6.57807 18.8547C6.40249 19.2628 6.15585 19.6403 5.66258 20.3954C5.44279 20.7318 5.33289 20.9 5.19487 20.9597C5.0703 21.0134 4.9297 21.0134 4.80513 20.9597C4.66711 20.9 4.55721 20.7318 4.33742 20.3954C3.84415 19.6403 3.59751 19.2628 3.42193 18.8548C3.26123 18.4813 3.14499 18.0895 3.07571 17.6878C3 17.2489 3 16.7952 3 15.8877L3 5.04096Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.5 16.5L13.5 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.5 12L13.5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.5 7.5L13.5 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 7C7 7.55228 6.10457 8 5 8C3.89543 8 3 7.55228 3 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: stationery
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for stationery (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-stationery {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-stationery {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-stationery 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-stationery 3s ease-in-out infinite alternate;
}
</style>