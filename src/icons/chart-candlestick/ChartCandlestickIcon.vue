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
      <path d="M11 13V11C11 10.535 11 10.3025 10.9489 10.1118C10.8102 9.59413 10.4059 9.18981 9.88823 9.05111C9.69748 9 9.46499 9 9 9C8.53501 9 8.30252 9 8.11177 9.05111C7.59413 9.18981 7.18981 9.59413 7.05111 10.1118C7 10.3025 7 10.535 7 11V13C7 13.465 7 13.6975 7.05111 13.8882C7.18981 14.4059 7.59413 14.8102 8.11177 14.9489C8.30252 15 8.53501 15 9 15C9.46499 15 9.69748 15 9.88823 14.9489C10.4059 14.8102 10.8102 14.4059 10.9489 13.8882C11 13.6975 11 13.465 11 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 12V8C19 7.53501 19 7.30252 18.9489 7.11177C18.8102 6.59413 18.4059 6.18981 17.8882 6.05111C17.6975 6 17.465 6 17 6C16.535 6 16.3025 6 16.1118 6.05111C15.5941 6.18981 15.1898 6.59413 15.0511 7.11177C15 7.30252 15 7.53501 15 8V12C15 12.465 15 12.6975 15.0511 12.8882C15.1898 13.4059 15.5941 13.8102 16.1118 13.9489C16.3025 14 16.535 14 17 14C17.465 14 17.6975 14 17.8882 13.9489C18.4059 13.8102 18.8102 13.4059 18.9489 12.8882C19 12.6975 19 12.465 19 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 9V5M9 15V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17 6V3M17 14V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 3V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: chart-candlestick
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for chart-candlestick (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-chart-candlestick {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-chart-candlestick {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-chart-candlestick 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-chart-candlestick 3s ease-in-out infinite alternate;
}
</style>