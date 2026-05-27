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
      <path d="M18.48 9.6193c0 .6452-.7834.9647-1.2347.5035L8.0067.6804C9.256.2398 10.6 0 12 0c2.387 0 4.611.6969 6.48 1.8983zm3.36-4.4895v4.4895c0 3.6564-4.4392 5.4669-6.9962 2.8534L4.9087 2.3185C1.9323 4.5022 0 8.0255 0 12c0 2.5553.7987 4.924 2.16 6.8701v-4.4654c0-3.6564 4.4392-5.4669 6.9963-2.8534l9.9214 10.1403C22.0617 19.5086 24 15.9806 24 12c0-2.5553-.7987-4.924-2.16-6.8702ZM6.7546 13.9012l9.2212 9.4245C14.7316 23.7625 13.3934 24 12 24c-2.3869 0-4.611-.6968-6.48-1.8983v-7.697c0-.6453.7834-.9647 1.2346-.5035z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: novu
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for novu (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-novu {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-novu {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-novu 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-novu 3s ease-in-out infinite alternate;
}
</style>