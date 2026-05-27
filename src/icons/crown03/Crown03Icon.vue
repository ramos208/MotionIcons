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
      <path d="M5 20.5H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.8717 17.5H7.1283C6.10017 17.5 5.58611 17.5 5.19623 17.2234C4.80634 16.9468 4.63649 16.4616 4.29679 15.4912L2.05123 9.07668C1.93172 8.72325 2.02503 8.3336 2.29225 8.07016C2.62854 7.73864 3.15545 7.6872 3.55117 7.94727L4.78349 8.75718C6.02739 9.5747 6.64935 9.98345 7.27815 9.83488C7.90696 9.68631 8.28019 9.04241 9.02665 7.75461L11.2412 3.93412C11.3968 3.66567 11.6864 3.5 12 3.5C12.3136 3.5 12.6032 3.66567 12.7588 3.93412L14.9733 7.75461C15.7198 9.04241 16.093 9.68631 16.7218 9.83488C17.3507 9.98345 17.9726 9.5747 19.2165 8.75718L20.4488 7.94727C20.8445 7.6872 21.3715 7.73864 21.7078 8.07016C21.975 8.3336 22.0683 8.72325 21.9488 9.07668L19.7032 15.4912C19.3635 16.4616 19.1937 16.9468 18.8038 17.2234C18.4139 17.5 17.8998 17.5 16.8717 17.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: crown03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for crown03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-crown03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-crown03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-crown03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-crown03 3s ease-in-out infinite alternate;
}
</style>