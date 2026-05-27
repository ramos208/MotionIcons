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
      <path d="M8.49869 6.50012C8.49869 5.09566 8.49869 4.39343 8.83575 3.88898C8.98167 3.6706 9.16917 3.4831 9.38755 3.33718C9.89199 3.00012 10.5942 3.00012 11.9987 3.00012C13.4032 3.00012 14.1054 3.00012 14.6098 3.33718C14.8282 3.4831 15.0157 3.6706 15.1616 3.88898C15.4987 4.39343 15.4987 5.09566 15.4987 6.50012" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.9981 6.50028L3.99901 6.50012C2.89455 6.50019 1.99891 7.3958 1.99881 8.50025C1.99891 10.7092 3.7902 12.5005 5.99916 12.5007H17.998C20.2069 12.5006 21.9981 10.7094 21.9982 8.50042C21.9982 7.39594 21.1026 6.50036 19.9981 6.50028Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.49869 11.0001V14.0001M16.4987 14.0001V11.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.00114 8.50012L1.99899 13.9971C1.9977 17.298 1.99705 18.9485 3.02223 19.9741C4.04741 20.9997 5.69789 20.9998 8.99883 20.9998L14.9999 21C18.2992 21 19.9489 21.0001 20.974 19.9752C21.9991 18.9503 21.9994 17.3006 22.0001 14.0013L22.0011 8.50012" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: briefcase02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for briefcase02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-briefcase02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-briefcase02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-briefcase02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-briefcase02 3s ease-in-out infinite alternate;
}
</style>