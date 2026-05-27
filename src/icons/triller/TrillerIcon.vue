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
      <path d="M15.548 5.216L7.005 20.012l-.29-.167 8.54-14.788a9.365 9.365 0 0 0-6.07-.906L2.73 15.333l-.609 1.055a9.34 9.34 0 0 0 3.818 4.806l-1.522 2.64.289.166 2.303-3.987h-.002a9.367 9.367 0 0 0 6.068.905l6.321-10.945.287.167-6.168 10.683-.964 1.67a9.322 9.322 0 0 0 7.55-7.555 9.267 9.267 0 0 0-.413-4.802l2.299-3.982-.29-.167L20.14 8.68a9.343 9.343 0 0 0-3.816-4.806zm-5.842-2.64a9.324 9.324 0 0 0-7.132 12.359L8.893 3.989l.292.162L11.483.167 11.193 0z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: triller
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for triller (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-triller {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-triller {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-triller 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-triller 3s ease-in-out infinite alternate;
}
</style>