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
      <path d="M22.354 12.222c.044.156 0 .422-.267.489a3.74 3.74 0 0 1-.666.11c-.377.045-.355.356-.355.534v2.264c0 .31-.244 1.354-1.443 1.354H16.87c-1.043 0-1.864-.866-1.864-1.798V9.803c-.022-.932.821-1.554 1.576-1.532.377 0 .644.111.843.222.444.2.933.444 1.577.755 0 0 1.02-.733 1.087-.777.355-.244.688-.067.8.155.377.733 1.087 2.22 1.465 3.596zm1.642-4.018a3.283 3.283 0 0 0-3.219-3.33c-1.709-.044-2.663.578-3.019.755-.022.023-.066 0-.11-.044-.311-.31-1-.777-1.754-.999-.111-.022-.133-.2 0-.2a13.3 13.3 0 0 1 3.64.111c.134.023.245-.066.178-.177-.044-.089-.067-.133-.133-.289-.156-.31-.533-.644-1.021-.777-1.266-.355-3.441-.666-5.394-.666-2.176-.022-4.484.422-5.062.555-.133.023-.333.09-.377.09-.111 0-.155.155-.089.221l.222.222c.067.089.111.222-.022.355L3.796 7.65H6.57c.177 0 .355.155.355.355 0 .177-.156.355-.333.355H2.997l-1.088.999h4.706c.178 0 .333.2.333.355 0 .155-.133.355-.333.355H1.11L0 11.09h9.501c.177 0 .333.2.333.355 0 .2-.133.378-.333.378H0v.999h9.479c.222 0 .333.2.333.377 0 .156-.156.333-.356.333H0v1h12.386c.2 0 .334.177.334.377 0 .177-.156.355-.334.355H3.33v.999h9.079c.177 0 .31.2.31.377s-.155.355-.31.355l-.178-.022H3.33v.999h10.455s.377-.866.377-1.843V9.403c0-.532.222-1.42 1.31-1.664.022 0 .067-.023.089-.023 3.085-.732 6.26-.066 8.058.71.333.156.4-.11.377-.222zM6.66 21.413h2.11c1.886-.022 3.107-1.02 3.107-1.02H6.659v1.02zm0-1.731h6.06c.29-.289.644-.8.733-.999H6.659v.999Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: aeromexico
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for aeromexico (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-aeromexico {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-aeromexico {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-aeromexico 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-aeromexico 3s ease-in-out infinite alternate;
}
</style>