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
      <path d="M7.88457 9.17584C6.17716 9.66367 5 11.2243 5 13M7.88457 9.17584C9.85501 8.61285 14.0271 8.25059 14.8267 6.00741M7.88457 9.17584C7.88457 5 12 6 12 2C14.0469 2 15.5026 4.11086 14.8267 6.00741M14.8267 6.00741C16.454 5.8677 17.5442 7.73849 16.6846 9.07847M16.6846 9.07847C16.4109 9.50517 15.9612 9.85252 15.5 10.119M16.6846 9.07847C18.6418 9.5353 19 11.2937 19 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16 14.9487C16 12.3504 20 12.3504 20 14.9487C20 16.3111 19.2446 17.4779 18.6584 18.659C17.8515 20.2846 17.448 21.0973 16.7231 21.5487C15.9981 22 15.096 22 13.2918 22H10.7082C8.90398 22 8.00186 22 7.27691 21.5487C6.55195 21.0973 6.14852 20.2846 5.34164 18.659C4.7554 17.4779 4 16.3111 4 14.9487C4 12.3504 8 12.3504 8 14.9487C8 12.3504 12 12.3504 12 14.9487C12 12.3504 16 12.3504 16 14.9487Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cupcake02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cupcake02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cupcake02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-cupcake02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cupcake02 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cupcake02 3s ease-in-out infinite alternate;
}
</style>