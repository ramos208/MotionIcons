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
      <path d="M12 0C5.394 0 0 5.394 0 12s5.394 12 12 12 12-5.394 12-12S18.606 0 12 0Zm-1.2 16.86H8.303v-1.127c-.715 1.091-1.588 1.552-2.897 1.552-2.085 0-3.248-1.2-3.248-3.333V7.248h2.509v6.182c0 1.164.533 1.722 1.6 1.722 1.224 0 2.012-.752 2.012-1.891V7.236h2.509v9.625zm8.533 0v-5.939c0-1.14-.533-1.721-1.6-1.721-1.224 0-2.012.752-2.012 1.89v5.77h-2.509V7.237h2.497V8.63c.715-1.09 1.588-1.551 2.897-1.551 2.085 0 3.249 1.2 3.249 3.333v6.449z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: unstop
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for unstop (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-unstop {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-unstop {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-unstop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-unstop 3s ease-in-out infinite alternate;
}
</style>