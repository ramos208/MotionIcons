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
      <path d="M3.723.666c-.08-.276.08-.47.356-.47h2.283c.16 0 .31.137.356.274L8.393 7.07h.08L11.491.218A.374.374 0 0111.824 0h.356c.172 0 .287.092.333.218l3.018 6.85h.08L17.286.47a.397.397 0 01.356-.275h2.284c.275 0 .424.195.355.47l-3.683 13.082a.369.369 0 01-.356.275h-.31a.38.38 0 01-.333-.218l-3.568-7.963h-.058l-3.545 7.963a.403.403 0 01-.333.218h-.31a.379.379 0 01-.356-.275L3.723.666m8.308 7.917l-2.594 5.818a1.663 1.663 0 01-.344.448v.004a1.466 1.466 0 01-.688.34l1.4 8.687c.091.16.263.16.367 0l1.79-2.72 1.64 2.708c.104.16.265.16.368 0l1.584-8.698a1.5 1.5 0 01-.832-.618l-.02-.03a1.405 1.405 0 01-.066-.12l-.609-1.366h-.003Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wprocket
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for wprocket (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-wprocket {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wprocket {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wprocket 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-wprocket 3s ease-in-out infinite alternate;
}
</style>