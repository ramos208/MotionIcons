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
      <!--Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)--><path d="M358.59,195.6,504.2,313.8a63.4,63.4,0,0,1,22.21,37.91H624a16.05,16.05,0,0,0,16-16V143.91A16,16,0,0,0,624,128H512L457.41,73.41A32,32,0,0,0,434.8,64H348.91a32,32,0,0,0-21.61,8.41l-88.12,80.68-25.69-19.85L289.09,64H205.3a32,32,0,0,0-22.6,9.41l-20.34,20.3L45.47,3.38A16,16,0,0,0,23,6.19L3.38,31.46A16,16,0,0,0,6.19,53.91L594.54,508.63A16,16,0,0,0,617,505.82l19.64-25.27a16,16,0,0,0-2.81-22.45L303.4,202.72l32.69-29.92,27-24.7a16,16,0,0,1,21.61,23.61ZM16,128A16.05,16.05,0,0,0,0,144V335.91a16,16,0,0,0,16,16H146.3l90.5,81.89a64,64,0,0,0,90-9.3l.2-.2,17.91,15.5a37.16,37.16,0,0,0,52.29-5.39l8.8-10.82L23.56,128Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: handshake-alt-slash
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for handshake-alt-slash (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-handshake-alt-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-handshake-alt-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-handshake-alt-slash 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-handshake-alt-slash 3s ease-in-out infinite alternate;
}
</style>