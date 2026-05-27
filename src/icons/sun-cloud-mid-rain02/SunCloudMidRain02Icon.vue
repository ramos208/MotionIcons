<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M17.4776 11.0091C17.485 11.0091 17.4925 11.0091 17.5 11.0091C19.9853 11.0091 22 13.0269 22 15.5159C22 17.2442 20.9257 18.2931 19.5 19M17.4776 11.0091C17.4924 10.8442 17.5 10.6772 17.5 10.5083C17.5 7.46617 15.0376 5 12 5C9.12324 5 6.76233 7.21197 6.52042 10.0303M17.4776 11.0091C17.3954 11.9219 17.091 12.7704 16.6189 13.5M6.52042 10.0303C3.98398 10.2721 2 12.4116 2 15.0152C2 16.8687 3.0055 18.1412 4.5 19M6.52042 10.0303C6.67826 10.0153 6.83823 10.0076 7 10.0076C7.91072 10.0076 8.76457 10.2514 9.5 10.6775" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.95939 9.19373C2.21865 6.47179 3.85922 3.67397 6.6237 2.94463M2.95939 9.19373L2 9.44684M2.95939 9.19373C3.14359 9.87059 3.4577 10.479 3.86823 11M6.6237 2.94463L6.36663 2M6.6237 2.94463C8.66673 2.40563 10.7518 3.14719 12 4.66961M3.4765 5.32297L2.4644 4.74628M11.1407 2.45725L10.557 3.45494" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.0434 13L10.907 14.036C10.3596 14.596 10.3596 15.492 10.9358 16.052C11.224 16.332 11.6401 16.5 12.0434 16.5C12.4468 16.5 12.7797 16.36 13.0678 16.108C13.6441 15.548 13.6441 14.624 13.0678 14.064L12.0434 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.54345 18.5L7.40701 19.536C6.8596 20.096 6.85963 20.992 7.43585 21.552C7.72396 21.832 8.14009 22 8.54345 22C8.9468 22 9.27972 21.86 9.56783 21.608C10.1441 21.048 10.1441 20.124 9.56783 19.564L8.54345 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.5434 18.5L14.407 19.536C13.8596 20.096 13.8596 20.992 14.4358 21.552C14.724 21.832 15.1401 22 15.5434 22C15.9468 22 16.2797 21.86 16.5678 21.608C17.1441 21.048 17.1441 20.124 16.5678 19.564L15.5434 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sun-cloud-mid-rain02
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for sun-cloud-mid-rain02 (hugeicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sun-cloud-mid-rain02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sun-cloud-mid-rain02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sun-cloud-mid-rain02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sun-cloud-mid-rain02 3s ease-in-out infinite alternate;
}
</style>