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
      <path d="M3.50037 20.3438H6.48496V17.5M17.5158 6.5V3.65617L20.5004 3.5M15.0004 2.45846C11.5611 1.38029 7.65445 2.20378 4.9293 4.92893C1.02406 8.83418 1.02406 15.1658 4.9293 19.0711C5.26839 19.4102 5.62577 19.7198 5.99826 20M9.00037 21.5415C12.4396 22.6197 16.3463 21.7962 19.0714 19.0711C22.9767 15.1658 22.9767 8.83417 19.0714 4.92893C18.7323 4.58984 18.375 4.2802 18.0025 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.0002 11.5005C13.381 11.5005 14.5002 10.3812 14.5002 9.00049C14.5002 7.61978 13.381 6.50049 12.0002 6.50049C10.6195 6.50049 9.50024 7.61978 9.50024 9.00049C9.50024 10.3812 10.6195 11.5005 12.0002 11.5005ZM12.0002 11.5005C9.79111 11.5005 8.00024 13.2913 8.00024 15.5005M12.0002 11.5005C14.2094 11.5005 16.0002 13.2913 16.0002 15.5005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: account-recovery
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for account-recovery (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-account-recovery {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-account-recovery {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-account-recovery 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-account-recovery 3s ease-in-out infinite alternate;
}
</style>