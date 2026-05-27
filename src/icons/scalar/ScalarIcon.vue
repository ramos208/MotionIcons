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
      <path d="M14.044 0c.243 0 .486.202.486.486v5.423l3.804-3.845c.202-.202.526-.202.688 0l2.914 2.914c.162.162.202.486 0 .648v.04L18.09 9.47h5.423c.284 0 .486.203.486.486v4.088a.468.468 0 0 1-.486.486h-5.423l3.845 3.804c.162.202.202.526 0 .688l-2.914 2.914c-.162.162-.486.202-.648 0h-.04L14.53 18.09v5.423a.468.468 0 0 1-.486.486H9.956a.468.468 0 0 1-.486-.486v-2.833c0-.89.365-1.74.972-2.388l5.261-5.261a1.466 1.466 0 0 0 0-2.064l-5.22-5.221A3.4 3.4 0 0 1 9.47 3.359V.486c0-.284.203-.486.486-.486h4.088ZM5.585 2.105h.04l8.864 8.863a1.466 1.466 0 0 1 0 2.064l-8.863 8.904c-.162.202-.486.202-.688 0l-2.874-2.833c-.162-.203-.202-.486 0-.688L5.91 14.53H.486A.468.468 0 0 1 0 14.043V9.956c0-.283.202-.486.486-.486h5.423L2.064 5.666a.548.548 0 0 1 0-.688l2.874-2.873a.421.421 0 0 1 .647 0Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: scalar
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for scalar (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-scalar {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-scalar {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-scalar 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-scalar 3s ease-in-out infinite alternate;
}
</style>