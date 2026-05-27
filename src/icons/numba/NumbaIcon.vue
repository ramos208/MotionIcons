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
      <path d="M16.419 15.204s7.235-5.335 4.305-8.786c-3.398-4.003-12.921 4.486-13.962 2.76-1.04-1.725 8.452-5.86 9.481-6.55.112-.075.144-.218.112-.383l1.099-.127-.685-.345.175-.685-.796.621C15.85 1.173 15.34.595 15.049.393c-1.035-.685-2.93-.52-5.685.86-2.756 1.38-9.147 5.685-5.877 10.51 2.93 4.306 11.35-3.094 12.756-1.9 1.205 1.035-8.095 7.411-8.095 7.411h3.965C11.43 18.999 8.148 24 8.148 24l11.934-8.621c-1.253-.186-3.663-.175-3.663-.175zM13.175.908a.776.776 0 01.823.716.776.776 0 01-.717.823.776.776 0 01-.823-.716.768.768 0 01.717-.823z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: numba
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for numba (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-numba {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-numba {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-numba 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-numba 3s ease-in-out infinite alternate;
}
</style>