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
      <path d="m7.578 0 .405.253v7.038a8.416 8.416 0 0 1 4.742-1.418c2.498 0 4.569.872 6.211 2.616 1.621 1.745 2.431 3.894 2.431 6.448 0 2.565-.816 4.714-2.448 6.447C17.277 23.128 15.212 24 12.725 24c-2.171 0-4.028-.776-5.569-2.329v1.907H2.633V.557L7.578 0Zm4.287 10.447c-1.193 0-2.189.405-2.988 1.215-.799.833-1.198 1.925-1.198 3.275 0 1.35.399 2.436 1.198 3.257.788.822 1.784 1.232 2.988 1.232 1.271 0 2.301-.427 3.088-1.282.777-.844 1.165-1.913 1.165-3.207 0-1.294-.394-2.369-1.182-3.224-.787-.844-1.811-1.266-3.071-1.266Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bricks
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bricks (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bricks {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bricks {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bricks 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bricks 3s ease-in-out infinite alternate;
}
</style>