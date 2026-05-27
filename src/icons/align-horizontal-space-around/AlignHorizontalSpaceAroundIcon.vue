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
      <path d="M19 2V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 2V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.5 9.5V14.497C9.5 14.9617 9.5 15.194 9.53843 15.3872C9.69624 16.1806 10.3164 16.8008 11.1098 16.9586C11.303 16.997 11.5353 16.997 12 16.997C12.4647 16.997 12.697 16.997 12.8902 16.9586C13.6836 16.8008 14.3038 16.1806 14.4616 15.3872C14.5 15.194 14.5 14.9617 14.5 14.497V9.5C14.5 9.03534 14.5 8.80302 14.4616 8.60982C14.3038 7.81644 13.6836 7.19624 12.8902 7.03843C12.697 7 12.4647 7 12 7C11.5353 7 11.303 7 11.1098 7.03843C10.3164 7.19624 9.69624 7.81644 9.53843 8.60982C9.5 8.80302 9.5 9.03534 9.5 9.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: align-horizontal-space-around
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for align-horizontal-space-around (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-align-horizontal-space-around {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-align-horizontal-space-around {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-align-horizontal-space-around 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-align-horizontal-space-around 3s ease-in-out infinite alternate;
}
</style>