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
      <path d="M0 12C0 5.382 5.382 0 12 0s12 5.382 12 12-5.382 12-12 12S0 18.618 0 12zm5.936 6.179c.134.177.422.155.665-.045.532-.42 1.042-.753 2.016-.753 1.839 0 3.301 1.152 5.495 1.152 1.684.021 2.747-.62 3.346-1.485.465-.664.686-1.573.686-2.282 0-.997-.576-1.662-1.573-1.662-.953 0-1.373.487-1.419 1.196-.021.288-.021.843-.199 1.108-.177.288-.51.377-.908.377-1.042 0-2.283-.841-3.655-.841h-.2l8.928-7.223c.155-.112.222-.377.045-.51l-1.374-1.618c-.244-.222-.421-.199-.665 0-.466.377-.908.754-1.861.754-1.552 0-3.213-.975-5.383-.975-1.55 0-2.416.576-3.014 1.197-.576.62-.974 1.617-.974 2.57 0 .975.576 1.595 1.529 1.595.864 0 1.374-.487 1.374-1.174 0-.398.021-.753.199-1.018.155-.266.554-.51 1.108-.51.864 0 2.503.597 3.523.597h.066l-9.04 7.179c-.177.133-.177.442-.066.597Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: zazzle
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for zazzle (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-zazzle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-zazzle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-zazzle 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-zazzle 3s ease-in-out infinite alternate;
}
</style>