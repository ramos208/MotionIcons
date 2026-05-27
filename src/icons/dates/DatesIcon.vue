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
      <path d="M10.9634 5.99557C11.3365 7.83872 10.127 10.4978 6.95583 9.91143M7.83332 7.06718C8.72631 6.01842 10.8938 5.58672 13.4666 6.46785C14.5794 6.77285 16.9811 7.96207 18.0835 8.84055C19.4289 9.73549 21.3449 11.6344 21.845 13.6086C22.3911 15.4268 21.5448 18.1685 18.8879 19.9665C16.347 21.6859 12.787 21.7306 9.33138 16.37C9.20417 16.37 5.22995 9.90451 7.83332 7.06718Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M1.99951 14.0814C4.0584 13.6671 6.39963 14.9254 5.99795 17.9958M16.9374 7.80658C16.9374 7.61715 16.5264 6.65927 16.1206 6.15985C14.2926 3.52828 11.5813 2.581 9.67688 3.16951C7.7013 3.664 5.81042 5.50484 4.91167 6.84773C3.8491 8.13919 2.79227 10.354 2.48411 11.4659C1.59567 14.0363 2.01008 16.2589 3.05626 17.1549C3.74123 17.7931 5.92049 18.6866 9.15774 17.1549" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.0018 13.0212C11.0018 13.0212 11.0011 14.2451 12.2191 14.2446C13.4372 14.2441 13.4366 15.4678 13.4366 15.4678M14.0116 9.99738C14.0116 9.99738 14.0109 11.2213 15.2289 11.2208C16.447 11.2203 16.4464 12.4439 16.4464 12.4439M15.567 14.5509C15.567 14.5509 15.5663 15.7747 16.7843 15.7742C18.0024 15.7737 18.0018 16.9974 18.0018 16.9974" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dates
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dates (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dates {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dates {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dates 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dates 3s ease-in-out infinite alternate;
}
</style>