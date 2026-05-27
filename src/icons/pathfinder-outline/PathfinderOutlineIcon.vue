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
      <path d="M9.02599 12.996C9.08766 11.7402 9.26219 10.9321 9.75623 10.3126C9.91971 10.1076 10.1057 9.92166 10.3107 9.75819C10.9302 9.26415 11.7383 9.08961 12.9941 9.02795M16.9958 9C18.8475 9.02356 19.9094 9.14388 20.6797 9.75819C20.8847 9.92166 21.0706 10.1076 21.2341 10.3126C21.998 11.2706 21.998 12.6794 21.998 15.4971C21.998 18.3148 21.998 19.7237 21.2341 20.6816C21.0706 20.8866 20.8847 21.0726 20.6797 21.2361C19.7217 22 18.3129 22 15.4952 22C12.6775 22 11.2686 22 10.3107 21.2361C10.1057 21.0726 9.91971 20.8866 9.75623 20.6816C9.14193 19.9113 9.02161 18.8494 8.99805 16.9978" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.9721 11.004C14.9104 12.2598 14.7359 13.0679 14.2418 13.6874C14.0783 13.8924 13.8924 14.0783 13.6874 14.2418C13.0679 14.7359 12.2598 14.9104 11.004 14.9721M7.00221 15C5.15059 14.9764 4.08869 14.8561 3.31837 14.2418C3.11338 14.0783 2.9274 13.8924 2.76393 13.6874C2 12.7294 2 11.3206 2 8.50287C2 5.68516 2 4.2763 2.76393 3.31837C2.9274 3.11338 3.11338 2.9274 3.31837 2.76393C4.2763 2 5.68516 2 8.50287 2C11.3206 2 12.7294 2 13.6874 2.76393C13.8924 2.9274 14.0783 3.11338 14.2418 3.31837C14.8561 4.08869 14.9764 5.15059 15 7.00221" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pathfinder-outline
// Category: search
// Physics Presets: Dynamic kinetic adaptation for pathfinder-outline (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pathfinder-outline {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pathfinder-outline {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pathfinder-outline 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pathfinder-outline 3s ease-in-out infinite alternate;
}
</style>