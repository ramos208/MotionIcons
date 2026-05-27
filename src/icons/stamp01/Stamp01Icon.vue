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
      <path d="M4.98572 19.1814C5.00154 20.4212 5.08263 20.9434 5.49849 21.4149C6.0151 22.0007 6.84657 22.0007 8.50951 22.0007H15.4619C17.1248 22.0007 17.9563 22.0007 18.4729 21.4149C18.8888 20.9434 18.9699 20.4212 18.9857 19.1814" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.9887 19.0706L4.75696 19.0706C4.03899 19.0706 3.4179 18.485 3.50814 17.7727C3.6672 16.5171 4.30558 14.9994 6.83602 14.066C7.72556 13.7378 8.70501 13.4538 9.18761 12.6377C9.86497 11.4922 10.1635 10.2384 8.90009 8.0882C6.83602 4.0204 9.92439 1.99932 12.0114 1.99932C14.0983 1.99932 17.1489 4.1488 15.0643 8.0882C13.7986 10.2209 14.135 11.4922 14.8124 12.6377C15.295 13.4538 16.2744 13.7378 17.164 14.066C19.6944 14.9994 20.3328 16.5171 20.4918 17.7727C20.5821 18.485 19.961 19.0706 19.243 19.0706L12.0113 19.0706" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: stamp01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for stamp01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-stamp01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-stamp01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-stamp01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-stamp01 3s ease-in-out infinite alternate;
}
</style>