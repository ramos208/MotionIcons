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
      <path d="M2.95939 9.19373C2.21865 6.47179 3.85922 3.67397 6.6237 2.94463M2.95939 9.19373L2 9.44684M2.95939 9.19373C3.14359 9.87059 3.4577 10.479 3.86823 11M6.6237 2.94463L6.36663 2M6.6237 2.94463C8.66673 2.40563 10.7518 3.14719 12 4.66961M3.4765 5.32297L2.4644 4.74628M11.1407 2.45725L10.557 3.45494" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.4776 11.0091C17.485 11.0091 17.4925 11.0091 17.5 11.0091C19.9853 11.0091 22 13.0269 22 15.5159C22 17.4782 20.7478 18.8813 19 19.5M17.4776 11.0091C17.4924 10.8442 17.5 10.6772 17.5 10.5083C17.5 7.46617 15.0376 5 12 5C9.12324 5 6.76233 7.21197 6.52042 10.0303M17.4776 11.0091C17.3954 11.9219 17 12.5 16.5 13M6.52042 10.0303C3.98398 10.2721 2 12.4116 2 15.0152C2 17.0686 3.2341 18.7103 5 19.5M6.52042 10.0303C6.67826 10.0153 6.83823 10.0076 7 10.0076C7.91072 10.0076 8.76457 10.2514 9.5 10.6775" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.125 15.75H8M12.125 17.75H12M16.125 15.75H16M16.125 19.75H16M12.125 21.75H12M8.125 19.75H8M8.25 15.75C8.25 15.8881 8.13807 16 8 16C7.86193 16 7.75 15.8881 7.75 15.75C7.75 15.6119 7.86193 15.5 8 15.5C8.13807 15.5 8.25 15.6119 8.25 15.75ZM12.25 17.75C12.25 17.8881 12.1381 18 12 18C11.8619 18 11.75 17.8881 11.75 17.75C11.75 17.6119 11.8619 17.5 12 17.5C12.1381 17.5 12.25 17.6119 12.25 17.75ZM16.25 15.75C16.25 15.8881 16.1381 16 16 16C15.8619 16 15.75 15.8881 15.75 15.75C15.75 15.6119 15.8619 15.5 16 15.5C16.1381 15.5 16.25 15.6119 16.25 15.75ZM16.25 19.75C16.25 19.8881 16.1381 20 16 20C15.8619 20 15.75 19.8881 15.75 19.75C15.75 19.6119 15.8619 19.5 16 19.5C16.1381 19.5 16.25 19.6119 16.25 19.75ZM12.25 21.75C12.25 21.8881 12.1381 22 12 22C11.8619 22 11.75 21.8881 11.75 21.75C11.75 21.6119 11.8619 21.5 12 21.5C12.1381 21.5 12.25 21.6119 12.25 21.75ZM8.25 19.75C8.25 19.8881 8.13807 20 8 20C7.86193 20 7.75 19.8881 7.75 19.75C7.75 19.6119 7.86193 19.5 8 19.5C8.13807 19.5 8.25 19.6119 8.25 19.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sun-cloud-snow02
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for sun-cloud-snow02 (hugeicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sun-cloud-snow02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sun-cloud-snow02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sun-cloud-snow02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sun-cloud-snow02 3s ease-in-out infinite alternate;
}
</style>