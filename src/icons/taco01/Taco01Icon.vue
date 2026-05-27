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
      <path d="M12 9C7.67909 9 3.98995 11.9368 2.53353 16.0723C2.00628 17.5695 1.74265 18.318 2.34852 19.159C2.95439 20 3.94331 20 5.92117 20H18.0788C20.0567 20 21.0456 20 21.6515 19.159C22.2573 18.318 21.9937 17.5695 21.4665 16.0723C20.0101 11.9368 16.3209 9 12 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.3292 15C22.2972 13.7279 22.2176 11.9699 21.0901 10.7778C20.5725 10.2305 20.2571 9.53455 20.1924 8.80334C20.0438 7.12573 18.626 5.78671 16.8478 5.65884L16.6438 5.64417C15.8567 5.58757 15.1028 5.30226 14.4905 4.83203C13.0458 3.72266 10.9542 3.72266 9.50953 4.83203C8.89717 5.30226 8.14332 5.58757 7.35624 5.64417L7.15218 5.65884C5.37401 5.78671 3.95622 7.12573 3.80765 8.80334C3.74289 9.53455 3.42752 10.2305 2.90986 10.7778C1.78245 11.9699 1.70277 13.7279 2.67083 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.125 14H16M16.25 14C16.25 14.1381 16.1381 14.25 16 14.25C15.8619 14.25 15.75 14.1381 15.75 14C15.75 13.8619 15.8619 13.75 16 13.75C16.1381 13.75 16.25 13.8619 16.25 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.125 17H18M18.25 17C18.25 17.1381 18.1381 17.25 18 17.25C17.8619 17.25 17.75 17.1381 17.75 17C17.75 16.8619 17.8619 16.75 18 16.75C18.1381 16.75 18.25 16.8619 18.25 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.125 16H13M13.25 16C13.25 16.1381 13.1381 16.25 13 16.25C12.8619 16.25 12.75 16.1381 12.75 16C12.75 15.8619 12.8619 15.75 13 15.75C13.1381 15.75 13.25 15.8619 13.25 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: taco01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for taco01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-taco01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-taco01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-taco01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-taco01 3s ease-in-out infinite alternate;
}
</style>