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
      <path d="M5.66 9.553V5.254A6.794 6.794 0 0 0 1.606 16.34c2.379-1.152 4.042-3.755 4.054-6.787zm1.132 4.115c-.423 1.752-1.687 3.25-3.262 4.245a6.76 6.76 0 0 0 3.26.833 6.772 6.772 0 0 0 3.264-.833c-1.575-.996-2.84-2.494-3.262-4.245zm5.184-6.103a6.79 6.79 0 0 0-4.052-2.31V9.52c0 3.045 1.667 5.663 4.051 6.818a6.767 6.767 0 0 1-1.607-4.387 6.755 6.755 0 0 1 1.608-4.386zc1.003 1.183 1.655 2.714 1.655 4.387 0 1.674-.65 3.203-1.655 4.388 2.38-1.15 4.088-3.755 4.1-6.787V5.254a6.9 6.901 0 0 0-4.1 2.31zM18.34 9.52c0 3.046 1.667 5.663 4.053 6.82A6.793 6.793 0 0 0 18.34 5.255zm-1.132 4.148c-.423 1.752-1.687 3.25-3.263 4.245a6.76 6.76 0 0 0 3.262.833 6.772 6.772 0 0 0 3.263-.833c-1.575-.996-2.839-2.494-3.262-4.245z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: renren
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for renren (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-renren {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-renren {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-renren 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-renren 3s ease-in-out infinite alternate;
}
</style>