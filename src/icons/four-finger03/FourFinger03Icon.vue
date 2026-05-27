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
      <path d="M7.89205 9.35707L5.4741 11.9595C5.15171 12.2914 4.57635 13.1576 4.50692 13.951C4.4339 14.7853 5.18562 15.9822 5.4741 16.4404C6.22604 17.6346 6.52881 18.2973 7.40846 19.4276C7.88617 20.0414 9.17658 21.2649 11.2772 21.4191C12.8453 21.5341 14.4062 21.5234 15.1459 21.4191C15.6538 21.3474 16.8868 21.1203 18.0474 19.9254C19.2081 18.7306 19.4982 16.7723 19.4982 15.9425V7.97657C19.4982 7.4787 19.2081 6.48296 18.0474 6.48296C16.8868 6.48296 16.5967 7.4787 16.5967 7.97657V11.4617M7.89205 13.951V5.98509C7.89205 5.48722 8.1822 4.49148 9.34282 4.49148C10.5034 4.49148 10.7936 5.48722 10.7936 5.98509M10.7936 5.98509V10.4659M10.7936 5.98509V3.99361C10.7936 3.49574 11.0837 2.5 12.2444 2.5C13.405 2.5 13.6951 3.49574 13.6951 3.99361V5.98509M13.6951 5.98509V10.4659M13.6951 5.98509C13.6951 5.48722 13.9853 4.49148 15.1459 4.49148C16.3065 4.49148 16.5967 5.48722 16.5967 5.98509V8.47444" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: four-finger03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for four-finger03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-four-finger03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-four-finger03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-four-finger03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-four-finger03 3s ease-in-out infinite alternate;
}
</style>