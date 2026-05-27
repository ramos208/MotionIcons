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
      <path d="M12 3.75V20.25M2.25 12H21.75M6.375 17.25C9.06739 17.25 11.25 15.0674 11.25 12.375V12M17.625 17.25C14.9326 17.25 12.75 15.0674 12.75 12.375V12M3.75 20.25H20.25C21.0784 20.25 21.75 19.5784 21.75 18.75V5.25C21.75 4.42157 21.0784 3.75 20.25 3.75H3.75C2.92157 3.75 2.25 4.42157 2.25 5.25V18.75C2.25 19.5784 2.92157 20.25 3.75 20.25ZM16.3713 10.8107C14.9623 12.2197 12.1286 11.8714 12.1286 11.8714C12.1286 11.8714 11.7803 9.03772 13.1893 7.62871C14.068 6.75003 15.4926 6.75003 16.3713 7.62871C17.2499 8.50739 17.2499 9.93201 16.3713 10.8107ZM10.773 7.62874C12.182 9.03775 11.8336 11.8714 11.8336 11.8714C11.8336 11.8714 9 12.2197 7.59099 10.8107C6.71231 9.93204 6.71231 8.50742 7.59099 7.62874C8.46967 6.75006 9.89429 6.75006 10.773 7.62874Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gift-top
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gift-top (heroicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gift-top {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gift-top {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gift-top 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gift-top 3s ease-in-out infinite alternate;
}
</style>