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
      <path d="M15.3747 21.3991C15.5506 21.1194 15.3236 20.6714 14.8696 19.7753C14.6285 19.2994 13.2915 16.8919 13.7551 16.4097C13.8763 16.2836 14.304 16.3909 15.1593 16.6054C16.4152 16.9205 18.0294 16.8096 19.4282 15.7714C24.7293 11.8367 15.1828 2 12 2C8.81719 2 -0.729335 11.8367 4.57182 15.7714C5.97058 16.8096 7.58483 16.9205 8.84066 16.6054C9.696 16.3909 10.1237 16.2836 10.2449 16.4097C10.7085 16.8919 9.37152 19.2994 9.13041 19.7753C8.67639 20.6714 8.44938 21.1194 8.6253 21.3991C9.04019 22.0588 14.789 22.3304 15.3747 21.3991Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: spades
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for spades (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-spades {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-spades {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-spades 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-spades 3s ease-in-out infinite alternate;
}
</style>