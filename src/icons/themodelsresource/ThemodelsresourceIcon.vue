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
      <path d="M1.25 0C.557 0 0 .557 0 1.25v21.5C0 23.442.557 24 1.25 24h21.5c.692 0 1.25-.558 1.25-1.25V1.25C24 .557 23.442 0 22.75 0h-2.734c1.667 1.037 1.521 11.428 1.68 18.734.023 1.1.616 3.805.616 3.805s-1.702.913-3.15 1.373c-.652-2.478-.633-3.488-.633-3.488l-.181-10.67-.4-4.62c-2.156 3.08-3.445 6.123-3.987 8.007-1.442.915-1.92 1.09-2.957 1.384-1.056-.552-3.91-3.216-4.961-3.921 2.096 6.826 2.238 9.642 2.238 9.642s-2.231 1.759-2.797 1.606c-.232-.064-.495-.275-.507-.516-.183-3.672-.76-5.902-1.508-8.773C2.576 9.13.32 4.07.32 4.07c.948-.641 1.52-.883 2.836-1.265L11.61 11S16.073 3.616 17.104.906c0 0 2.244-.748 2.71-.906H1.25z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: themodelsresource
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for themodelsresource (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-themodelsresource {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-themodelsresource {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-themodelsresource 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-themodelsresource 3s ease-in-out infinite alternate;
}
</style>