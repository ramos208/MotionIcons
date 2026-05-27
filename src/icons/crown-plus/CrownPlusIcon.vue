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
      <path d="M18.5 2V7M21 4.5L16 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 22H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.8717 19H7.1283C6.10017 19 5.58611 19 5.19623 18.7234C4.80634 18.4468 4.63649 17.9616 4.29679 16.9912L2.05123 10.5767C1.93172 10.2233 2.02503 9.8336 2.29225 9.57016C2.62854 9.23864 3.15545 9.1872 3.55117 9.44727L4.78349 10.2572C6.02739 11.0747 6.64935 11.4835 7.27815 11.3349C7.90696 11.1863 8.28019 10.5424 9.02665 9.25461L11.2412 5.43412C11.3968 5.16567 11.6864 5 12 5C12.3136 5 12.6032 5.16567 12.7588 5.43412L14.9733 9.25461C15.7198 10.5424 16.093 11.1863 16.7218 11.3349C17.3507 11.4835 17.9726 11.0747 19.2165 10.2572L20.4488 9.44727C20.8445 9.1872 21.3715 9.23864 21.7078 9.57016C21.975 9.8336 22.0683 10.2233 21.9488 10.5767L19.7032 16.9912C19.3635 17.9616 19.1937 18.4468 18.8038 18.7234C18.4139 19 17.8998 19 16.8717 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: crown-plus
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for crown-plus (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-crown-plus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-crown-plus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-crown-plus 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-crown-plus 3s ease-in-out infinite alternate;
}
</style>