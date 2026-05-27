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
      <path d="M6 20.0026C8.20914 20.0026 10 18.2118 10 16.0026C10 13.7935 8.20914 12.0026 6 12.0026C3.79086 12.0026 2 13.7935 2 16.0026C2 18.2118 3.79086 20.0026 6 20.0026Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 20.0026C20.2091 20.0026 22 18.2118 22 16.0026C22 13.7935 20.2091 12.0026 18 12.0026C15.7909 12.0026 14 13.7935 14 16.0026C14 18.2118 15.7909 20.0026 18 20.0026Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 16.0026H10.3706C10.7302 16.0026 11.0622 15.8095 11.2399 15.4968L15.5 8.00262" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 13.0026L7 7.00262M7 7.00262H5M7 7.00262H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.0039 6.21868C19.7999 5.64268 19.4399 4.74268 18.2399 4.32268C17.4599 4.02268 15.5399 3.90268 15.2999 4.08268C14.9527 4.16949 14.9399 4.56268 15.1079 5.10268C15.2444 5.68163 15.4559 6.42824 15.6479 7.14268C16.1399 8.97348 17.2199 12.9387 18.0239 15.9987" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bicycle01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bicycle01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bicycle01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bicycle01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bicycle01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bicycle01 3s ease-in-out infinite alternate;
}
</style>