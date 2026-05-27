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
      <path d="M18.7088 3.49546C16.8165 2.55394 14.5009 2.00012 12 2.00012C9.4991 2.00012 7.1835 2.55394 5.29116 3.49547C4.36318 3.95718 3.89919 4.18804 3.4496 4.91391C3 5.63978 3 6.3426 3 7.74826V11.2372C3 16.9206 7.54236 20.0805 10.173 21.4339C10.9067 21.8114 11.2735 22.0001 12 22.0001C12.7265 22.0001 13.0933 21.8114 13.8269 21.4339C16.4576 20.0805 21 16.9206 21 11.2372L21 7.74827C21 6.34261 21 5.63978 20.5504 4.91391C20.1008 4.18804 19.6368 3.95718 18.7088 3.49546Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 9.00012V10.0001M11 9.50012C11 9.76534 11.1054 10.0197 11.2929 10.2072C11.4804 10.3948 11.7348 10.5001 12 10.5001C12.2652 10.5001 12.5196 10.3948 12.7071 10.2072C12.8946 10.0197 13 9.76534 13 9.50012C13 9.23491 12.8946 8.98055 12.7071 8.79302C12.5196 8.60548 12.2652 8.50012 12 8.50012C11.7348 8.50012 11.4804 8.60548 11.2929 8.79302C11.1054 8.98055 11 9.23491 11 9.50012Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.75 14.0001H11.25L12 10.5001L12.75 14.0001Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: security
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for security (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-security {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-security {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-security 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-security 3s ease-in-out infinite alternate;
}
</style>