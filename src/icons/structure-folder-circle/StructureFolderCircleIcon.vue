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
      <path d="M8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19C2 17.3431 3.34315 16 5 16C6.65685 16 8 17.3431 8 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 19C22 20.6569 20.6569 22 19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 16C18.8433 13.547 17.9687 13 15.0119 13H8.9881C6.03127 13 5.15669 13.547 5 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 10H12.5625C14.1425 10 14.9325 10 15.5 9.62549C15.7457 9.46336 15.9566 9.25502 16.1208 9.01238C16.5 8.45188 16.5 7.67163 16.5 6.11111C16.5 5.1748 16.5 4.70665 16.2725 4.37035C16.174 4.22476 16.0474 4.09976 15.9 4.00249C15.5595 3.77778 15.0855 3.77778 14.1375 3.77778H12.6425C12.5126 3.77778 12.4476 3.77778 12.3879 3.76912C12.1645 3.73672 11.9647 3.61544 11.8358 3.43402C11.8014 3.38555 11.7726 3.32861 11.715 3.21472C11.4788 2.74826 11.263 2.27872 10.7397 2.08489C10.5105 2 10.2486 2 9.72492 2C8.90751 2 8.4988 2 8.19213 2.16903C7.97352 2.28952 7.79314 2.46767 7.67114 2.68358C7.5 2.98647 7.5 3.39013 7.5 4.19745V5.55556C7.5 7.65069 7.5 8.69825 8.15901 9.34913C8.81802 10 9.87868 10 12 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: structure-folder-circle
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for structure-folder-circle (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-structure-folder-circle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-structure-folder-circle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-structure-folder-circle 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-structure-folder-circle 3s ease-in-out infinite alternate;
}
</style>