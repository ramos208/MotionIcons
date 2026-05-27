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
      <path d="M23.0536 15.2543c1.2615 1.2625 1.2622 3.3114 0 4.5728-1.2617 1.2621-3.3068 1.2607-4.5687-.0018-.9599-.9598-1.1874-2.3713-.6878-3.5476L12.97 8.9472a2.903 2.903 0 0 1-.765-.0068l-4.6071 6.2009c.2567.7533.0937 1.6183-.5072 2.2176-.8397.8413-2.2063.8399-3.0474-.0017-.6534-.6533-.7916-1.622-.428-2.4164l-2.0027-2.9336c-.0585.0072-.116.0176-.1766.0176-.7923 0-1.4359-.642-1.4359-1.4356 0-.7928.6436-1.4359 1.436-1.4359.7936 0 1.4358.6431 1.4358 1.436 0 .2516-.0703.485-.1838.6904l2.0731 2.5544c.5163-.2096 1.069-.191 1.5494-.0132l3.8572-6.2123c-.686-1.107-.5521-2.5782.4096-3.5401 1.1215-1.1218 2.9412-1.1218 4.0608-.0007.8791.8786 1.0666 2.1881.5676 3.2539l5.24 7.0044c.9312-.0937 1.8947.215 2.608.9282z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: alwaysdata
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for alwaysdata (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-alwaysdata {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-alwaysdata {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-alwaysdata 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-alwaysdata 3s ease-in-out infinite alternate;
}
</style>