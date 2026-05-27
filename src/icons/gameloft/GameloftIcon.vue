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
      <path d="M.841 18.938c.494.86 1.247 1.262 2.192 1.368 3.394.387 13.519.176 13.534.176 2.402 0 4.33-1.1 4.852-3.372.133-.579.238-2.54.117-4.619-.126-2.16-1.11-3.587-4.048-3.787-3.901-.264-9.42-.14-11.651.09-1.193.124-1.887.939-1.872 2.05.036 2.647.065 3.054.093 3.197 1.185.17 1.17.18 1.206.116.21-.385.596-.642 1.032-.688.503-.066.124-.046 10.598-.205.41 0 .653.185.729.588.086.522.102 1.054.047 1.58-.034.45-.404 1.166-1.08 1.175-.015 0-7.503.035-11.076-.13-1.08-.05-2.263-1.114-2.263-3.094 0-.841 0-3.548.07-4.39A2.235 2.235 0 0 1 5.174 6.96c1.333-.242 13.753-.095 14.542.085 2.241.513 2.43 3.198 2.437 3.255.21 1.543.23 3.283.211 4.855-.046 3.548-1.371 4.327-1.814 4.84-.133.154.039.225.3.415 1.115-.209 2.708-1.427 3.02-4.011.12-.999.213-3.283.02-7.382-.125-2.661-1.243-4.954-4.952-5.376-3.217-.366-10.3-.074-13.482 0C-.097 3.767.008 6.937.006 8.229c-.021 8.174-.014 9.233.836 10.709Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gameloft
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gameloft (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gameloft {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gameloft {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gameloft 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gameloft 3s ease-in-out infinite alternate;
}
</style>