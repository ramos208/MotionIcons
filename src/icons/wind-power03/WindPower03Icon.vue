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
      <path d="M14 10.8664C14 11.9719 13.1046 12.868 12 12.868C10.8954 12.868 10 11.9719 10 10.8664C10 9.76091 10.8954 8.86475 12 8.86475C13.1046 8.86475 14 9.76091 14 10.8664Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.9907 10.6843L20 14.3678C19.1716 15.8036 17.3368 16.2955 15.9019 15.4666L11.7373 12.8487" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.484 9.50448L13.484 2.36762C11.8271 2.36758 10.5168 3.71191 10.5168 5.36975C10.5168 5.36975 10.5168 7.88979 10.5168 9.50451" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.007 10.6865L4 14.3681C4.82843 15.8039 6.6632 16.2958 8.09808 15.4669L12.2617 12.8502" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.4502 16.8694L13.7702 18.8916C13.9962 20.4963 14.1092 21.2987 13.8547 21.8356C13.6001 22.3725 13.1067 22.3726 12.1199 22.3726H11.8801C10.8933 22.3726 10.3999 22.3725 10.1453 21.8356C9.89078 21.2987 10.0038 20.4963 10.2298 18.8916L10.5498 16.8694" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wind-power03
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for wind-power03 (hugeicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-wind-power03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wind-power03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wind-power03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-wind-power03 3s ease-in-out infinite alternate;
}
</style>