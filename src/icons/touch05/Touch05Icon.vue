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
      <path d="M8.9906 22.0009L8.94324 21.2281L8.76895 20.4834C8.21686 18.298 7.44476 18.0561 6.21646 16.4898C5.66194 15.7826 4.66048 14.8221 3.71312 13.4686C3.08189 12.5667 3.86788 10.4113 5.78819 11.0363C6.10784 11.1403 6.37654 11.3487 6.61477 11.5776L8.47785 13.4686C8.4626 10.9364 8.49785 4.95306 8.45672 3.37114C8.41559 1.78922 11.285 1.28017 11.4541 3.44303V9.03715M11.4541 9.03715V9.97487M11.4541 9.03715C12.3925 7.84768 14.168 7.80581 14.4264 9.79709M14.4264 9.79709C14.4684 10.1213 14.4717 10.5 14.4264 10.9372M14.4264 9.79709C14.9006 8.40591 17.0594 8.94966 17.4739 10.5688M17.4739 10.5688C17.5721 10.9526 17.4344 11.4544 17.4739 11.9671M17.4739 10.5688C17.7431 9.78847 20.7661 9.82873 20.4831 12.8434L20.4477 15.5483C20.4477 17.1534 20.2337 17.8976 19.6205 18.6867C19.3941 18.9781 19.081 19.2696 18.862 19.5891C18.6912 19.8384 18.581 20.1284 18.533 20.4268C18.4661 20.8424 18.4572 21.4177 18.478 21.9687" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: touch05
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for touch05 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-touch05 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-touch05 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-touch05 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-touch05 3s ease-in-out infinite alternate;
}
</style>