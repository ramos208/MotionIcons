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
      <path d="M15.4824 4.0332C14.7956 2.81965 13.494 2 12 2C10.5059 2 9.2034 2.81942 8.5166 4.0332C8.34748 4.01139 8.17506 4 8 4C5.79086 4 4 5.79086 4 8C4 8.17506 4.01139 8.34748 4.0332 8.5166C2.81942 9.2034 2 10.5059 2 12C2 13.494 2.81965 14.7956 4.0332 15.4824C4.01131 15.6519 4 15.8246 4 16C4 18.2091 5.79086 20 8 20C8.1751 20 8.34744 19.9876 8.5166 19.9658C9.20329 21.18 10.5055 22 12 22C13.4943 22 14.7957 21.1798 15.4824 19.9658C15.6519 19.9877 15.8246 20 16 20C18.2091 20 20 18.2091 20 16C20 15.8246 19.9877 15.6519 19.9658 15.4824C21.1798 14.7957 22 13.4943 22 12C22 10.5055 21.18 9.20329 19.9658 8.5166C19.9876 8.34744 20 8.1751 20 8C20 5.79086 18.2091 4 16 4C15.8246 4 15.6519 4.01131 15.4824 4.0332Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 9L9 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.375 9.25H9.25M9.5 9.25C9.5 9.38807 9.38807 9.5 9.25 9.5C9.11193 9.5 9 9.38807 9 9.25C9 9.11193 9.11193 9 9.25 9C9.38807 9 9.5 9.11193 9.5 9.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.875 14.75H14.75M15 14.75C15 14.8881 14.8881 15 14.75 15C14.6119 15 14.5 14.8881 14.5 14.75C14.5 14.6119 14.6119 14.5 14.75 14.5C14.8881 14.5 15 14.6119 15 14.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: discount
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for discount (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-discount {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-discount {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-discount 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-discount 3s ease-in-out infinite alternate;
}
</style>