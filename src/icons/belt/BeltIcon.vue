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
      <path d="M16 8H22M16 16L22 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 16C6 16.9319 6 17.3978 6.15224 17.7654C6.35523 18.2554 6.74458 18.6448 7.23463 18.8478C7.60218 19 8.06812 19 9 19H9.33333C11.8256 19 13.0718 19 14 18.4641C14.6081 18.113 15.113 17.6081 15.4641 17C16 16.0718 16 14.8256 16 12.3333V11.6667C16 9.17436 16 7.9282 15.4641 7C15.113 6.39192 14.6081 5.88697 14 5.5359C13.0718 5 11.8256 5 9.33333 5H9C8.06812 5 7.60218 5 7.23463 5.15224C6.74458 5.35523 6.35523 5.74458 6.15224 6.23463C6 6.60218 6 7.06812 6 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 16H9C10.4142 16 11.1213 16 11.5607 15.5607C12 15.1213 12 14.4142 12 13V11C12 9.58579 12 8.87868 11.5607 8.43934C11.1213 8 10.4142 8 9 8H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 12H13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.127 12H20.002M20.252 12C20.252 12.1381 20.14 12.25 20.002 12.25C19.8639 12.25 19.752 12.1381 19.752 12C19.752 11.8619 19.8639 11.75 20.002 11.75C20.14 11.75 20.252 11.8619 20.252 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.12695 12H4.00195M4.25195 12C4.25195 12.1381 4.14002 12.25 4.00195 12.25C3.86388 12.25 3.75195 12.1381 3.75195 12C3.75195 11.8619 3.86388 11.75 4.00195 11.75C4.14002 11.75 4.25195 11.8619 4.25195 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: belt
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for belt (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-belt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-belt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-belt 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-belt 3s ease-in-out infinite alternate;
}
</style>