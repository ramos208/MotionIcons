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
      <path d="M11.998 0C6.422 0 1.773 3.573 1.773 7.295S8.561 23.973 11.998 24c3.435.027 10.218-12.971 10.229-16.705C22.227 3.575 17.575 0 11.998 0zm3.842 5.078a2.292 2.292 0 0 1 2.389 2.34l.007 1.783a2.267 2.267 0 0 1-2.265 2.342 2.364 2.364 0 0 1-1.772-.799v3.115l-1.746.239V5.375l1.688-.287.058.785a2.292 2.292 0 0 1 1.64-.795zm-5.555.035h1.7l-.005 5.953c0 1.736-.931 2.973-2.58 2.973a4.946 4.946 0 0 1-2.423-.523l.207-1.748a3.297 3.297 0 0 0 1.996.843.946.946 0 0 0 1.056-.998v-.904l-.011.014a2.333 2.333 0 0 1-1.77.806 2.28 2.28 0 0 1-2.26-2.345V7.47a2.285 2.285 0 0 1 4.03-1.551zM9.082 6.385a1.156 1.156 0 0 0-1.139 1.273v1.26a1.164 1.164 0 0 0 1.139 1.258 1.183 1.183 0 0 0 1.154-1.139V7.55a1.158 1.158 0 0 0-1.154-1.153zm5.98.008a1.152 1.152 0 0 0-.874 1.228v1.33a1.18 1.18 0 0 0 1.152 1.26 1.166 1.166 0 0 0 1.14-1.26v-1.33a1.152 1.152 0 0 0-1.418-1.228z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: guitarpro
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for guitarpro (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-guitarpro {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-guitarpro {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-guitarpro 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-guitarpro 3s ease-in-out infinite alternate;
}
</style>