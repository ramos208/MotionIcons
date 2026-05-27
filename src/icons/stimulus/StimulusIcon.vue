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
      <path d="M.704 0A.704.704 0 000 .704v2.824h5.648a3.064 3.064 0 011.312.36l3.232 1.9a.4.4 0 010 .712l-1.536.904a1.308 1.308 0 01-1.2 0l-1.2-.7a3.084 3.084 0 00-1.316-.36H0v4.236h4.94a3.028 3.028 0 001.316-.36l10.8-6.344a3.008 3.008 0 011.312-.36H24V.692A.704.704 0 0023.296 0zM19.06 6.352a3.084 3.084 0 00-1.316.36l-10.8 6.348a3.064 3.064 0 01-1.312.36H0v4.236h4.94a3.084 3.084 0 001.316-.36l10.8-6.348a3.064 3.064 0 011.312-.36H24V6.352h-3.376zm0 7.072a3.084 3.084 0 00-1.316.36l-10.8 6.344a3.008 3.008 0 01-1.312.36H0v2.824A.708.708 0 00.704 24h22.592a.708.708 0 00.704-.7v-2.824h-5.648a3.008 3.008 0 01-1.312-.36l-3.232-1.896a.4.4 0 010-.716l1.536-.9a1.308 1.308 0 011.2 0l1.2.696a3.028 3.028 0 001.316.36H24v-4.236h-3.376z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: stimulus
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for stimulus (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-stimulus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-stimulus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-stimulus 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-stimulus 3s ease-in-out infinite alternate;
}
</style>