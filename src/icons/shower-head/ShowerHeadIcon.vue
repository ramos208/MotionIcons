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
      <path d="M6.13225 16.6536C6.93769 16.9301 7.81546 16.5033 8.09279 15.7002L9.2645 12.3072C9.44939 11.7718 10.0346 11.4873 10.5715 11.6716L11.5438 12.0054C12.0807 12.1898 12.6659 11.9052 12.8508 11.3698L15.1942 4.5839C15.3791 4.04851 15.0937 3.46504 14.5567 3.28069C11.8719 2.35893 8.94606 3.78182 8.02161 6.45878L5.17603 14.6988C4.89869 15.5019 5.32681 16.3771 6.13225 16.6536ZM6.13225 16.6536L5.39668 18.7836C5.01963 19.8755 4.12026 20.7072 3 21M18.0832 5.91908L21 6.92047M17.0789 8.82733L19.9957 9.82872M16.0746 11.7356L18.9914 12.737" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: shower-head
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for shower-head (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-shower-head {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-shower-head {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-shower-head 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-shower-head 3s ease-in-out infinite alternate;
}
</style>