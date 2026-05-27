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
      <path d="M0 0v24h24V0H0Zm1.5 1.5h21v21h-21v-21Zm14.813 15.469v3.281h.937v-.469h-.469V16.97h-.468Zm1.406 0v.468h.468v-.468h-.468Zm.937 0v3.281H21v-2.344h-1.875v-.937h-.469Zm-10.781.937v2.344h.469v-1.875h1.875v-.469H7.875Zm2.813 0v.469h1.874v.469h-1.874v1.406h2.343v-2.344h-2.344Zm2.812 0v2.344h1.875v.469H13.5v.468h2.344v-3.28h-.469v1.874h-1.406v-1.875H13.5Zm4.219 0v2.344h.468v-2.344h-.468Zm1.406.469h1.406v1.406h-1.406v-1.406Zm-7.969.938h1.406v.468h-1.406v-.468Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: raylib
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for raylib (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-raylib {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-raylib {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-raylib 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-raylib 3s ease-in-out infinite alternate;
}
</style>