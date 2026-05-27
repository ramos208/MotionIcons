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
      <path d="M20.545 10.2945 17.792 8.712l.0011-3.3004 2.7531 1.5824Zm-.001 3.5897-2.7522-1.582.0011-3.1528 2.7522 1.5819zm.0263 3.6317-2.786-1.6013.0012-3.1529 2.786 1.6013zm-7.152-6.5068 3.9973-2.2977.0003-3.1523-3.9973 2.2978zm-2.4754 4.9833 6.4574-3.7118.0003-3.1522-6.4574 3.7118zm-4.3424 6.1423 10.8226-6.2208.0003-3.1522L6.601 18.9825zM9.5898 24l-2.7697-1.5927 10.7837-6.2013 2.7697 1.5927ZM3.455 13.7775 6.208 15.36l-.0011 3.3609-2.7531-1.5825Zm.0012-3.5897 2.7522 1.582-.001 3.1528-2.7523-1.5819zm-.0265-3.6114 2.786 1.6013-.001 3.1529-2.786-1.6013Zm7.1517 6.4856L6.584 15.3598l-.0004 3.1523 3.9973-2.2978zm2.4754-4.9832-6.4574 3.7117-.0004 3.1523 6.4574-3.7118zm4.3586-6.1516L6.5765 8.1573l-.0004 3.1522L17.415 5.0793ZM14.534 0l2.7697 1.5927L6.3961 7.8652 3.6264 6.2725Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: formik
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for formik (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-formik {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-formik {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-formik 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-formik 3s ease-in-out infinite alternate;
}
</style>