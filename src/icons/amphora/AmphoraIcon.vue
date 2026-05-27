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
      <path d="M14.5 9C14.5 5.5 16.5 3.83333 16.5 3C16.5 2.44772 16.0523 2 15.5 2H8.5C7.94772 2 7.5 2.44772 7.5 3C7.5 3.83333 9.5 5.5 9.5 9C9.5 12.5 6 13 6 16C6 16.7606 6.19285 17.5936 6.46853 18.4163C7.01669 20.0522 7.29077 20.8702 8.07582 21.4351C8.86088 22 9.87366 22 11.8992 22H12.1008C14.1263 22 15.1391 22 15.9242 21.4351C16.7092 20.8702 16.9833 20.0522 17.5315 18.4163C17.8072 17.5936 18 16.7606 18 16C18 13 14.5 12.5 14.5 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 6H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.5 4H17.6207C18.3825 4 19 4.6175 19 5.37924C19 5.45959 18.9929 5.53979 18.979 5.61893L17.5 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.50006 4H6.37924C5.6175 4 5 4.6175 5 5.37924C5 5.45959 5.00702 5.53979 5.02099 5.61893L6.5 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: amphora
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for amphora (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-amphora {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-amphora {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-amphora 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-amphora 3s ease-in-out infinite alternate;
}
</style>