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
      <path d="M12.131 7.706c.343.054.412-.017.458-.343a7.754 7.754 0 0 1 .668-2.189c.45-.923 1.162-1.938 2.166-2.619a10.776 10.776 0 0 1 3.296-1.418 8.039 8.039 0 0 1 2.403-.16c1.445.13 2.245.543 2.647 1.077a1.159 1.159 0 0 1 .23.61c.012.267-.103.612-.486.952-.383.34-1.162.743-2.242 1.105-1.119.373-2.65.767-4.176 1.118a23.554 23.554 0 0 0-2.612.75c-1.01.343-1.314 1.347-.687 1.655a9.427 9.427 0 0 1 1.965 1.287 17.392 17.392 0 0 1 2.62 2.575c.949 1.16 2.504 3.374 3.062 5.524.62 2.36.234 4.596-1.102 5.221-1.31.615-3.054-.271-4.28-1.545-1.163-1.201-1.977-2.624-2.746-4.806-.662-1.888-.93-4.612-.93-6.04 0-.476 0-.577.012-1.006.045-.375-.965-.687-2.05.013-1.234.795-2.442 2.232-3.156 3.07-.311.365-.733.9-1.178 1.462-.589.738-1.237 1.507-1.83 1.936-.887.634-2.317.908-3.324.194C.3 15.731 0 14.98 0 14.214a2.903 2.903 0 0 1 .395-1.506c.343-.589.888-1.222 1.765-1.946a15.536 15.536 0 0 1 3.802-2.168c2.21-.891 4.591-1.171 6.169-.888z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: telenor
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for telenor (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-telenor {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-telenor {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-telenor 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-telenor 3s ease-in-out infinite alternate;
}
</style>