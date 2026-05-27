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
      <path d="M18.1961 3.19938C17.7215 2.6096 17.4842 2.3147 17.1597 2.15735C16.8353 2 16.4646 2 15.7232 2H13.6095C12.8508 2 12.4714 2 12.2357 2.24408C12 2.48816 12 2.88099 12 3.66667V7H15.7232C16.4646 7 16.8353 7 17.1597 6.84265C17.4842 6.6853 17.7215 6.3904 18.1961 5.80061L18.3841 5.56697C18.7947 5.0568 19 4.80171 19 4.5C19 4.19829 18.7947 3.9432 18.3841 3.43303L18.1961 3.19938Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.1961 12.1994C17.7215 11.6096 17.4842 11.3147 17.1597 11.1574C16.8353 11 16.4646 11 15.7232 11H12V16H15.7232C16.4646 16 16.8353 16 17.1597 15.8426C17.4842 15.6853 17.7215 15.3904 18.1961 14.8006L18.3841 14.567C18.7947 14.0568 19 13.8017 19 13.5C19 13.1983 18.7947 12.9432 18.3841 12.433L18.1961 12.1994Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.80388 8.19938C6.27851 7.6096 6.51583 7.3147 6.84026 7.15735C7.16469 7 7.53539 7 8.2768 7H12V12H8.2768C7.53539 12 7.16469 12 6.84026 11.8426C6.51583 11.6853 6.27851 11.3904 5.80388 10.8006L5.61585 10.567C5.20528 10.0568 5 9.80171 5 9.5C5 9.19829 5.20528 8.9432 5.61585 8.43303L5.80388 8.19938Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 22L12 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 22H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: directions02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for directions02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-directions02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-directions02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-directions02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-directions02 3s ease-in-out infinite alternate;
}
</style>