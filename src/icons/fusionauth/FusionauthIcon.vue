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
      <path d="M12 0a1.667 1.667 0 0 0-1.666 1.666A1.667 1.667 0 0 0 12 3.334a1.667 1.667 0 0 0 1.666-1.668A1.667 1.667 0 0 0 12 0ZM9.506 1.145A11.572 11.572 0 0 0 .442 12.317a.716.716 0 0 0 1.075.618.702.702 0 0 0 .358-.6 10.136 10.136 0 0 1 5.06-8.666c.843-.486 1.75-.848 2.696-1.074a2.55 2.55 0 0 1-.125-1.452Zm8.015 1.26a.712.712 0 0 0-.695.713.704.704 0 0 0 .34.61 10.133 10.133 0 0 1 4.545 11.587c.314.046.618.15.894.309.148.084.29.183.42.293a11.573 11.573 0 0 0-5.15-13.43.715.715 0 0 0-.354-.082Zm-5.519 3.791a6.247 6.247 0 1 0 .002 12.494 6.247 6.247 0 0 0-.002-12.494Zm0 1.43a4.819 4.819 0 0 1 3.41 8.222 4.817 4.817 0 1 1-3.41-8.222Zm-.01 2.295c-1.412.014-1.896 1.887-.668 2.584l-.435 2.207a.237.237 0 0 0 .234.281h1.772a.236.236 0 0 0 .234-.281l-.438-2.207c.43-.247.694-.706.692-1.202a1.38 1.38 0 0 0-1.39-1.382zm-9.324 6.242a1.667 1.667 0 0 0-1.666 1.666 1.667 1.667 0 0 0 1.666 1.668 1.667 1.667 0 0 0 1.666-1.668 1.667 1.667 0 0 0-1.666-1.666zm18.664 0a1.667 1.667 0 0 0-1.666 1.666 1.667 1.667 0 0 0 1.666 1.668 1.667 1.667 0 0 0 1.666-1.668 1.667 1.667 0 0 0-1.666-1.666zM4.655 19.427c-.195.244-.432.45-.702.608a2.584 2.584 0 0 1-.468.207 11.576 11.576 0 0 0 14.208 2.273.713.713 0 0 0 0-1.238.704.704 0 0 0-.703-.012 10.134 10.134 0 0 1-10.052-.05 10.17 10.17 0 0 1-2.283-1.788z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fusionauth
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for fusionauth (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fusionauth {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fusionauth {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fusionauth 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fusionauth 3s ease-in-out infinite alternate;
}
</style>