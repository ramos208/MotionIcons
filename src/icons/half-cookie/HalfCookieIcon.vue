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
      <path d="M21.8 13.9999C20.8734 18.5644 16.8379 21.9999 12 21.9999C6.47715 21.9999 2 17.5228 2 11.9999C2 6.81459 5.94668 2.55104 11 2.04932" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 10C6.22386 10 6 9.77614 6 9.5C6 9.22386 6.22386 9 6.5 9C6.77614 9 7 9.22386 7 9.5C7 9.77614 6.77614 10 6.5 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 4C20.2239 4 20 3.77614 20 3.5C20 3.22386 20.2239 3 20.5 3C20.7761 3 21 3.22386 21 3.5C21 3.77614 20.7761 4 20.5 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 15.01L7.01 14.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 15.01L17.01 14.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 12.01L11.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 9.01L21.01 8.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 6.01L17.01 5.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 2C10.5 3.5 11.4999 5 13.0855 5C11 8.5 13 12 18 11.5C18 14 20.5 14.5 21.6998 14.0136" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: half-cookie
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for half-cookie (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-half-cookie {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-half-cookie {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-half-cookie 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-half-cookie 3s ease-in-out infinite alternate;
}
</style>