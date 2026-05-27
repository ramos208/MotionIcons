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
      <path d="M11.704 3.324s-.464.428.024.982c.363.412.904.16.904.16s.5-.274.12-.85c-.492-.75-1.048-.292-1.048-.292ZM23.927 22 5.456 13.966S-.58 10.32.046 8.88c.608-1.393 5.988 1.415 6.557 1.544.569.13.886-.221.896-.466.017-.354-.799-1.366-.376-1.798.422-.431 1.8.408 1.8.408l1.12.757L23.926 22ZM24 21.924 11.81 8.74S9.615 6.306 9.706 5.61c.091-.698 3.007 1.527 3.007 1.527s.324.305.632.252c.307-.05-.022-.55-.022-.55s-.504-1.142-.167-1.347c.338-.203 1.191.657 1.191.657s.213.215.437.157c.224-.06.104-.539.104-.539s-1.542-3.471-.87-3.73c1.026-.396 2.487 2.476 2.977 3.37C17.118 5.654 24 21.924 24 21.924ZM4.978 5.611s-.626.404.07 1.181c.639.716 1.208.345 1.208.345s.59-.352.024-1.017c-.748-.877-1.302-.51-1.302-.51ZM21.288 21.215l-13.87-3.867-.885-2.551 14.755 6.418Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: apacheavro
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for apacheavro (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-apacheavro {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-apacheavro {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-apacheavro 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-apacheavro 3s ease-in-out infinite alternate;
}
</style>