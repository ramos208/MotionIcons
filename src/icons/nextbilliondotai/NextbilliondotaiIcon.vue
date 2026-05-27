<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M22.399 13.3694a6.3067 6.3067 0 0 0-.5655-.567 6.3754 6.3754 0 0 0-4.2337-1.5994h-4.7989V6.4007a6.3783 6.3783 0 0 0-1.5993-4.2338 6.1066 6.1066 0 0 0-.567-.5641A6.3973 6.3973 0 0 0 .002 6.4016v4.7989a1.5994 1.5994 0 0 0 1.5993 1.5993h9.5959v4.7989a6.3696 6.3696 0 0 0 .855 3.1985l.0842.1453a6.3445 6.3445 0 0 0 .6615.8942 6.6637 6.6637 0 0 0 .5641.5641 6.4689 6.4689 0 0 0 .8913.6586l.1453.0858a6.4074 6.4074 0 0 0 7.4324-.7444 6.6963 6.6963 0 0 0 .5655-.5655 6.3973 6.3973 0 0 0 0-8.4677zm-11.198-2.1708H1.6052v-4.799a4.7989 4.7989 0 0 1 9.5958 0zm6.3965 11.1951a4.7703 4.7703 0 0 1-3.1986-1.2243 4.1977 4.1977 0 0 1-.378-.3766 4.782 4.782 0 0 1-1.2211-3.1985v-4.7964h4.7988a4.7989 4.7989 0 0 1 0 9.5958z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: nextbilliondotai
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for nextbilliondotai (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-nextbilliondotai {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-nextbilliondotai {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-nextbilliondotai 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-nextbilliondotai 2s ease-in-out infinite alternate;
}
</style>