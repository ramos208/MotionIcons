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
      <path d="M18.5 9.19028C16.9878 7.3721 14.7872 6 12.5 6C8.35786 6 4.5 10.5 4.5 14C4.5 18.1421 8.35786 21 12.5 21C13.0064 21 13.5086 20.9573 14 20.8747" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 8.5L17.7059 10L21 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.6089 17.1305H22L20.1374 15.5872C18.8302 14.5041 18.1766 13.9625 17.4061 14.002C16.6357 14.0415 16.0515 14.6466 14.8831 15.8567L14.7463 15.9984C14.2628 16.4993 14.021 16.7497 14.0017 17.0446C13.9983 17.0956 14 17.1467 14.0066 17.1974C14.0447 17.4908 14.302 17.7278 14.8167 18.2016C16.1158 19.3976 16.7654 19.9957 17.527 20C17.6567 20.0007 17.7862 19.9889 17.9133 19.9648C18.6592 19.823 19.1688 19.1193 20.1879 17.7119L20.6089 17.1305ZM20.6089 17.1305H17.8266" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 6C12.7333 5 11.56 3 9 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 6C10.5 5.47719 9 4.58841 7 5.21578" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 11L4 14L2 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.125 12H13M13.25 12C13.25 12.1381 13.1381 12.25 13 12.25C12.8619 12.25 12.75 12.1381 12.75 12C12.75 11.8619 12.8619 11.75 13 11.75C13.1381 11.75 13.25 11.8619 13.25 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.125 12H20M20.25 12C20.25 12.1381 20.1381 12.25 20 12.25C19.8619 12.25 19.75 12.1381 19.75 12C19.75 11.8619 19.8619 11.75 20 11.75C20.1381 11.75 20.25 11.8619 20.25 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: angry-bird
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for angry-bird (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-angry-bird {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-angry-bird {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-angry-bird 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-angry-bird 3s ease-in-out infinite alternate;
}
</style>