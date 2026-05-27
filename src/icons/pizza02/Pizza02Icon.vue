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
      <path d="M17.4258 2.87898C15.732 2.31011 13.9049 2 12 2C10.0951 2 8.26804 2.31011 6.57421 2.87898C5.21758 3.3346 4.53927 3.56241 4.16572 4.30884C3.79218 5.05528 4.08752 5.79951 4.67819 7.28799L8.00604 15.674C9.67961 19.8913 10.5164 22 12 22C13.4836 22 14.3204 19.8913 15.994 15.674L19.3218 7.28799C19.9125 5.79952 20.2078 5.05528 19.8343 4.30884C19.4607 3.56241 18.7824 3.3346 17.4258 2.87898Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 7.98586C18.6678 7.70091 18.3891 7.35833 18.181 6.97194C17.3084 5.35222 15.2912 4.62976 13.5189 5.30223C12.6175 5.64425 11.6116 5.63498 10.7173 5.2764C8.9589 4.57139 6.92748 5.25652 6.02234 6.85986C5.76847 7.30957 5.41836 7.69694 5 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 10.3285C6.39004 10.1194 6.84125 10 7.32204 10C8.80104 10 10 11.13 10 12.524C10 13.7496 9.07312 14.7711 7.84398 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 14C13.5 14 13 14.5 13 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.125 9H14M14.25 9C14.25 9.13807 14.1381 9.25 14 9.25C13.8619 9.25 13.75 9.13807 13.75 9C13.75 8.86193 13.8619 8.75 14 8.75C14.1381 8.75 14.25 8.86193 14.25 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pizza02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pizza02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pizza02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pizza02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pizza02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pizza02 3s ease-in-out infinite alternate;
}
</style>