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
      <path d="M6.5253 10.0302a18.279 18.279 0 0 1 15.7805.263c.263.1973.6575 0 .7233-.263l.9205-2.8273c.1315-.263 0-.6576-.3288-.789A22.3557 22.3557 0 0 0 .2788 8.6493a.6575.6575 0 0 0-.1972.8548l2.1698 4.7999c.1315.3287.526.526.8548.3945 2.4328-.9205 6.1807-1.841 9.9943-1.315-2.63.4602-4.6684 1.3807-6.3122 2.367a.6575.6575 0 0 0-.1972.8548L7.906 19.63c.1315.263.4603.3288.6575.1315.526-.526 1.052-.9205 1.5123-1.1835 2.104-1.1836 4.9972-2.1041 8.8765-1.9068a.6575.6575 0 0 0 .6576-.4603l.9862-2.9589c.1316-.263 0-.6575-.263-.789a20.0544 20.0544 0 0 0-13.8737-2.4328z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: stadia
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for stadia (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-stadia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-stadia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-stadia 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-stadia 3s ease-in-out infinite alternate;
}
</style>