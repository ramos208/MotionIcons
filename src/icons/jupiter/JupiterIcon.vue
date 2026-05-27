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
      <path d="M8 16.5C9.10457 16.5 10 15.8284 10 15C10 14.1716 9.10457 13.5 8 13.5C6.89543 13.5 6 14.1716 6 15C6 15.8284 6.89543 16.5 8 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.2722 15.7522C17.6645 15.7468 14.7094 16.3604 11.5 18.5C9.91701 19.5553 8.40491 20.2626 7.10825 20.7239M21.2722 15.7522C21.7415 14.5935 22 13.3269 22 12C22 11.7639 21.9918 11.5298 21.9757 11.2978M21.2722 15.7522C19.7882 19.4158 16.1959 22 12 22C10.2231 22 8.55439 21.5365 7.10825 20.7239M21.9757 11.2978C16.9028 14.2476 14.3349 13.112 9 10C6.5627 8.57824 4.2801 8.55737 2.42713 9.09949M21.9757 11.2978C21.9128 10.39 21.7286 9.51555 21.4394 8.69054M21.4394 8.69054C20.0734 4.7941 16.363 2 12 2C9.46517 2 7.15062 2.94313 5.38812 4.49763M21.4394 8.69054C17.3788 8.69054 17.5 4.77488 12 6C8.4 6.8019 6.25875 5.16588 5.38812 4.49763M5.38812 4.49763C4.01187 5.71147 2.97222 7.29807 2.42713 9.09949M2.42713 9.09949C2.14934 10.0175 2 10.9913 2 12C2 15.7459 4.05965 19.0108 7.10825 20.7239" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: jupiter
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for jupiter (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-jupiter {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-jupiter {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-jupiter 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-jupiter 3s ease-in-out infinite alternate;
}
</style>