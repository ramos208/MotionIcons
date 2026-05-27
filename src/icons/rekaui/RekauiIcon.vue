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
      <path d="M6.3478 1.3265c-.6864 0-1.1148.744-.77 1.3375l2.564 4.4157h7.9478c1.1216 0 1.8502 1.26 1.2908 2.2322l-3.9539 6.8691 3.4078 5.869a.8903.8903 0 0 0 .77.4431h5.5038c.711 0 1.1352-.7922.741-1.384l-3.6294-5.4496c-.3177-.477-.089-1.1085.4021-1.362 1.1318-.592 1.9681-1.4035 2.5131-2.4347.5467-1.0343.8215-2.2223.8215-3.5667 0-1.3443-.2748-2.5402-.8219-3.5899-.545-1.046-1.385-1.8689-2.5244-2.4681l-.0006-.0002c-1.1369-.6054-2.5976-.9114-4.388-.9114zM.9908 7.5796c-.761 0-1.237.8232-.8574 1.4829l7.5494 13.1152c.3805.661 1.3343.661 1.7148 0L16.947 9.0625c.3796-.6597-.0963-1.4829-.8574-1.4829z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rekaui
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rekaui (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rekaui {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rekaui {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rekaui 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rekaui 3s ease-in-out infinite alternate;
}
</style>