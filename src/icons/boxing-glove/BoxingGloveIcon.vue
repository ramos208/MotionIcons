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
      <path d="M16.5841 6.05737C18.9187 6.05737 19.5461 9.24441 18.5423 11.3422C18.0933 12.2806 17.3165 13.1051 16.6946 13.9357C16.0982 14.7322 15.8 15.1304 15.408 15.4091C14.5339 16.0304 13.522 16 12.4897 16H11.4583C8.91929 16 7.64977 16 6.81095 15.2904C5.97214 14.5809 5.76679 13.3596 5.3561 10.917C5.13029 9.57401 4.97133 8.23222 5.00434 6.93135C5.06478 4.54904 6.8888 2.54273 9.35241 2.14874C10.526 1.96106 11.9711 1.94251 13.1454 2.14182C15.2422 2.49775 16.7207 4.30419 16.5741 6.33112C16.4847 7.56721 15.9831 8.83974 15.67 10.0344" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.00391 15.5V18C7.00391 19.8856 7.00391 20.8284 7.58969 21.4142C8.17548 22 9.11829 22 11.0039 22H12.0039C13.8895 22 14.8323 22 15.4181 21.4142C16.0039 20.8284 16.0039 19.8856 16.0039 18V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.00391 19H10.0039" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: boxing-glove
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for boxing-glove (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-boxing-glove {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-boxing-glove {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-boxing-glove 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-boxing-glove 3s ease-in-out infinite alternate;
}
</style>