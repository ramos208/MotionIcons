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
      <path d="M2.0799 9.73404C1.52911 12.578 4.00638 14 4.00638 14H19.995C19.995 14 22.4709 12.578 21.9201 9.73404C21.5732 7.94296 17.7287 5.58788 14.9296 4.08959C13.5726 3.3632 12.894 3 12 3C11.1059 3 10.4274 3.3632 9.07038 4.08959C6.2713 5.58788 2.42678 7.94296 2.0799 9.73404Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.14163 14C2.66809 15.3249 2.21055 18.5761 5.30556 19.3837C7.36279 19.9204 9.64289 20.487 10.9407 20.8065C11.4645 20.9355 11.7264 21 12 21C12.2736 21 12.5355 20.9355 13.0593 20.8065C14.3571 20.487 16.6372 19.9204 18.6944 19.3837C21.7894 18.5761 21.3319 15.3249 19.8584 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.3899 7.72984L11.4959 7.1281C11.8098 6.9573 12.1902 6.9573 12.5041 7.1281L13.6101 7.72984C13.9002 7.88767 14.0631 8.21 13.977 8.52648C13.7595 9.3254 13.2247 10.5958 12 11C10.7753 10.5958 10.2405 9.3254 10.023 8.52648C9.93688 8.21 10.0998 7.88767 10.3899 7.72984Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: police-cap
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for police-cap (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-police-cap {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-police-cap {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-police-cap 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-police-cap 3s ease-in-out infinite alternate;
}
</style>