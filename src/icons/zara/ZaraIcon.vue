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
      <path d="M8.562 7l.002.006 2.794 7.621v-7.23h-1.15v-.07h3.96c1.903 0 3.231.976 3.231 2.375 0 1.02-.91 1.868-2.263 2.109l-.249.031.25.026c.821.094 1.473.346 1.935.75l.003.003L19.141 7h.07l.002.006 3.556 9.698H24v.07h-3.918v-.07h1.154l-1.17-3.189h-2.373v.002l.013.037c.094.281.142.576.139.873v1.196c0 .615.271 1.238.79 1.238.304 0 .547-.107.837-.372l.041.038c-.314.332-.695.473-1.266.473-.43 0-.8-.104-1.096-.308l-.056-.04c-.39-.296-.644-.778-.753-1.435l-.018-.106-.018-.16-.002-.028-.654 1.78h.928v.07h-1.942v-.07h.938l.718-1.954v-.005a6.35 6.35 0 01-.013-.346v-.854c0-1.049-.78-1.65-2.14-1.65h-1.337v4.81h1.158v.07H9.433v-.07h1.154l-1.17-3.189H6.172l-1.158 3.154.048-.008c1.521-.262 2.22-1.423 2.23-2.645h.07v2.758H0l5.465-9.377H3.268c-1.822 0-2.646 1.407-2.659 2.81H.54v-2.88h6.634l-.04.07-5.425 9.307h2.854c.071 0 .141-.003.212-.009l.072-.006.09-.01L8.491 7h.07zm9.883 2.095l-1.313 3.576.007.007.067.066c.193.197.347.43.452.684l.007.017h2.375l-1.595-4.35zm-10.648 0l-1.599 4.35h3.194l-1.595-4.35zm6.026-1.698h-1.02v4.427h1.336c1.353 0 1.767-.493 1.767-2.107 0-1.517-.72-2.32-2.083-2.32z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: zara
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for zara (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-zara {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-zara {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-zara 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-zara 3s ease-in-out infinite alternate;
}
</style>