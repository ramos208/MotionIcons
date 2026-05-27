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
      <path d="M18 11C19.4001 11 20.1002 11 20.635 10.7275C21.1054 10.4878 21.4878 10.1054 21.7275 9.63498C22 9.1002 22 8.40013 22 7C22 5.59987 22 4.8998 21.7275 4.36502C21.4878 3.89462 21.1054 3.51217 20.635 3.27248C20.1002 3 19.4001 3 18 3H6C4.59987 3 3.8998 3 3.36502 3.27248C2.89462 3.51217 2.51217 3.89462 2.27248 4.36502C2 4.8998 2 5.59987 2 7C2 8.40013 2 9.1002 2.27248 9.63498C2.51217 10.1054 2.89462 10.4878 3.36502 10.7275C3.8998 11 4.59987 11 6 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 7H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 7H6V15C6 17.8284 6 19.2426 6.87868 20.1213C7.75736 21 9.17157 21 12 21C14.8284 21 16.2426 21 17.1213 20.1213C18 19.2426 18 17.8284 18 15V7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 11.5H11C10.4477 11.5 10 11.9477 10 12.5V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 14.4477 14 15V15.5C14 16.0523 13.5523 16.5 13 16.5H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 11.5V10M12 16.5V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: atm01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for atm01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-atm01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-atm01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-atm01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-atm01 3s ease-in-out infinite alternate;
}
</style>