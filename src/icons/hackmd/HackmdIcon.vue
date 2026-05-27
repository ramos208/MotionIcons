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
      <path d="M23.93 12.987c.006-.954-.289-1.489-1.035-1.86l-4.559-2.275q-.271-.135-.551-.239l-.03-3.085c-.02-.907-.293-1.485-1.039-1.857l-4.56-2.274a5.49 5.49 0 0 0-5.025.06l-5.86 3.1c-.648.343-.983.98-.998 1.626l-.272 4.67c-.012.441.157.914.576 1.166l4.878 2.924q.436.26.9.434l-.149 2.95c-.018.468.13.895.55 1.147l4.878 2.924a5.49 5.49 0 0 0 5.583.044l6.213-3.593c.43-.248.57-.68.57-1.152l-.071-4.71zM6.21 9.07c-1.035-.478-3.854-1.977-4.07-2.098-.487-.273-.51-.562-.484-.91a.96.96 0 0 1 .531-.793l5.579-2.838a4.26 4.26 0 0 1 3.819-.01c.994.496 2.984 1.488 3.978 1.986l.01.005a.96.96 0 0 1 .513 1.036.92.92 0 0 1-.495.678c-.077.042-4.35 2.346-5.202 2.804a4.67 4.67 0 0 1-4.178.14zm16.038 3.965c-.042.29-.204.567-.492.738l-5.313 3.159a4.34 4.34 0 0 1-4.31.076L8.235 14.87c-.708-.388-.712-1.418-.008-1.813l5.275-2.947a4.34 4.34 0 0 1 3.967-.14l4.201 1.976c.359.17.556.503.585.85q.01.12-.007.24z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hackmd
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hackmd (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hackmd {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hackmd {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hackmd 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hackmd 3s ease-in-out infinite alternate;
}
</style>