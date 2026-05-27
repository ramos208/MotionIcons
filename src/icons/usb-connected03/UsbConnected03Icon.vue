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
      <path d="M15.0111 11.5005C15.0111 9.61487 15.0111 8.67206 14.4246 8.08628C13.8382 7.50049 12.8943 7.50049 11.0066 7.50049H9.00442C7.11672 7.50049 6.17287 7.50049 5.58644 8.08628C5 8.67206 5 9.61487 5 11.5005V17.0005C5 17.9298 5 18.3945 5.07694 18.7809C5.39292 20.3676 6.63468 21.608 8.2232 21.9236C8.53349 21.9853 8.8942 21.9975 9.50497 21.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.5097 7.50049V5.50049C13.5097 4.09603 13.5097 3.3938 13.1722 2.88935C13.0262 2.67097 12.8385 2.48347 12.6198 2.33755C12.1149 2.00049 11.4119 2.00049 10.0058 2.00049C8.59981 2.00049 7.8968 2.00049 7.3918 2.33755C7.17317 2.48347 6.98547 2.67097 6.83939 2.88935C6.50195 3.3938 6.50195 4.09603 6.50195 5.50049V7.50049" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.5 4.50049H10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.6429 18.426C13.6429 18.426 14.0204 18.5412 14.5446 19.3092C14.5446 19.3092 15.3134 17.6512 16.3792 17.0752M18.9987 18.0167C18.9987 20.2166 17.2134 21.9999 15.0111 21.9999C12.8088 21.9999 11.0234 20.2166 11.0234 18.0167C11.0234 15.8168 12.8088 14.0334 15.0111 14.0334C17.2134 14.0334 18.9987 15.8168 18.9987 18.0167Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: usb-connected03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for usb-connected03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-usb-connected03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-usb-connected03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-usb-connected03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-usb-connected03 3s ease-in-out infinite alternate;
}
</style>