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
      <path d="M8.06505 11.0322L2.8836 12.8234C0.435955 13.7381 3.73502 17.9574 4.82985 19.0466C5.92467 20.1359 10.3317 23.5832 11.2511 21.1481L12.9942 15.9361M3.23407 16.49L5.93576 15.1122M7.63912 20.4976L8.89322 18.0545" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.6264 8.24924L13.6286 7.25217C14.0229 6.85992 14.7109 6.93348 15.1052 7.32572L16.6694 8.8819C17.0636 9.27415 17.0636 9.9101 16.6694 10.3023L15.6671 11.2994C15.3716 11.5934 15.1751 11.9714 15.1046 12.3812L14.6101 15.2579C14.472 16.0612 13.4804 16.3751 12.9011 15.7988L8.36308 11.0114C7.78382 10.4351 7.88891 9.51181 8.69639 9.37441L11.5878 8.88241C11.9998 8.81232 12.3309 8.54324 12.6264 8.24924Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.9446 9.00217L21.5271 4.26023C22.8841 2.91024 21.0186 1.16009 19.7192 2.45293L14.9254 6.99335" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: blush-brush01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for blush-brush01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-blush-brush01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-blush-brush01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-blush-brush01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-blush-brush01 3s ease-in-out infinite alternate;
}
</style>