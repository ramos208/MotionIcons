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
      <path d="M17 4C17 3.05719 17 2.58579 17.2929 2.29289C17.5858 2 18.0572 2 19 2H20C20.9428 2 21.4142 2 21.7071 2.29289C22 2.58579 22 3.05719 22 4V5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H19C18.0572 7 17.5858 7 17.2929 6.70711C17 6.41421 17 5.94281 17 5V4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.5 11.5C9.5 10.5572 9.5 10.0858 9.79289 9.79289C10.0858 9.5 10.5572 9.5 11.5 9.5H12.5C13.4428 9.5 13.9142 9.5 14.2071 9.79289C14.5 10.0858 14.5 10.5572 14.5 11.5V12.5C14.5 13.4428 14.5 13.9142 14.2071 14.2071C13.9142 14.5 13.4428 14.5 12.5 14.5H11.5C10.5572 14.5 10.0858 14.5 9.79289 14.2071C9.5 13.9142 9.5 13.4428 9.5 12.5V11.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17 19C17 18.0572 17 17.5858 17.2929 17.2929C17.5858 17 18.0572 17 19 17H20C20.9428 17 21.4142 17 21.7071 17.2929C22 17.5858 22 18.0572 22 19V20C22 20.9428 22 21.4142 21.7071 21.7071C21.4142 22 20.9428 22 20 22H19C18.0572 22 17.5858 22 17.2929 21.7071C17 21.4142 17 20.9428 17 20V19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 19C2 18.0572 2 17.5858 2.29289 17.2929C2.58579 17 3.05719 17 4 17H5C5.94281 17 6.41421 17 6.70711 17.2929C7 17.5858 7 18.0572 7 19V20C7 20.9428 7 21.4142 6.70711 21.7071C6.41421 22 5.94281 22 5 22H4C3.05719 22 2.58579 22 2.29289 21.7071C2 21.4142 2 20.9428 2 20V19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 4C2 3.05719 2 2.58579 2.29289 2.29289C2.58579 2 3.05719 2 4 2H5C5.94281 2 6.41421 2 6.70711 2.29289C7 2.58579 7 3.05719 7 4V5C7 5.94281 7 6.41421 6.70711 6.70711C6.41421 7 5.94281 7 5 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5V4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.5 13V7.04545M11 4.5H17M19.5 11V17M15.5 15.5L14.5 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: scheme
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for scheme (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-scheme {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-scheme {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-scheme 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-scheme 3s ease-in-out infinite alternate;
}
</style>