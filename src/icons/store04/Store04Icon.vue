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
      <path d="M3.00006 10.9866V15.4932C3.00006 18.3257 3.00006 19.742 3.87874 20.622C4.75742 21.502 6.17163 21.502 9.00006 21.502H15.0001C17.8285 21.502 19.2427 21.502 20.1214 20.622C21.0001 19.742 21.0001 18.3257 21.0001 15.4932V10.9866" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.00006 17.9741H11.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.7957 2.50049L6.14989 2.52954C4.41172 2.44011 3.96606 3.77859 3.96606 4.4329C3.96606 5.01809 3.89061 5.8712 2.8253 7.47462C1.75999 9.07804 1.84004 9.55437 2.44077 10.6644C2.93934 11.5857 4.20747 11.9455 4.86868 12.0061C6.96889 12.0538 7.99072 10.2398 7.99072 8.96495C9.03257 12.1683 11.9956 12.1683 13.3159 11.802C14.6386 11.435 15.7718 10.1214 16.0391 8.96495C16.1951 10.4021 16.6682 11.2408 18.0663 11.817C19.5145 12.4139 20.76 11.5016 21.3848 10.9168C22.0097 10.332 22.4107 9.03364 21.2968 7.60666C20.5286 6.62257 20.2085 5.69548 20.1033 4.73462C20.0424 4.17787 19.9888 3.57961 19.5972 3.1989C19.0248 2.64253 18.2036 2.47372 17.7957 2.50049Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: store04
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for store04 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-store04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-store04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-store04 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-store04 3s ease-in-out infinite alternate;
}
</style>