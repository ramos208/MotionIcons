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
      <path d="M22.0022 4.5H16.0059M22.0022 4.5C22.0022 3.79977 20.0091 2.49153 19.5037 2M22.0022 4.5C22.0022 5.20023 20.0091 6.50847 19.5037 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M1.99767 10.8264L2.94576 10.8264C3.59087 10.8264 4.21881 10.6175 4.73653 10.2308L9.63637 6.57074C10.2015 6.14861 10.9026 5.81146 11.5499 6.09015C12.5976 6.5413 13.2783 7.81411 11.7074 9.37203L9.99906 10.9703L20.4157 10.9703C22.4576 11.0266 22.5589 14.3169 20.4157 14.4576L14.4794 14.4576C14.6704 15.9386 13.6276 22.9153 9.21009 21.8984C9.00021 21.8501 8.78723 21.8019 8.57708 21.7548C7.65888 21.549 6.02245 20.9407 5.06576 20.27C4.06983 19.5717 3.07783 19.8181 1.99767 19.8181" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pointing-right01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pointing-right01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pointing-right01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pointing-right01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pointing-right01 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pointing-right01 3s ease-in-out infinite alternate;
}
</style>