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
      <path d="M21.5 3L16.5 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 21H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.8717 18H7.1283C6.10017 18 5.58611 18 5.19623 17.7234C4.80634 17.4468 4.63649 16.9616 4.29679 15.9912L2.05123 9.57668C1.93172 9.22325 2.02503 8.8336 2.29225 8.57016C2.62854 8.23864 3.15545 8.1872 3.55117 8.44727L4.78349 9.25718C6.02739 10.0747 6.64935 10.4835 7.27815 10.3349C7.90696 10.1863 8.28019 9.54241 9.02665 8.25461L11.2412 4.43412C11.3968 4.16567 11.6864 4 12 4C12.3136 4 12.6032 4.16567 12.7588 4.43412L14.9733 8.25461C15.7198 9.54241 16.093 10.1863 16.7218 10.3349C17.3507 10.4835 17.9726 10.0747 19.2165 9.25718L20.4488 8.44727C20.8445 8.1872 21.3715 8.23864 21.7078 8.57016C21.975 8.8336 22.0683 9.22325 21.9488 9.57668L19.7032 15.9912C19.3635 16.9616 19.1937 17.4468 18.8038 17.7234C18.4139 18 17.8998 18 16.8717 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: crown-minus
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for crown-minus (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-crown-minus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-crown-minus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-crown-minus 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-crown-minus 3s ease-in-out infinite alternate;
}
</style>