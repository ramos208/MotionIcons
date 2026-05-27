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
      <path d="M347.5 144.8c6.5 5.4 12.5 11.3 18 17.7 8.7 10.2 23.7 14 35.1 6.9l54.1-33.8c11.2-7 14.7-21.7 6.9-32.2-15.3-20.5-33.5-38.6-54.1-53.8-10.4-7.6-24.7-4.3-31.8 6.4l-35.1 52.6c-7.8 11.6-3.8 27.3 7 36.2zM327.8 41.1c8.6-12.9 2.9-30.5-12.2-34.1-19.1-4.6-39.1-7-59.6-7s-40.4 2.4-59.6 7c-15.1 3.6-20.8 21.2-12.2 34.1l40 60c5.2 7.8 14.5 11.7 23.9 11.2 5.2-.3 10.6-.3 15.8 0 9.4 .5 18.7-3.4 23.9-11.2l40-60zM50.5 103.3c-7.9 10.5-4.3 25.3 6.9 32.2l54.1 33.8c11.4 7.1 26.3 3.3 35.1-6.9 5.5-6.4 11.5-12.3 18-17.7 10.8-8.9 14.8-24.6 7-36.2L136.4 55.9c-7.1-10.7-21.5-14-31.8-6.4-20.6 15.1-38.8 33.3-54.1 53.8zm62 141.1c.8-9.9-3.3-19.9-11.8-25.1L41 182c-12.9-8-29.9-2.3-33.6 12.5-4.9 19.7-7.5 40.3-7.5 61.6l0 24c0 13.3 10.7 24 24 24l64 0c13.3 0 24-10.7 24-24l0-24c0-3.9 .2-7.8 .5-11.6zm287.1 0c.3 3.8 .5 7.7 .5 11.6l0 24c0 13.3 10.7 24 24 24l64 0c13.3 0 24-10.7 24-24l0-24c0-21.2-2.6-41.8-7.5-61.6-3.6-14.7-20.7-20.5-33.6-12.5l-59.7 37.3c-8.4 5.3-12.6 15.2-11.8 25.1zM88 352l-64 0c-13.3 0-24 10.7-24 24L0 488c0 13.3 10.7 24 24 24l64 0c13.3 0 24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm400 0l-64 0c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24l64 0c13.3 0 24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zM280 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 304c0 13.3 10.7 24 24 24s24-10.7 24-24l0-304zm-80 32c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 272c0 13.3 10.7 24 24 24s24-10.7 24-24l0-272zm160 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 272c0 13.3 10.7 24 24 24s24-10.7 24-24l0-272z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dungeon
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dungeon (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dungeon {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dungeon {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dungeon 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dungeon 3s ease-in-out infinite alternate;
}
</style>