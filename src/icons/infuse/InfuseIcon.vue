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
      <path d="M18.802 7.736c0 .502-.035.8-.146 1.24a5.1 5.1 0 0 1-.968 1.932c-.176.218-.574.61-.778.764-.077.06-2.619 1.894-5.65 4.077a842 842 0 0 0-5.638 4.077 2.6 2.6 0 0 0-.55.715 2.39 2.39 0 0 0 1.003 3.18c.703.379 1.622.372 2.293-.02a2322 2322 0 0 0 11.378-8.184 6 6 0 0 0 .845-.849 4.78 4.78 0 0 0 .76-4.416 4.86 4.86 0 0 0-1.354-2.068 15 15 0 0 0-.673-.518c-.257-.185-.48-.35-.497-.361-.02-.017-.025.089-.025.43M4.31 5.62c-.903.2-1.573.844-1.822 1.75l-.066.234v7.712l.064.227c.302 1.093 1.212 1.8 2.316 1.8 1.158 0 2.12-.794 2.349-1.945.044-.223.044-7.654 0-7.877a2.5 2.5 0 0 0-.23-.656A2.38 2.38 0 0 0 5.393 5.64a3 3 0 0 0-1.083-.02M6.642.03a4.79 4.79 0 0 0-4.126 3.777c-.054.263-.124.912-.1.936a1 1 0 0 0 .208-.12 4.2 4.2 0 0 1 1.393-.572c.335-.073 1.005-.09 1.366-.037.596.089 1.104.295 1.705.698.103.07 1.913 1.376 4.02 2.902 2.107 1.529 3.884 2.804 3.95 2.837.098.049.15.058.328.058.185 0 .228-.009.352-.068.187-.091.654-.555.834-.834.882-1.341.71-3.078-.41-4.185-.143-.143-.938-.726-3.273-2.417C11.196 1.779 9.706.716 9.584.645A4.8 4.8 0 0 0 6.642.03"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: infuse
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for infuse (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-infuse {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-infuse {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-infuse 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-infuse 3s ease-in-out infinite alternate;
}
</style>