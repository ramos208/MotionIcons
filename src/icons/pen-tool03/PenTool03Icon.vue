<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-mechanical']"
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
      <path d="M13.2852 19.3647L5.82243 20.7506C4.39103 21.0164 3.67534 21.1493 3.26303 20.737C2.85072 20.3246 2.98362 19.6089 3.24943 18.1774L4.63523 10.7143C4.85745 9.51762 4.96856 8.91925 5.36302 8.5577C5.75749 8.19616 6.47889 8.1256 7.9217 7.98448C9.31227 7.84847 10.6283 7.37177 12 6L18 12.0005C16.6283 13.3723 16.1513 14.6874 16.0151 16.0781C15.8738 17.5211 15.8031 18.2426 15.4416 18.637C15.0801 19.0314 14.4818 19.1425 13.2852 19.3647Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 15.2105C10.4405 15.1197 9.92895 14.8763 9.52632 14.4737M9.52632 14.4737C9.12368 14.0711 8.8803 13.5595 8.78947 13M9.52632 14.4737L4 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 6C12.7123 4.9491 13.6771 3.1812 15.1065 3.01098C16.0822 2.89479 16.8906 3.70312 18.5072 5.31978L18.6802 5.49277C20.2969 7.10944 21.1052 7.91777 20.989 8.8935C20.8188 10.3229 19.0509 11.2877 18 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pen-tool03
// Category: mechanical
// Physics Presets: Dynamic kinetic adaptation for pen-tool03 (hugeicons). Selected semantic motion: mechanical with custom idle (ambient-floating) and interaction profile (gear-rotate) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pen-tool03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(90deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pen-tool03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pen-tool03 0.45s cubic-bezier(0.76, 0, 0.24, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pen-tool03 3s ease-in-out infinite alternate;
}
</style>