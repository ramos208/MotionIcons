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
      <path d="M5.40887 10.5448L3.33488 14.4677C2.27012 16.4816 1.73775 17.4886 2.13166 18.2453C2.52557 19.002 3.58215 19.002 5.6953 19.002H7.76929C9.05748 19.002 9.70157 19.002 10.1018 18.5604C10.502 18.1189 10.502 17.4082 10.502 15.9869V12.064C10.502 7.57709 10.502 5.33363 9.49221 5.03243C8.48246 4.73124 7.45793 6.66909 5.40887 10.5448Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.5931 10.5448L20.6671 14.4677C21.7318 16.4816 22.2642 17.4886 21.8703 18.2453C21.4764 19.002 20.4198 19.002 18.3067 19.002L16.2327 19.002C14.9445 19.002 14.3004 19.002 13.9002 18.5604C13.5 18.1189 13.5 17.4082 13.5 15.9869L13.5 12.064C13.5 7.57709 13.5 5.33363 14.5097 5.03243C15.5195 4.73124 16.544 6.66909 18.5931 10.5448Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: image-flip-horizontal
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for image-flip-horizontal (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-image-flip-horizontal {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-image-flip-horizontal {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-image-flip-horizontal 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-image-flip-horizontal 3s ease-in-out infinite alternate;
}
</style>