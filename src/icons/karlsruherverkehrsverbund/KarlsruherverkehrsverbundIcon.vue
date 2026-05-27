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
      <path d="M12.91 6.089c-2.491 2.4-6.153 4.238-11.265 4.3l-.397 1.745h22.316L24 10.388H9.309c2.984-1.01 4.688-2.676 6.56-4.3zm10.45 6.721c-5.723.013-8.441 2.712-10.095 5.101h2.49c2.6-3.296 5.827-3.428 7.196-3.442zm-22.307.475L0 17.887h1.236l.488-2.173 1.097 2.173H4.27l-1.34-2.368 2.23-2.234H3.575l-1.723 1.869.436-1.87zm4.237 0l.509 4.602h1.517l2.63-4.602h-1.32l-1.852 3.463-.265-3.463zm4.89 0l.503 4.602h1.54l2.62-4.602h-1.32l-1.852 3.463-.268-3.463Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: karlsruherverkehrsverbund
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for karlsruherverkehrsverbund (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-karlsruherverkehrsverbund {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-karlsruherverkehrsverbund {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-karlsruherverkehrsverbund 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-karlsruherverkehrsverbund 3s ease-in-out infinite alternate;
}
</style>