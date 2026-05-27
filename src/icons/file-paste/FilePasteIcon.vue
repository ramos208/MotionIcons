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
      <path d="M3.99994 10L3.99994 14.5442C3.99994 17.7892 3.99994 19.4117 4.88601 20.5107C5.06502 20.7327 5.26725 20.9349 5.48927 21.1139C6.58825 22 8.21076 22 11.4558 22C12.1613 22 12.5141 22 12.8371 21.886C12.9043 21.8623 12.9702 21.835 13.0345 21.8043C13.3435 21.6564 13.5929 21.407 14.0918 20.9081L18.8284 16.1716C19.4064 15.5935 19.6955 15.3045 19.8477 14.9369C19.9999 14.5694 19.9999 14.1606 19.9999 13.3431V10C19.9999 6.22876 19.9999 4.34315 18.8284 3.17157C17.6568 2 15.7712 2 11.9999 2M12.9999 21.5V21C12.9999 18.1716 12.9999 16.7574 13.8786 15.8787C14.7573 15 16.1715 15 18.9999 15H19.4999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.99994 8C6.3931 7.41016 3.99994 5.84027 3.99994 5C3.99994 4.15973 6.3931 2.58984 6.99994 2M4.49994 5H6.99994C8.86917 5 9.80379 5 10.4999 5.40192C10.956 5.66523 11.3347 6.04394 11.598 6.5C11.9999 7.19615 11.9999 8.13077 11.9999 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: file-paste
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for file-paste (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-file-paste {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-file-paste {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-file-paste 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-file-paste 3s ease-in-out infinite alternate;
}
</style>