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
      <path d="M3.309 5.116a.87.87 0 0 1 .958.24L7.369 8.89h9.262l3.102-3.536a.867.867 0 0 1 1.52.573v7.807H24v1.735h-4.482V8.232l-1.842 2.099a.87.87 0 0 1-.652.295H6.976a.87.87 0 0 1-.652-.295l-1.842-2.1v7.239H0v-1.735h2.747V5.928c0-.362.224-.685.562-.812m16.209 12.089H24v1.735h-4.482zM0 17.205h4.482v1.735H0zm9.253-2.892a1.157 1.157 0 1 1-2.314 0 1.157 1.157 0 0 1 2.314 0m7.807 0a1.157 1.157 0 1 1-2.313 0 1.157 1.157 0 0 1 2.313 0"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pipecat
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pipecat (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pipecat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pipecat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pipecat 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pipecat 3s ease-in-out infinite alternate;
}
</style>