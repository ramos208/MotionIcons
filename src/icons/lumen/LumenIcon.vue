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
      <path d="M11.649 0a.75.75 0 00-.342.072l-4.878 2.23a.75.751 0 10.624 1.366l4.878-2.23A.75.75 0 0011.649 0zm5.624.354a.75.75 0 00-.341.074L6.425 5.306a.75.75 0 00.632 1.362L17.563 1.79a.75.75 0 00-.29-1.436zm0 3.002a.75.75 0 00-.341.074L6.425 8.31a.75.75 0 00.632 1.362l10.506-4.88a.75.75 0 00-.29-1.436zm0 3.002a.75.75 0 00-.341.074L6.425 11.311a.75.75 0 00.632 1.361l10.506-4.878a.75.75 0 00-.29-1.436zm.009 3.003a.75.75 0 00-.342.07l-3.753 1.688a.75.75 0 00-.442.685v3.518a.75.75 0 00.001.047h-1.503a.75.75 0 000-.047v-2.58a.75.75 0 00-.761-.761.75.75 0 00-.74.761v2.58a.75.75 0 00.002.047h-.94a.461.461 0 00-.47.555l.19 1.14a.687.687 0 00.656.557h2.28l-2.537.476a.375.375 0 10.139.737l6.003-1.126a.375.375 0 00.307-.41.625.625 0 00.092-.232l.19-1.142a.461.461 0 00-.47-.555h-.94a.75.75 0 00.002-.047V12.29l3.31-1.49a.75.75 0 00-.274-1.438zm-2.292 9.385a.375.375 0 00-.063.007l-6.004 1.126a.375.375 0 10.139.737l6.003-1.125a.375.375 0 00-.075-.745zm0 1.876a.375.375 0 00-.063.008l-6.004 1.125a.375.375 0 10.139.737l6.003-1.125a.375.375 0 00-.075-.745zm-.743 1.876a.375.375 0 00-.064.006l-4.471.751a.375.375 0 10.124.74l4.472-.75a.375.375 0 00-.061-.747z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lumen
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for lumen (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-lumen {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lumen {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lumen 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-lumen 3s ease-in-out infinite alternate;
}
</style>