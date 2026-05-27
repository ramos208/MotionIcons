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
      <path d="M7.57574 7.42426C7.81005 7.18995 8.18995 7.18995 8.42426 7.42426L11.8243 10.8243C11.9368 10.9368 12 11.0894 12 11.2485V21.4C12 21.7314 11.7314 22 11.4 22H4.6C4.26863 22 4 21.7314 4 21.4V11.2485C4 11.0894 4.06321 10.9368 4.17574 10.8243L7.57574 7.42426Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 7V4M8 2V4M8 4H6M8 4H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22H19.4C19.7314 22 20 21.7314 20 21.4V10.7485C20 10.5894 19.9368 10.4368 19.8243 10.3243L16.6757 7.17574C16.5632 7.06321 16.4106 7 16.2515 7H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 22V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 13.01L8.01 12.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: church-side
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for church-side (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-church-side {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-church-side {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-church-side 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-church-side 3s ease-in-out infinite alternate;
}
</style>