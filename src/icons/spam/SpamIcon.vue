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
      <path d="M21.5 12.6863V11.3137C21.5 9.67871 21.5 8.8612 21.1955 8.12612C20.891 7.39104 20.313 6.81297 19.1569 5.65685L18.3431 4.84315C17.187 3.68702 16.609 3.10896 15.8739 2.80448C15.1388 2.5 14.3213 2.5 12.6863 2.5H11.3137C9.67871 2.5 8.8612 2.5 8.12612 2.80448C7.39104 3.10896 6.81297 3.68702 5.65685 4.84315L4.84315 5.65685C3.68702 6.81298 3.10896 7.39104 2.80448 8.12612C2.5 8.8612 2.5 9.67871 2.5 11.3137V12.6863C2.5 14.3213 2.5 15.1388 2.80448 15.8739C3.10896 16.609 3.68702 17.187 4.84315 18.3431L5.65685 19.1569C6.81297 20.313 7.39104 20.891 8.12612 21.1955C8.8612 21.5 9.67871 21.5 11.3137 21.5H12.6863C14.3213 21.5 15.1388 21.5 15.8739 21.1955C16.609 20.891 17.187 20.313 18.3431 19.1569L19.1569 18.3431C20.313 17.187 20.891 16.609 21.1955 15.8739C21.5 15.1388 21.5 14.3213 21.5 12.6863Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 8V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.125 15.75H12M12.25 15.75C12.25 15.8881 12.1381 16 12 16C11.8619 16 11.75 15.8881 11.75 15.75C11.75 15.6119 11.8619 15.5 12 15.5C12.1381 15.5 12.25 15.6119 12.25 15.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: spam
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for spam (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-spam {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-spam {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-spam 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-spam 3s ease-in-out infinite alternate;
}
</style>