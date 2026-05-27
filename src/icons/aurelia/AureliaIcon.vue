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
      <path d="M15.716 4.636L13.49 6.122l-2.295-3.439 2.228-1.486zM17.527 14.967l3.806 5.703-4.533 3.025-3.806-5.703-.664-.995 4.533-3.025zM11.817 18.777l.838 1.256-3.45 2.303-1.503-2.25.754-.504 2.697-1.8zM19.413 12.27l.968-.645 1.501 2.25-2.227 1.487-.838-1.256 1.26-.84zm-.596 1.836l-.664-.995 1.26-.84.664.994zM3.792 12.593l-.753.503L.744 9.657l3.45-2.302 1.61 2.41-2.698 1.8 2.697-1.8.686 1.029zM11.513 5.954l.687 1.029-4.534 3.025L6.98 8.98 3.21 3.33 7.742.305zM14.749 5.282l-1.26.84-.686-1.028-1.609-2.41 2.228-1.487 2.295 3.439zM9.12 20.577l-.664-.995 2.697-1.8.664.995zM18.817 14.106l-.664-.995 1.26-.84.664.994zM3.792 12.593l-.686-1.028 2.697-1.8.686 1.029zM13.489 6.122l-.686-1.028 1.26-.84.686 1.028zM17.527 14.967l-4.533 3.025-.664-.995 4.533-3.025zM11.513 5.954l.687 1.029-4.534 3.025L6.98 8.98zM2.507 5.132l.855 1.283-1.282.855-.856-1.282zM7.127 20.505l.856 1.283-1.282.855-.856-1.282zM3.754 21.797L0 16.125 20.063 2.706 24 8.287z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: aurelia
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for aurelia (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-aurelia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-aurelia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-aurelia 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-aurelia 3s ease-in-out infinite alternate;
}
</style>