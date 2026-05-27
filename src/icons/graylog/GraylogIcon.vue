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
      <path d="M6.93 11.369a.84.84 0 01.75.45h.705l1.112-2.675a.483.483 0 01.3-.278c.235-.042.47.086.513.321l1.177 5.177 1.198-6.974a.41.41 0 01.32-.342.44.44 0 01.535.321l1.284 5.24.663-1.946a.449.449 0 01.17-.235c.193-.129.471-.086.6.107l.556.791c.021.193.021.385.021.578a8.3 8.3 0 01-.043.748c-.085-.021-.15-.085-.213-.15l-.557-.77-.855 2.589a.448.448 0 01-.556.278.393.393 0 01-.278-.3l-1.156-4.663-1.219 7.08a.449.449 0 01-.492.364c-.192-.021-.32-.17-.363-.363l-1.305-5.99-.706 1.69a.439.439 0 01-.406.278H7.679a.863.863 0 01-.748.428.88.88 0 01-.877-.877c.02-.47.406-.877.877-.877zM12 .396c6.973 0 12 5.369 12 11.615 0 6.353-4.77 11.593-12 11.593S0 18.364 0 12.011C-.02 5.765 5.005.396 12 .396zM4.064 12.01c0 4.256 3.658 8 7.915 8 4.256 0 7.914-3.744 7.914-8 0-4.6-3.658-8.043-7.914-8.043-4.236 0-7.915 3.444-7.915 8.043z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: graylog
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for graylog (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-graylog {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-graylog {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-graylog 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-graylog 3s ease-in-out infinite alternate;
}
</style>