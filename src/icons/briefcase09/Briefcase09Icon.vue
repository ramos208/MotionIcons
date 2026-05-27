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
      <path d="M1.99934 14L1.99935 13.4999C1.99935 10.2 1.99936 8.55012 3.02448 7.525C4.04961 6.49988 5.69952 6.49988 8.99935 6.49988H15.0005C18.2999 6.49988 19.9495 6.49988 20.9746 7.5248C21.9997 8.54971 22 10.1994 22.0005 13.4987L22.0006 13.999C22.0012 17.2994 22.0015 18.9496 20.9763 19.9749C19.9511 21.0003 18.3009 21.0002 15.0005 21.0002L8.99919 21C5.69941 21 4.04953 20.9999 3.02443 19.9748C1.99933 18.9497 1.99934 17.2998 1.99934 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.49934 6.49988C8.49934 5.09542 8.49934 4.39318 8.8364 3.88874C8.98232 3.67036 9.16982 3.48286 9.3882 3.33694C9.89265 2.99988 10.5949 2.99988 11.9993 2.99988C13.4038 2.99988 14.106 2.99988 14.6105 3.33694C14.8289 3.48286 15.0164 3.67036 15.1623 3.88874C15.4993 4.39318 15.4993 5.09542 15.4993 6.49988" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.99934 6.49988V20.9999M16.9993 6.49988V20.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: briefcase09
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for briefcase09 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-briefcase09 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-briefcase09 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-briefcase09 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-briefcase09 3s ease-in-out infinite alternate;
}
</style>