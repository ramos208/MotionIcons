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
      <path d="m22.417 9.334-1.333 4.333-1.334-4.333h-1.583L20.1 14.94c.2.583-.14 1.06-.756 1.06h-.678v1.334h.996c.869 0 1.65-.55 1.945-1.367L24 9.334ZM2.833 6.667H0v8.666h2.833c3.5 0 4.5-2 4.5-4.333s-1-4.334-4.5-4.334zM2.866 14H1.6V8h1.266c2.013 0 2.867.988 2.867 3s-.854 3-2.867 3m11-5.267v.6h-1.532v1.334h1.533V14h-2.534V9.334H8v1.334h1.867V14h-2.2v1.334h10V14h-2.332v-3.333h2.333V9.334h-2.333V8h2.333V6.667h-1.733a2.07 2.07 0 0 0-2.067 2.067Zm-3.266-.2c.681 0 .933-.417.933-.933 0-.515-.252-.933-.933-.933-.68 0-.934.418-.934.933s.253.934.934.934"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dify
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dify (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dify {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dify {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dify 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dify 3s ease-in-out infinite alternate;
}
</style>