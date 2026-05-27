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
      <path d="M8.53345 13.6528L10.5 15.3722V6.50065C10.5 5.67186 11.1719 5 12.0006 5C12.8289 5 13.5006 5.67107 13.5013 6.49935L13.5045 11.263L16.1409 11.6903C17.8426 11.9492 18.6935 12.0786 19.2928 12.4427C20.2828 13.0441 21 14 21 15.2657C21 16.1841 20.7762 16.8002 20.232 18.4556C19.8867 19.5059 19.7141 20.0311 19.4326 20.4469C18.9691 21.1313 18.2853 21.6311 17.4984 21.8605C17.0204 21.9999 16.4745 21.9999 15.3826 21.9999H14.4571C13.0054 21.9999 12.2796 21.9999 11.6335 21.7298C11.5176 21.6814 11.4044 21.6267 11.2942 21.566C10.68 21.2278 10.2224 20.6566 9.30698 19.5142L6.3436 15.8158C5.88822 15.2474 5.88518 14.4341 6.3363 13.8622C6.87851 13.175 7.87444 13.08 8.53345 13.6528Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 8H6.17647C4.67907 8 3.93037 8 3.46518 7.56066C3 7.12132 3 6.41421 3 5C3 3.58579 3 2.87868 3.46518 2.43934C3.93037 2 4.67907 2 6.17647 2H17.8235C19.3209 2 20.0696 2 20.5348 2.43934C21 2.87868 21 3.58579 21 5C21 6.41421 21 7.12132 20.5348 7.56066C20.0696 8 19.3209 8 17.8235 8H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: touch-interaction02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for touch-interaction02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-touch-interaction02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-touch-interaction02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-touch-interaction02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-touch-interaction02 3s ease-in-out infinite alternate;
}
</style>