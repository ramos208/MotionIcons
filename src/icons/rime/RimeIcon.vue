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
      <path d="M21.733 0H2.267C1 0 0 1 0 2.267v19.466C0 23 1 24 2.267 24h19.466C23 24 24 23 24 21.733V2.267C24 1 22.933 0 21.733 0Zm-1.6 20.667H19.8c-.6 0-5.933-.134-7.733-.134-1.934 0-7.867.134-7.934.134H3.8v-1.134L3.733 18.4h.334c.066 0 4.2-.2 6.733-.267v-2.466c-2.733-.134-4.667-.867-5.933-2.134-1.934-2-1.8-4.866-1.734-7.933v-.867l2.4.067v.933c-.066 2.6-.2 4.867 1.067 6.134.8.8 2.133 1.266 4.2 1.4V3.533h2.4V13.2c2-.133 3.4-.6 4.2-1.4 1.2-1.267 1.133-3.533 1.067-6.133v-.934l2.4-.066v.866c.133 3.067.2 5.934-1.734 7.934-1.266 1.266-3.2 2-5.933 2.133v2.467c2.467.066 6.667.266 6.733.266h.334l-.067 1.134Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rime
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rime (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rime {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rime {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rime 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rime 3s ease-in-out infinite alternate;
}
</style>