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
      <path d="M11.9986 0C5.4353 0 2.1382 3.5117 2.1382 3.5117s-.3775 2.5993-.1366 7.8332C2.3654 19.2513 11.999 24.0005 11.9999 24c.001-.0005 9.6347-4.7488 9.9985-12.6551.2408-5.2339-.1364-7.8332-.1364-7.8332S18.562 0 11.9986 0zm-.6782 2.9194a7.3657 7.3657 0 0 1 8.0454 7.3343 7.1158 7.1158 0 0 1-2.7712 5.6342c-1.1788-.108-2.4098-.4423-2.9676-.7605 1.4379-.9177 3.3036-2.7033 3.3036-4.8737a4.9361 4.9361 0 0 0-4.9305-4.9305c-2.7165 0-4.9266 2.2743-4.9266 5.0698 0 2.332 1.2355 4.1624 3.6718 5.4404 1.5943.8363 3.9724 1.449 6.4852 1.7723-.418.6225-1.533 1.686-2.1847 2.0462-3.0087-.4934-5.6513-1.5354-7.4578-3.0964-1.9323-1.6699-2.9536-3.8488-2.9536-6.3018a7.3657 7.3657 0 0 1 6.686-7.3343Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: qualys
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for qualys (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-qualys {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-qualys {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-qualys 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-qualys 3s ease-in-out infinite alternate;
}
</style>