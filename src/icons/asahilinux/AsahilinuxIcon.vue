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
      <path d="m13.835 0-1.72 1.323v.97h2.178zm-1.95.057L9.81 1.095l2.076 4.153zm.23 3.768V6.22l-1.057-2.113L6.43 5.678 12 8.009l5.57-2.331zM6.21 5.835.533 15.957 11.885 24V8.21L6.222 5.84Zm11.58 0-.012.004-5.6 2.345 7.512 10.449 3.777-2.675zm-3.955 7.926v5.422l1.952-2.711zm2.864 3.981-4.411 6.135 5.846-4.14z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: asahilinux
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for asahilinux (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-asahilinux {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-asahilinux {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-asahilinux 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-asahilinux 3s ease-in-out infinite alternate;
}
</style>