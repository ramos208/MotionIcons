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
      <path d="M14.25 14.75L14.5 12.5L14.926 8.66626C14.9655 8.31084 14.6872 8 14.3296 8L9.67036 8C9.31275 8 9.03454 8.31084 9.07403 8.66626L9.9407 16.4663C9.97446 16.7701 10.2313 17 10.537 17H11" stroke="currentColor" stroke-linecap="round"/><path d="M4.5 7C5.88071 7 7 5.88071 7 4.5C7 3.11929 5.88071 2 4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88071 3.11929 7 4.5 7Z" stroke="currentColor" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 4.5L9 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.49988 19.5L9.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.5 4.5L15 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 22C5.88071 22 7 20.8807 7 19.5C7 18.1193 5.88071 17 4.5 17C3.11929 17 2 18.1193 2 19.5C2 20.8807 3.11929 22 4.5 22Z" stroke="currentColor" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.5 7C20.8807 7 22 5.88071 22 4.5C22 3.11929 20.8807 2 19.5 2C18.1193 2 17 3.11929 17 4.5C17 5.88071 18.1193 7 19.5 7Z" stroke="currentColor" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 19V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 19V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 22.4V17.6C13 17.2686 13.2686 17 13.6 17H20.4C20.7314 17 21 17.2686 21 17.6V22.4C21 22.7314 20.7314 23 20.4 23H13.6C13.2686 23 13 22.7314 13 22.4Z" stroke="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: drone-charge-low
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for drone-charge-low (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-drone-charge-low {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-drone-charge-low {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-drone-charge-low 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-drone-charge-low 3s ease-in-out infinite alternate;
}
</style>