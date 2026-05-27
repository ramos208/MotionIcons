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
      <path d="M12 5C14.9952 5 19.2354 5.69203 20.5764 5.92472C20.8312 5.96893 21.0235 6.17124 21.056 6.42778C21.1866 7.45584 21.5 10.1194 21.5 12C21.5 13.8806 21.1866 16.5442 21.056 17.5722C21.0235 17.8288 20.8312 18.0311 20.5764 18.0753C19.2354 18.308 14.9952 19 12 19C9.00483 19 4.76463 18.308 3.4236 18.0753C3.16881 18.0311 2.97653 17.8288 2.94395 17.5722C2.81339 16.5442 2.5 13.8806 2.5 12C2.5 10.1194 2.81339 7.45584 2.94395 6.42778C2.97653 6.17124 3.16882 5.96892 3.42361 5.92472C4.76463 5.69203 9.00483 5 12 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: panorama-enlarge
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for panorama-enlarge (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-panorama-enlarge {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-panorama-enlarge {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-panorama-enlarge 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-panorama-enlarge 3s ease-in-out infinite alternate;
}
</style>