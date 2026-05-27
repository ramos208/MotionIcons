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
      <path d="M167.27,40.42A40.06,40.06,0,0,0,128,8a8,8,0,0,0,0,16,24,24,0,0,1,22.85,16.66A64.08,64.08,0,0,0,96,104c0,46.75-25.75,78-76.53,93a16,16,0,0,0,1.77,31.13A264.8,264.8,0,0,0,66.75,232c40.78,0,86.16-9.15,117.53-35.46C210.64,174.44,224,143.3,224,104h0A64.07,64.07,0,0,0,167.27,40.42ZM160,56a48.07,48.07,0,0,1,45.37,32.37L192,95,163.58,80.83a8,8,0,0,0-7.16,0L128,95l-13.37-6.68A48.08,48.08,0,0,1,160,56Zm14,128.3c-18,15.07-43.6,25.26-74.12,29.47A254.08,254.08,0,0,1,24,212.37h0v0c57.23-16.87,87.63-54,88-107.42l12.44,6.22a8,8,0,0,0,7.16,0L160,96.93l28.42,14.21a8,8,0,0,0,7.16,0l12.41-6.2C207.78,138.84,196.35,165.54,174,184.29Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pepper
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pepper (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pepper {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pepper {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pepper 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pepper 3s ease-in-out infinite alternate;
}
</style>