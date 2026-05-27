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
      <path d="M19.5 12.5107C19.5 11.0269 18.6112 8.56411 15.0561 6.5857C10.6122 4.11268 7.31475 4.86323 6.16835 6.5857C5.1808 8.06949 4.68705 10.0479 9.13094 14.9939H7.49878C6.55716 14.9939 6.08499 14.9953 5.79222 15.2875C5.5 15.5802 5.5 16.0511 5.5 16.9927C5.5 17.9343 5.5 18.4051 5.79222 18.6979C6.08499 18.9901 6.55716 18.9915 7.49878 18.9915H9.5C10.665 19.069 12.9951 18.6512 12.9951 16.3595M19.5 12.5107C19 12.8337 17.5 14.382 15.5 13.9945L16.5 16.493C17.1667 16.6596 18.6 17.7922 19 18.9915H15.6606C14.9429 18.9915 14.2802 18.6071 13.9242 17.9844L12.9951 16.3595M19.5 12.5107H19.7577C21.2722 12.5107 22.5 13.7378 22.5 15.2514C22.5 16.765 21.2722 17.9921 19.7577 17.9921H18.5M15.0561 10.4966C14.2099 10.4966 13.1934 10.7926 12.3021 11.1429C11.2757 11.5463 10.943 12.7705 11.4902 13.7275L12.9951 16.3595" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.5001 15.5C4.49881 15.5 3.29726 14 2.49623 14C1.66898 14 1.52519 14.3413 1.50019 16.9976C1.4898 18.1021 1.894 19 3 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sujood
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for sujood (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sujood {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sujood {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sujood 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sujood 3s ease-in-out infinite alternate;
}
</style>