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
      <path d="M4.5 13C4.5 10.2386 6.73858 8 9.5 8C12.2614 8 14.5 10.2386 14.5 13V18C14.5 19.8856 14.5 20.8284 13.9142 21.4142C13.3284 22 12.3856 22 10.5 22H8.5C6.61438 22 5.67157 22 5.08579 21.4142C4.5 20.8284 4.5 19.8856 4.5 18V13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.5 13.1122C10.8607 9.83944 8.89093 14.9405 4.5 13.8418" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.5 8V7C7.5 6.05719 7.5 5.58579 7.79289 5.29289C8.08579 5 8.55719 5 9.5 5C10.4428 5 10.9142 5 11.2071 5.29289C11.5 5.58579 11.5 6.05719 11.5 7V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.5 5V2M9.5 2H7.5M9.5 2H12.9229C13.9117 2 14.7493 2.39009 15.5 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.4414 8.97336C19.671 9.84608 19.2059 10.7313 18.4026 10.9505C17.5994 11.1697 16.7621 10.64 16.5325 9.76726C16.303 8.89454 17.3634 7 17.3634 7C17.3634 7 19.2118 8.10063 19.4414 8.97336Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: body-soap
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for body-soap (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-body-soap {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-body-soap {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-body-soap 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-body-soap 3s ease-in-out infinite alternate;
}
</style>