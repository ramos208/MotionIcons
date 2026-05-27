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
      <path d="M15.5 15L14 10.5C12.3432 10.4999 12 11.843 12 13.4999V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.5 15L10 10.5C11.6568 10.4999 12 11.843 12 13.4999V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.9779 21.9999C20.8283 21.3294 18.8918 19.8143 16.2887 20.008C15.6292 20.057 15.2991 20.0816 14.9976 20.0584C14.696 20.0352 14.6875 20.0333 14.6706 20.0293C13.139 19.6745 12 18.3357 12 16.7382V3.19665C12 2.53578 12.5357 2.00003 13.1966 2C13.6825 1.99997 14.1202 2.29381 14.3042 2.74356L17.0224 9.38799C18.088 11.993 18.6209 13.2954 19.5497 13.9653C19.6069 14.0065 19.7128 14.0777 19.7726 14.1149C20.7443 14.721 21.1628 14.721 22 14.721" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.02208 22C3.17173 21.3295 5.1082 19.8144 7.71127 20.008C8.37081 20.057 8.70094 20.0816 9.00245 20.0584C9.304 20.0353 9.31246 20.0333 9.32938 20.0294C10.861 19.6746 12 18.3357 12 16.7382V3.19664C12 2.53575 11.4642 2 10.8034 2C10.3175 2 9.8798 2.29382 9.69582 2.74355L6.97762 9.38804C5.91195 11.993 5.37912 13.2955 4.45028 13.9654C4.39315 14.0066 4.28717 14.0777 4.22741 14.115C3.25573 14.721 2.83715 14.721 2 14.721" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hand-prayer
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hand-prayer (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hand-prayer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hand-prayer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hand-prayer 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hand-prayer 3s ease-in-out infinite alternate;
}
</style>