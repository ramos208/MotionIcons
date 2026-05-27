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
      <!--Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)--><path d="M496,224a48,48,0,1,0-48-48A48,48,0,0,0,496,224ZM311.47,178.45A56.77,56.77,0,0,1,328,176a56,56,0,0,1,19,3.49l15.35-48.61A24,24,0,0,0,342,99.74c-11.53-1.35-22.21,6.44-25.71,17.51l-20.9,66.17ZM93.65,386.33c.8-.19,1.54-.54,2.35-.71V359.93a156,156,0,0,1,107.06-148l73.7-22.76L310.92,81.05a24,24,0,0,0-20.33-31.11c-11.53-1.34-22.22,6.45-25.72,17.52L231.42,173.88a8,8,0,0,1-15.26-4.83L259.53,31.26A24,24,0,0,0,239.2.15C227.67-1.19,217,6.6,213.49,17.66L165.56,169.37a8,8,0,1,1-15.26-4.82l38.56-122a24,24,0,0,0-20.33-31.11C157,10,146.32,17.83,142.82,28.9l-60,189.85L80.76,168.7A24,24,0,0,0,56.9,144.55c-13.23-.05-24.72,10.54-24.9,23.86V281.14A123.69,123.69,0,0,0,93.65,386.33ZM519.1,336H360a8,8,0,0,1,0-16H488a24,24,0,0,0,23.54-28.76C509.35,279.84,498.71,272,487.1,272H288l47.09-17.06a24,24,0,0,0-14.18-45.88L213.19,242.31A123.88,123.88,0,0,0,128,360v25.65a79.78,79.78,0,0,1,58,108.63A118.9,118.9,0,0,0,248,512H456a24,24,0,0,0,23.54-28.76C477.35,471.84,466.71,464,455.1,464H360a8,8,0,0,1,0-16H488a24,24,0,0,0,23.54-28.76C509.35,407.84,498.71,400,487.1,400H360a8,8,0,0,1,0-16H520a24,24,0,0,0,23.54-28.76C541.35,343.84,530.71,336,519.1,336ZM416,64a32,32,0,1,0-32-32A32,32,0,0,0,416,64ZM112,416a48,48,0,1,0,48,48A48,48,0,0,0,112,416Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hands-wash
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hands-wash (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hands-wash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hands-wash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hands-wash 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hands-wash 3s ease-in-out infinite alternate;
}
</style>