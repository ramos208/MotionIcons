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
      <path d="M6 19C6 18.4477 5.55228 18 5 18H3V21C3 21.5523 3.44772 22 4 22H5C5.55228 22 6 21.5523 6 21V19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 18H11C10.4477 18 10 18.4477 10 19V21C10 21.5523 10.4477 22 11 22H12C12.5523 22 13 21.5523 13 21V18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 18V17C3 14.2386 5.23858 12 8 12C10.7614 12 13 14.2386 13 17V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 2.50088V3.00175C14 5.83513 14 7.25182 14.8787 8.13204C15.7574 9.01226 17.1716 9.01226 20.0001 9.01226H20.5001M5.00009 9.01226C5.00203 6.06349 5.04249 4.54004 5.88607 3.49194C6.06508 3.26953 6.26732 3.06694 6.48933 2.88763C7.58832 2 9.21084 2 12.4559 2C13.1614 2 13.5142 2 13.8372 2.11421C13.9044 2.13796 13.9703 2.16529 14.0346 2.19609C14.3436 2.34416 14.593 2.59404 15.0919 3.0938L19.8285 7.83863C20.4066 8.41771 20.6956 8.70724 20.8478 9.07543C21.0001 9.44361 21.0001 9.85308 21.0001 10.672V14.021C21.0001 17.7989 21.0001 19.6878 19.8285 20.8614C19.0203 21.671 17.8724 21.9221 16.0001 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: file-headphone
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for file-headphone (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-file-headphone {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-file-headphone {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-file-headphone 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-file-headphone 3s ease-in-out infinite alternate;
}
</style>