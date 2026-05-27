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
      <path d="M7.99988 2.00079H15.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.53308 11.1509C5.53308 11.1509 8.53308 10.225 11.0331 13.0025M18.5331 11.6138C18.5331 11.6138 17.9215 12.593 17.0331 13.0027" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.52681 2.00085V6.25825C9.52681 6.92021 9.17507 7.49098 8.59392 7.80244C5.60873 9.40225 2.80483 13.9348 5.74597 18.5801C6.40428 19.7196 8.57672 21.9987 12 21.9987C15.4232 21.9987 17.5956 19.7196 18.2539 18.5801C21.1951 13.9348 18.3912 9.40225 15.406 7.80243C14.8248 7.49098 14.4724 6.92021 14.4724 6.25825V2.00085" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.1249 14.0008H13.9999M14.2499 14.0008C14.2499 14.1389 14.1379 14.2508 13.9999 14.2508C13.8618 14.2508 13.7499 14.1389 13.7499 14.0008C13.7499 13.8627 13.8618 13.7508 13.9999 13.7508C14.1379 13.7508 14.2499 13.8627 14.2499 14.0008Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.1249 18.0008H9.99988M10.2499 18.0008C10.2499 18.1389 10.1379 18.2508 9.99988 18.2508C9.86181 18.2508 9.74988 18.1389 9.74988 18.0008C9.74988 17.8627 9.86181 17.7508 9.99988 17.7508C10.1379 17.7508 10.2499 17.8627 10.2499 18.0008Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: test-tube03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for test-tube03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-test-tube03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-test-tube03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-test-tube03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-test-tube03 3s ease-in-out infinite alternate;
}
</style>