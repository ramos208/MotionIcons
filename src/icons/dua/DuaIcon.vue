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
      <path d="M19 13L18.3417 12.3417C17.5896 11.5896 16.3803 11.5578 15.5896 12.2694L12.9931 14.6062C12.361 15.1751 12 15.9856 12 16.8361V21H14.6865C15.5238 21 16.323 20.6501 16.8909 20.0348L21.2044 15.3619C21.7159 14.8077 22 14.0812 22 13.327V6H21C19.8954 6 19 6.89543 19 8V13ZM19 13L16 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 13L5.65826 12.3417C6.41042 11.5896 7.61975 11.5578 8.41041 12.2694L11.0069 14.6062C11.639 15.1751 12 15.9856 12 16.8361V21H9.31349C8.4762 21 7.677 20.6501 7.10908 20.0348L2.79559 15.3619C2.28405 14.8077 2 14.0812 2 13.327V6H3C4.10457 6 5 6.89543 5 8V13ZM5 13L8 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 7.43427C14.4347 8.3725 13.406 9 12.2308 9C10.4465 9 9 7.55354 9 5.76923C9 4.594 9.6275 3.56534 10.5657 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.125 4H14M14.25 4C14.25 4.13807 14.1381 4.25 14 4.25C13.8619 4.25 13.75 4.13807 13.75 4C13.75 3.86193 13.8619 3.75 14 3.75C14.1381 3.75 14.25 3.86193 14.25 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dua
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dua (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dua {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dua {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dua 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dua 3s ease-in-out infinite alternate;
}
</style>