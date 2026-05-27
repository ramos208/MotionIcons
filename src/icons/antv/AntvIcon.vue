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
      <path d="M4.837 1.418c-.363 0-3.064.002-3.545 0-.188 0-.446.1-.62.2-.538.305-.855 1.123-.558 1.735L10.69 21.71c.357.617.801.87 1.324.871.63.001 1.038-.454 1.18-.7.635-1.088 6.214-10.707 6.214-10.707a1.285 1.285 0 0 0-.497-1.694c-.596-.348-1.397-.197-1.744.388-.307.517-4.58 7.888-4.886 8.413-.156.267-.463.2-.585-.017-.216-.383-5.255-9.13-7.833-13.605l.005.004c-.066-.103-.15-.328-.043-.509.09-.155.279-.138.372-.138h9.535a1.3 1.3 0 0 0 0-2.6zm12.737.029v.003a1.3 1.3 0 0 0 0 2.593v.003l2.386.002c.309 0 .406.3.28.514L19.053 6.59l.002.002a1.3 1.3 0 0 0 2.243 1.303l.002.002 2.425-4.2c.354-.62.349-1.13.086-1.582-.315-.544-.915-.667-1.2-.667Zm-2.839 5.642-.038.002H9.71a.54.54 0 0 0-.523.55c0 .12.037.23.098.32l2.505 4.275q.014.028.032.055l.003.005a.47.47 0 0 0 .39.207c.194 0 .36-.12.435-.294l2.506-4.306a.515.515 0 0 0-.42-.814"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: antv
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for antv (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-antv {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-antv {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-antv 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-antv 3s ease-in-out infinite alternate;
}
</style>