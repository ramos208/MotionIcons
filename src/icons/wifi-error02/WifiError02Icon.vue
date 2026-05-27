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
      <path d="M2 8.31974C3.99395 6.5363 6.41376 5.33105 9 4.8031M22 8.31974C20.0061 6.5363 17.5862 5.33105 15 4.8031M5 12.3587C6.13592 11.2453 7.50961 10.4295 9 9.96076M19 12.3587C17.8641 11.2453 16.4904 10.4295 15 9.96076M8.5 15.9287C8.65791 15.774 8.82501 15.6307 9 15.4994M15.5 15.9287C15.3421 15.774 15.175 15.6307 15 15.4994M12.1256 19.2501H12.0006M12.2506 19.2501C12.2506 19.3881 12.1387 19.5001 12.0006 19.5001C11.8625 19.5001 11.7506 19.3881 11.7506 19.2501C11.7506 19.112 11.8625 19.0001 12.0006 19.0001C12.1387 19.0001 12.2506 19.112 12.2506 19.2501Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 15.5001V4.50006" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wifi-error02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for wifi-error02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-wifi-error02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wifi-error02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wifi-error02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-wifi-error02 3s ease-in-out infinite alternate;
}
</style>