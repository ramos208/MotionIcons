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
      <path d="M9.52393 14.4365L14.437 9.52348" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.0162 16.0088H19.0124M16.0068 21.0192V19.0151" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.98291 7.99188H4.98664M7.99224 2.98149V4.98565" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.1076 12.5688C16.2476 13.3084 17.4163 13.1111 18.2706 12.2566L21.2649 9.26163C22.2431 8.28329 22.2431 6.69709 21.2649 5.71875L18.2796 2.73282C17.3015 1.75448 15.7156 1.75448 14.7375 2.73282L11.7431 5.72784C11.0414 6.42973 10.6362 7.76376 11.4661 8.91014" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.569 15.1086C13.3084 16.2489 13.1111 17.4178 12.2569 18.2723L9.26249 21.2673C8.28436 22.2456 6.69849 22.2456 5.72036 21.2673L2.73506 18.2813C1.75693 17.303 1.75693 15.7168 2.73506 14.7385L5.72944 11.7435C6.43119 11.0416 7.76493 10.6363 8.91107 11.4664" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: unlink03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for unlink03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-unlink03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-unlink03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-unlink03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-unlink03 3s ease-in-out infinite alternate;
}
</style>