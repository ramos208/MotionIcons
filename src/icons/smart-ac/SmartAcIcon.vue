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
      <path d="M16 3C18.3389 3 19.5083 3 20.3621 3.53647C20.8073 3.81621 21.1838 4.19267 21.4635 4.63789C22 5.49167 22 6.66111 22 9C22 11.3389 22 12.5083 21.4635 13.3621C21.1838 13.8073 20.8073 14.1838 20.3621 14.4635C19.5083 15 18.3389 15 16 15L8 15C5.66111 15 4.49167 15 3.63789 14.4635C3.19267 14.1838 2.81621 13.8073 2.53647 13.3621C2 12.5083 2 11.3389 2 9C2 6.66111 2 5.49167 2.53647 4.63789C2.81621 4.19267 3.19267 3.81621 3.63789 3.53647C4.49167 3 5.66111 3 8 3L16 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 12H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 21C7.10457 21 8 20.1046 8 19V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 21C16.8954 21 16 20.1046 16 19V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 18V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.125 7H18M18.25 7C18.25 7.13807 18.1381 7.25 18 7.25C17.8619 7.25 17.75 7.13807 17.75 7C17.75 6.86193 17.8619 6.75 18 6.75C18.1381 6.75 18.25 6.86193 18.25 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: smart-ac
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for smart-ac (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-smart-ac {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-smart-ac {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-smart-ac 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-smart-ac 3s ease-in-out infinite alternate;
}
</style>