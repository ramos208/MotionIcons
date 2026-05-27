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
      <path d="M16.9445 20.6667V15.3333M18.5052 15.3333V14M18.5052 22V20.6667M16.9445 18H20.0658M20.0658 18C20.5829 18 21.0021 18.4477 21.0021 19V19.6667C21.0021 20.219 20.5829 20.6667 20.0658 20.6667H16.0082M20.0658 18C20.5829 18 21.0021 17.5523 21.0021 17V16.3333C21.0021 15.781 20.5829 15.3333 20.0658 15.3333H16.0082" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.6956 4.18605C13.2951 3.31449 9.70074 1.64154 6.46298 2.06854C8.42149 3.43854 9.45182 4.17541 12.2314 6.68896M18.5673 8.11851C18.9392 8.73509 19.5616 9.92878 19.9974 11.1718M16.103 10.6214C16.3448 10.8972 16.6389 11.3118 16.8495 11.5563M10.3551 10.4183L3.41468 17.4677C2.85171 18.0395 2.86017 18.9751 3.43357 19.5575C4.00696 20.1399 4.92816 20.1485 5.49113 19.5767L12.4315 12.5274M11.8454 8.22564L14.5901 11.0134C14.8948 11.3229 15.3878 11.3241 15.6912 11.0159L19.0915 7.5622C19.3949 7.25405 19.3938 6.75331 19.089 6.44376L16.3444 3.65604C16.0396 3.34649 15.5466 3.34535 15.2432 3.6535L11.8429 7.10721C11.5395 7.41535 11.5407 7.91609 11.8454 8.22564Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mining03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mining03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mining03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mining03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mining03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mining03 3s ease-in-out infinite alternate;
}
</style>