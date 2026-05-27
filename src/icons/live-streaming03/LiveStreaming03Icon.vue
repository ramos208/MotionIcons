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
      <path d="M15.5376 18.592C14.4312 19.5 12.7875 19.5 9.5 19.5C6.21252 19.5 4.56878 19.5 3.46243 18.592C3.25989 18.4258 3.07418 18.2401 2.90796 18.0376C2 16.9312 2 15.2875 2 12C2 8.71252 2 7.06878 2.90796 5.96243C3.07418 5.75989 3.25989 5.57418 3.46243 5.40796C4.56878 4.5 6.21252 4.5 9.5 4.5C12.7875 4.5 14.4312 4.5 15.5376 5.40796C15.7401 5.57418 15.9258 5.75989 16.092 5.96243C17 7.06878 17 8.71252 17 12C17 15.2875 17 16.9312 16.092 18.0376C15.9258 18.2401 15.7401 18.4258 15.5376 18.592Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17 13V11L19.6 7.53333C19.8518 7.19759 20.247 7 20.6667 7C21.403 7 22 7.59695 22 8.33333V15.6667C22 16.403 21.403 17 20.6667 17C20.247 17 19.8518 16.8024 19.6 16.4667L17 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.5 13.5C10.3284 13.5 11 12.8284 11 12C11 11.1716 10.3284 10.5 9.5 10.5M9.5 13.5C8.67157 13.5 8 12.8284 8 12C8 11.1716 8.67157 10.5 9.5 10.5M9.5 13.5V10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: live-streaming03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for live-streaming03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-live-streaming03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-live-streaming03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-live-streaming03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-live-streaming03 3s ease-in-out infinite alternate;
}
</style>