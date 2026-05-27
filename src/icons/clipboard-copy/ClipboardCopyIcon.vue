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
      <path d="M11.502 13.0003L20.502 13.0003" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.5019 10.0003C13.5019 10.0003 10.502 12.2097 10.502 13.0003C10.5019 13.7909 13.502 16.0003 13.502 16.0003" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.998 2.00027H8.99805C8.16962 2.00027 7.49805 2.67185 7.49805 3.50027C7.49805 4.3287 8.16962 5.00027 8.99805 5.00027H13.998C14.8265 5.00027 15.498 4.3287 15.498 3.50027C15.498 2.67185 14.8265 2.00027 13.998 2.00027Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.4981 3.50027C17.0515 3.54709 17.9781 3.72035 18.6194 4.36164C19.4466 5.18885 19.495 6.49068 19.4979 9.00027M7.49795 3.50027C5.94456 3.54708 5.01802 3.72034 4.37673 4.36163C3.49805 5.24031 3.49805 6.65453 3.49806 9.48296L3.49805 15.9998C3.49805 18.8282 3.49806 20.2424 4.37674 21.1211C5.25541 21.9997 6.66963 21.9997 9.49805 21.9997L13.498 21.9997C16.3265 21.9997 17.7407 21.9997 18.6194 21.1211C19.3877 20.3527 19.4842 19.175 19.4963 17.0003" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: clipboard-copy
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for clipboard-copy (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-clipboard-copy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-clipboard-copy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-clipboard-copy 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-clipboard-copy 3s ease-in-out infinite alternate;
}
</style>