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
      <path d="M13.463 17H10.537C10.2313 17 9.97446 16.7701 9.9407 16.4663L9.07403 8.66626C9.03454 8.31084 9.31275 8 9.67036 8L14.3296 8C14.6872 8 14.9655 8.31084 14.926 8.66626L14.0593 16.4663C14.0255 16.7701 13.7687 17 13.463 17Z" stroke="currentColor" stroke-linecap="round"/><path d="M4.5 7C5.88071 7 7 5.88071 7 4.5C7 3.11929 5.88071 2 4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88071 3.11929 7 4.5 7Z" stroke="currentColor" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 4.5L9 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.49988 19.5L9.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.5 4.5L15 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5 15.5L15.75 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 22C5.88071 22 7 20.8807 7 19.5C7 18.1193 5.88071 17 4.5 17C3.11929 17 2 18.1193 2 19.5C2 20.8807 3.11929 22 4.5 22Z" stroke="currentColor" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.5 7C20.8807 7 22 5.88071 22 4.5C22 3.11929 20.8807 2 19.5 2C18.1193 2 17 3.11929 17 4.5C17 5.88071 18.1193 7 19.5 7Z" stroke="currentColor" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 22.2426L20.1213 20.1213M20.1213 20.1213L22.2426 18M20.1213 20.1213L18 18M20.1213 20.1213L22.2426 22.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: drone-xmark
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for drone-xmark (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-drone-xmark {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-drone-xmark {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-drone-xmark 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-drone-xmark 3s ease-in-out infinite alternate;
}
</style>