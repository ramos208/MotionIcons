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
      <path d="M6.734 0C1.804 0 0 1.803 0 6.733v10.535C0 22.198 1.803 24 6.734 24h10.529C22.193 24 24 22.197 24 17.268V6.733C24 1.803 22.197 0 17.266 0zM8 4h.565A3.439 3.439 0 0 0 12 7.435 3.439 3.439 0 0 0 15.435 4H16c0 2.206-1.794 4-4 4S8 6.206 8 4zm6.468 8h.52l.713 2.16.696-2.158h.66l-1.092 3.14h-.532l-.714-2.063-.714 2.063h-.528l-1.095-3.14h.678l.694 2.158zm6.236 0h.629v3.138h-.629zM2.666 12h.638v1.267h1.439V12h.637v3.142h-.637v-1.276h-1.44v1.276h-.637zm5.668 0h.637v1.772c0 .9-.496 1.417-1.36 1.417-.856 0-1.347-.507-1.347-1.39v-1.797H6.9v1.775c0 .524.255.805.719.805.46 0 .714-.273.714-.784zm2.344 0h.563l1.378 3.14h-.668l-.282-.654H10.23l-.286.654h-.651zm6.893.002h2.312v.572H18.2v.643h1.16v.573H18.2v.777h1.744v.573H17.57zm-6.623.793-.48 1.124h.964z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: appgallery
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for appgallery (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-appgallery {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-appgallery {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-appgallery 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-appgallery 3s ease-in-out infinite alternate;
}
</style>