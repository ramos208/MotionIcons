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
      <path d="M11.2582 2.3987c-.2791.0038-.573.1774-.6906.4496l-4.9783 11.566h.001l1.7144 6.3107c.1384.6059.7421.9857 1.3488.8481l2.6047-.5912-.4004-5.013.0005-.0009-5.2671-1.5532 5.2666.753zm.001 0 .3965 12.769 5.2714-.7533-4.9784-11.5661h.0005c-.1176-.2722-.411-.4457-.69-.4496ZM.4407 7.5341c-.3107.0029-.5609.35-.3797.6662l5.7242 9.9861-.9681-3.562a.7983.7983 0 0 1 .037-.526l1.4594-3.391L.6612 7.5918a.4446.4446 0 0 0-.2204-.0576Zm19.173 1.6802-3.419 1.4758 1.4669 3.4083h.001a.7968.7968 0 0 1 .037.5255l-.924 3.4008 5.621-8.8104zm2.7829 0-.669 2.4636 1.795.8528c.2914.1384.5896-.177.4351-.46h-.0005zm-5.4696 5.2005-5.2676 1.5541-.4004 5.013 2.6047.5912c.6067.1376 1.2102-.2422 1.3479-.848z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: padlet
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for padlet (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-padlet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-padlet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-padlet 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-padlet 3s ease-in-out infinite alternate;
}
</style>