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
      <path d="M5.94724 9.003C5.94724 9.003 3.68265 11.252 3.01654 10.9766C2.07687 10.5882 1.67051 6.8204 2.30951 6.24512L4.76679 4.03287C5.90144 3.01137 5.93084 3 7.43853 3H8.95703C9.1835 4.3592 10.4956 5.99207 12 5.99207C13.5044 5.99207 14.8165 4.3592 15.043 3H16.5615C18.0692 3 18.0986 3.01136 19.2332 4.03287L21.6905 6.24512C22.3295 6.8204 21.9231 10.5882 20.9835 10.9766C20.3173 11.252 18.0489 9.003 18.0489 9.003" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 8V18.5267C6 19.2323 6.11985 19.6092 6.75491 19.9496C9.3676 21.3501 14.6324 21.3501 17.2451 19.9496C17.8802 19.6092 18 19.2323 18 18.5267L18 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 10C8 12.6667 16 12.6667 18 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: baby-boy-dress
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for baby-boy-dress (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-baby-boy-dress {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-baby-boy-dress {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-baby-boy-dress 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-baby-boy-dress 3s ease-in-out infinite alternate;
}
</style>