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
      <path d="m3.401 4.594 1.025.366 3.08.912c-.01.18-.016.361-.016.543 0 3.353 1.693 7.444 4.51 10.387 2.817-2.943 4.51-7.034 4.51-10.387 0-.182-.006-.363-.016-.543l3.08-.912 1.025-.366L24 3.276C23.854 8.978 19.146 14.9 13.502 18.17c1.302 1.028 2.778 1.81 4.388 2.215v.114l.004.001v.224a14.55 14.55 0 0 1-4.829-1.281A20.909 20.909 0 0 1 12 18.966c-.353.17-.708.329-1.065.477a14.55 14.55 0 0 1-4.829 1.281V20.5l.004-.001v-.113c1.61-.406 3.086-1.188 4.389-2.216C4.854 14.9.146 8.978 0 3.276l3.401 1.318Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: xmpp
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for xmpp (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-xmpp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-xmpp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-xmpp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-xmpp 3s ease-in-out infinite alternate;
}
</style>