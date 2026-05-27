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
      <path d="M8 11.5002V9.50024C8 6.67182 8 5.2576 8.87868 4.37892C9.75736 3.50024 11.1716 3.50024 14 3.50024H16C18.8284 3.50024 20.2426 3.50024 21.1213 4.37892C22 5.2576 22 6.67182 22 9.50024V11.5002C22 14.3287 22 15.7429 21.1213 16.6216C20.2426 17.5002 18.8284 17.5002 16 17.5002H14C11.1716 17.5002 9.75736 17.5002 8.87868 16.6216C8 15.7429 8 14.3287 8 11.5002Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.5 8.14136C3.79231 8.25986 3.27972 8.47786 2.87868 8.8789C2 9.75758 2 11.1718 2 14.0002V16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.75736 22.0002 5.17157 22.0002 8 22.0002H10C12.8284 22.0002 14.2426 22.0002 15.1213 21.1215C15.1607 21.0822 15.1982 21.0418 15.2341 21.0002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 9.00024H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 2.00024V5.00024M18 2.00024V5.00024" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 13.5002H4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: calendars
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for calendars (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-calendars {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-calendars {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-calendars 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-calendars 3s ease-in-out infinite alternate;
}
</style>