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
      <path d="M17.09 8.862a3.017 3.018 0 00-2.615-2.43l-.245-.03a1.662 1.662 0 01-1.453-1.645v-.856a2.028 2.028 0 10-1.602-.02v.874a3.263 3.264 0 002.855 3.236l.245.032c.764.096 1.144.66 1.246 1.155.1.495-.03 1.163-.698 1.55a2.569 2.569 0 01-1.055.337l-3.68.346a4.212 4.212 0 00-1.71.546 3.02 3.02 0 00-1.468 3.257 3.017 3.018 0 002.615 2.43l.245.032a1.662 1.662 0 011.453 1.644v.777a2.03 2.03 0 101.602.016v-.793a3.263 3.264 0 00-2.856-3.236l-.244-.032c-.764-.096-1.145-.66-1.246-1.155-.1-.495.03-1.163.697-1.55a2.569 2.569 0 011.057-.337l3.68-.345a4.212 4.212 0 001.71-.546 3.023 3.024 0 001.467-3.258zm-2.653 4.708a5.71 5.71 0 01-.436.06l-1.543.147 1.93 2.119a3.47 3.47 0 01.906 2.34H16.9a5.07 5.07 0 00-1.325-3.42zm-5.003-3.11a4.65 4.65 0 01.546-.08l1.427-.136L9.469 8.12a3.47 3.47 0 01-.905-2.34H6.963c0 1.267.47 2.483 1.324 3.42z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: recoil
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for recoil (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-recoil {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-recoil {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-recoil 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-recoil 3s ease-in-out infinite alternate;
}
</style>