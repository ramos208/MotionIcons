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
      <path d="M14.5 10C14.2791 10.0578 14.0631 10.128 13.8528 10.2099M17.5 10C20.0878 10.6767 22 13.0635 22 15.904C22 19.2707 19.3137 22 16 22C15.2987 22 14.6256 21.8778 14 21.6531M10.5 13.4638C10.1784 14.211 10 15.0363 10 15.904C10 16.8324 10.2043 17.7124 10.5697 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.9977 7C17.4153 7 18.2027 10.4981 16.6484 10.9238C16.2777 11.0254 15.7176 11.0254 15.3469 10.9238C13.7946 10.4986 14.5939 7 15.9977 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16 7V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.5 10C3.91216 10.6767 2 13.0635 2 15.904C2 19.2707 4.68629 22 8 22C11.3137 22 14 19.2707 14 15.904C14 13.0635 12.0878 10.6767 9.5 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.99767 7C9.41527 7 10.2027 10.4981 8.6484 10.9238C8.2777 11.0254 7.71764 11.0254 7.34695 10.9238C5.79459 10.4986 6.59392 7 7.99767 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 7V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gymnastic
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gymnastic (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gymnastic {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gymnastic {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gymnastic 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gymnastic 3s ease-in-out infinite alternate;
}
</style>