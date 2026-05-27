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
      <path d="M6.928 16.738v7.233h1.414v-7.233H6.928Zm10.912 0v7.233h1.414v-7.233H17.84Zm2.179 0v7.233h1.414v-7.233h-1.414Zm-4.366 0v7.233h1.414v-7.233h-1.414Zm-13.089 0v7.233h1.415v-7.233H2.564Zm2.183 0v7.233h1.414v-7.233H4.747ZM24 16.771l-.02 7.178-2.16-.008v-1.257h.827v-4.745h-.814V16.76l2.167.011Zm-24-.009.02 7.178 2.16-.008v-1.257h-.827v-4.744h.814v-1.18L0 16.762Zm6.928-8.356v7.233h1.414V8.406H6.928Zm2.182 0v7.233h1.414V8.406H9.11Zm2.181 0v7.233h1.414V8.406h-1.414Zm4.362 0v7.233h1.414V8.406h-1.414Zm2.187 0v7.233h1.414V8.406H17.84Zm2.179 0v7.233h1.414V8.406h-1.414Zm-17.455 0v7.233h1.415V8.406H2.564Zm2.183 0v7.233h1.414V8.406H4.747Zm8.726 0v7.233h1.415V8.406h-1.415ZM24 8.433l-.02 7.178-2.16-.008v-1.257h.827V9.601h-.814V8.422L24 8.433ZM0 8.43l.02 7.178 2.16-.008v-1.257h-.827V9.599h.814v-1.18L0 8.43ZM6.928.029v7.233h1.414V.029H6.928Zm8.725 0v7.233h1.414V.029h-1.414Zm4.366 0v7.233h1.414V.029h-1.414Zm-2.179 0v7.233h1.414V.029H17.84Zm-15.276 0v7.233h1.415V.029H2.564Zm2.183 0v7.233h1.414V.029H4.747ZM24 .055l-.02 7.178-2.16-.009V5.967h.827V1.223h-.814V.044L24 .055ZM0 .052.02 7.23l2.16-.008V5.965h-.827V1.221h.814V.041L0 .052Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: htop
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for htop (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-htop {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-htop {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-htop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-htop 3s ease-in-out infinite alternate;
}
</style>