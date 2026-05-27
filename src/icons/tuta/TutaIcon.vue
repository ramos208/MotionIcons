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
      <path d="m23.993 7.033-5.16 16.755-.043.12a.144.144 0 0 1-.11.091H1.425a.14.14 0 0 1-.13-.191L6.441 6.98a.473.473 0 0 1 .024-.076.134.134 0 0 1 .124-.091H23.82c.14 0 .202.086.173.22zM23.94 4.25 19.885.146c-.178-.173-.192-.144-.384-.144H2.007a.14.14 0 0 0-.14.14c0 .004-.004.061.044.114l.004.005L6 4.393c.096.096.192.12.336.12h17.533c.12 0 .182-.153.072-.263zM4.127 5.805.25 1.95c-.048-.043-.105-.038-.11-.038a.14.14 0 0 0-.14.14v16.975c0 .077.063.14.14.14a.14.14 0 0 0 .13-.092c.004-.005.004-.014.009-.024 0-.004.01-.038.01-.043L4.199 6.164c.048-.144.048-.24-.072-.36z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tuta
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tuta (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tuta {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tuta {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tuta 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tuta 3s ease-in-out infinite alternate;
}
</style>