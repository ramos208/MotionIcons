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
      <path d="M8.43816 3.93226C10.1564 2.64409 11.0155 2 12 2C12.9845 2 13.8436 2.64409 15.5618 3.93226L19.004 6.51285C20.7222 7.80103 21.5814 8.44512 21.8856 9.41125C22.1898 10.3774 21.8616 11.4195 21.2053 13.5038L19.8905 17.6793C19.2342 19.7636 18.9061 20.8058 18.1096 21.4029C17.3132 22 16.2512 22 14.1274 22H9.87263C7.74876 22 6.68682 22 5.89037 21.4029C5.09392 20.8058 4.76576 19.7636 4.10945 17.6793L2.79467 13.5038C2.13835 11.4195 1.8102 10.3774 2.11441 9.41125C2.41863 8.44512 3.27776 7.80103 4.99601 6.51285L8.43816 3.93226Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pentagon01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pentagon01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pentagon01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pentagon01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pentagon01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pentagon01 3s ease-in-out infinite alternate;
}
</style>