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
      <path d="M7 17L17 17" stroke="currentColor" stroke-linecap="round"/><path d="M9 12L15 12" stroke="currentColor" stroke-linecap="round"/><path d="M12 3V2" stroke="currentColor" stroke-linecap="round"/><path d="M11.5544 3.58151C10.633 4.83327 8.63764 7.82527 9.05721 9.75C9.45139 11.5583 11.019 12 12 12C12.981 12 14.5486 11.5583 14.9428 9.75C15.3624 7.82527 13.367 4.83327 12.4456 3.58151C12.2207 3.27594 11.7793 3.27594 11.5544 3.58151Z" stroke="currentColor" stroke-linecap="round"/><path d="M17.8 22L6.2 22C5.70557 22 5.41559 21.434 5.7005 21.0299C7.01607 19.1641 9.76293 15.044 10.1929 12.5964C10.2502 12.27 10.5186 12 10.85 12L13.15 12C13.4814 12 13.7498 12.27 13.8071 12.5963C14.237 15.044 16.9839 19.1641 18.2995 21.0299C18.5844 21.434 18.2944 22 17.8 22Z" stroke="currentColor" stroke-linecap="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bishop
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bishop (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bishop {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bishop {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bishop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bishop 3s ease-in-out infinite alternate;
}
</style>