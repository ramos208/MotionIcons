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
      <path d="M22.428 5.234c-.036-.005-.055.05-.055.05-.935 2.297-2.446 4.096-4.25 5.503-2.157-1.445-4.476-2.16-6.477-2.5l.508-1.695H10.56l-.445 1.496c-2.12-.194-3.61.004-3.664.008-.085.007-.108.027-.106.056.004.042.084.043.084.043 4.228.324 7.684 1.789 10.367 3.528C9.926 16.098.15 15.826.15 15.826c-.123-.002-.149.019-.15.065-.004.07.113.07.113.07 12.395 1.527 17.776-2.796 18.238-3.143 3.685 2.82 5.513 5.867 5.513 5.867.034.05.069.092.105.079.056-.02.02-.106.02-.106-1.062-3.053-2.666-5.243-4.475-6.808 2.846-2.757 2.926-6.242 2.945-6.499.01-.113-.01-.115-.03-.117zM4.939 6.592l-1.313 4.384h1.582l1.314-4.384Zm1.39 2.023-.222.748h3.625c-.09.297-.483 1.613-.483 1.613h1.594l.422-1.414a21.95 21.949 0 0 0-4.936-.947z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hyperx
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hyperx (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hyperx {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hyperx {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hyperx 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hyperx 3s ease-in-out infinite alternate;
}
</style>