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
      <path d="M11.9831 14.0001V3.00006M11.9831 14.0001C10.3247 14.0001 8.98038 15.4355 8.98038 16.6251C8.98038 18.3751 10.3247 21.0001 11.9831 21.0001C13.6414 21.0001 14.9857 18.3751 14.9857 16.6251C14.9857 15.4355 13.6414 14.0001 11.9831 14.0001Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.97841 10.0283L4.97841 21M3.68615 3.12945L2.90347 3.20753C2.33225 3.26452 1.92596 3.78885 2.01382 4.35564L2.6828 8.67118C2.79612 9.40225 3.426 10.0106 4.16644 10.0106H5.7904C6.53083 10.0106 7.16071 9.40225 7.27404 8.67118L7.94301 4.35564C8.03087 3.78885 7.62458 3.26452 7.05336 3.20753L6.27337 3.12962C5.41311 3.04368 4.54642 3.04363 3.68615 3.12945Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.996 13.8182L17.996 3.02594C19.1545 3.34592 21.0815 4.55268 21.4006 7.52842L21.9737 12.0424C22.0743 12.8351 21.8727 13.6261 21.0846 13.7616C20.4244 13.8751 19.4229 13.9122 17.996 13.8182ZM17.996 13.8182L17.996 21.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: kitchen-utensils
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for kitchen-utensils (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-kitchen-utensils {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-kitchen-utensils {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-kitchen-utensils 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-kitchen-utensils 3s ease-in-out infinite alternate;
}
</style>