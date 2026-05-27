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
      <path d="M18.43 18.584l-8.265-4.749 1.078-.641.719-.411.719.41 1.796 1.027 1.437.821 1.797 1.027 1.438.822 1.078.616zm-3.234 1.873l-8.24-4.774 1.797-1.027 8.24 4.75-1.797 1.051zm-3.209 1.848l-8.24-4.748 1.797-1.027 8.24 4.749zM3.03 14.246l8.24-4.748v2.079l-.719.41-1.797 1.027-1.438.821-1.796 1.027-1.437.822-1.053.615v-2.054zm0-3.722l8.24-4.749v2.08l-8.24 4.723v-2.054zm0-3.722l8.24-4.749v2.054L3.03 8.856V6.802zm9.677-4.749l1.797 1.027v9.523l-1.078-.616-.719-.41V2.052zm3.209 1.848l1.796 1.027v9.523l-1.797-1.027V3.901zm3.234 1.875l1.796 1.026v9.523l-1.796-1.027V5.775zm3.26.205l-1.49-.822-1.796-1.026-1.412-.847-1.797-1.027-1.437-.822L12.68.411 11.962 0l-.719.411-9.651 5.57v12.012l.718.41L11.987 24l1.438-.822 1.797-1.026 1.437-.821 1.797-1.027 1.437-.821 1.797-1.027.718-.411Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: openbadges
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for openbadges (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-openbadges {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-openbadges {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-openbadges 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-openbadges 3s ease-in-out infinite alternate;
}
</style>