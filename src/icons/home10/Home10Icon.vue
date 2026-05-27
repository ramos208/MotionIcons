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
      <path d="M8.9412 6.34883L10.7549 8.90093C11.1244 9.42085 11.3092 9.68081 11.4046 9.98004C11.5 10.2793 11.5 10.5987 11.5 11.2377V20H5.5C3.61438 20 2.67157 20 2.08579 19.4112C1.5 18.8225 1.5 17.8749 1.5 15.9797V11.2377C1.5 10.5987 1.5 10.2793 1.59541 9.98004C1.69082 9.68081 1.87557 9.42085 2.24507 8.90093L4.0588 6.34883C5.17165 4.78294 5.72807 4 6.5 4C7.27193 4 7.82835 4.78294 8.9412 6.34883Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.5 20V16C8.5 15.2523 8.5 14.8785 8.33923 14.6C8.23391 14.4176 8.08242 14.2661 7.9 14.1608C7.62154 14 7.24769 14 6.5 14C5.75231 14 5.37846 14 5.1 14.1608C4.91758 14.2661 4.76609 14.4176 4.66077 14.6C4.5 14.8785 4.5 15.2523 4.5 16V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.5 20H18.5C20.3856 20 21.3284 20 21.9142 19.4142C22.5 18.8284 22.5 17.8856 22.5 16V11.4482C22.5 10.7315 22.5 10.3732 22.3805 10.0432C22.2611 9.7133 22.0317 9.43802 21.5729 8.88746L18.6994 5.43926C18.1096 4.73152 17.8147 4.37764 17.4116 4.18882C17.0084 4 16.5478 4 15.6265 4H6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 10H11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: home10
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for home10 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-home10 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-home10 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-home10 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-home10 3s ease-in-out infinite alternate;
}
</style>