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
      <path d="M6.375 22V20.7166C6.375 19.6817 6.1378 18.6609 5.68218 17.7352L5.39077 17.1432C4.80497 15.953 4.5 14.6406 4.5 13.3099V8.19048C4.5 7.4015 5.1296 6.76191 5.90625 6.76191C6.6829 6.76191 7.3125 7.4015 7.3125 8.19048M14.8125 22C14.8125 21.5674 14.8117 21.1365 14.8125 20.7212C14.8146 19.5775 16.0083 18.9963 16.9844 18.4266C18.0998 17.7757 18.9943 16.7254 19.4068 15.4608C19.678 14.6293 18.9266 13.9057 18.0293 13.9057C17.132 13.9057 16.3696 14.6903 15.7189 15.291C15.617 15.3851 15.5203 15.4586 15.4424 15.5084C14.1737 16.317 12.4807 15.3439 12.4807 13.9057C12.4807 12.4676 14.1737 11.4945 15.4424 12.3031C15.7584 12.469 16.019 12.6894 16.2273 12.9183C16.6998 13.4375 17.3234 13.9057 18.0364 13.9057C18.9501 13.9057 19.716 13.1694 19.4445 12.3212C18.7666 10.2034 16.766 8.66863 14.4034 8.66863C13.4062 8.66863 12.9375 8.95085 12.9375 8.95085L15.0823 3.94719C15.4571 3.01828 14.7846 2 13.7964 2C13.27 2 12.7888 2.30213 12.5534 2.78042L10.125 7.71429M10.125 7.71429L9.67741 8.62368M10.125 7.71429V4.38095C10.125 3.59197 9.4954 2.95238 8.71875 2.95238C7.9421 2.95238 7.3125 3.59197 7.3125 4.38095V8.19048M7.3125 8.19048V11.5238" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ok-finger
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ok-finger (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ok-finger {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ok-finger {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ok-finger 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ok-finger 3s ease-in-out infinite alternate;
}
</style>