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
      <path d="M0 0v24h24V0zm11.65 3.417c.698 0 1.566.216 1.566 1.279v2.72c0 1.5-2.433 1.533-2.433.018V3.63a.146.146 0 0 1 .118-.142c.15-.028.432-.072.75-.071zm5.508 1.76a.146.146 0 0 1 .079.026c.408.277 1.875 1.397.782 2.49L16.091 9.62c-1.06 1.06-2.803-.64-1.733-1.707l2.695-2.695a.146.146 0 0 1 .105-.041zm-10.27.4c.263.01.538.123.811.396l1.928 1.93c1.061 1.059-.64 2.803-1.707 1.73L5.226 6.94a.142.142 0 0 1-.018-.182c.209-.307.891-1.208 1.68-1.18zm5.104 4.65a1.773 1.773 0 0 1 .008 0A1.773 1.773 0 1 1 10.227 12a1.773 1.773 0 0 1 1.765-1.773zm-7.291.55h2.728c1.499 0 1.532 2.433.017 2.433h-3.81a.144.144 0 0 1-.142-.117c-.092-.48-.337-2.315 1.207-2.315zm11.859 0h3.802a.142.142 0 0 1 .142.117c.093.48.338 2.316-1.206 2.316h-2.72c-1.5 0-1.533-2.433-.018-2.433zm-1.238 3.24c.259.002.523.102.756.337l2.695 2.692a.146.146 0 0 1 .017.184c-.278.41-1.398 1.876-2.49.784l-1.929-1.93c-.829-.827.028-2.072.951-2.066zm-6.657.013c.93-.011 1.811 1.209.975 2.044l-2.694 2.692a.144.144 0 0 1-.184.018c-.408-.278-1.876-1.398-.783-2.49l1.928-1.93a1.08 1.08 0 0 1 .758-.334zm3.334 1.403c.608-.007 1.217.364 1.217 1.122v3.802a.144.144 0 0 1-.118.14c-.48.093-2.316.338-2.316-1.206v-2.72c0-.749.609-1.132 1.217-1.138z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: kentico
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for kentico (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-kentico {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-kentico {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-kentico 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-kentico 3s ease-in-out infinite alternate;
}
</style>