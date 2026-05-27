<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-pendulum']"
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
      class="icon-geometry anim-subtle-drift"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.586 4.586a2 2 0 0 0 -1.414 -.586h-.172a2 2 0 0 0 -2 2v.172a2 2 0 0 0 .586 1.414a2 2 0 0 1 0 2.828a2 2 0 0 0 -.586 1.414v.344a2 2 0 0 0 .586 1.414c.4 .4 .595 .928 .585 1.452c-.01 .5 -.204 .995 -.585 1.376a2 2 0 0 0 -.586 1.414v.172a2 2 0 0 0 2 2h.172a2 2 0 0 0 1.414 -.586a2 2 0 0 1 2.828 0a2 2 0 0 0 1.414 .586h.344a2 2 0 0 0 1.414 -.586a2 2 0 0 1 2.828 0a2 2 0 0 0 1.414 .586h.172a2 2 0 0 0 2 -2v-.172a2 2 0 0 0 -.586 -1.414a1.996 1.996 0 0 1 0 -2.828a2 2 0 0 0 .586 -1.414v-.344a2 2 0 0 0 -.586 -1.414a2 2 0 0 1 0 -2.828a2 2 0 0 0 .586 -1.414v-.172a2 2 0 0 0 -2 -2h-.172a2 2 0 0 0 -1.414 .586a2 2 0 0 1 -2.828 0a2 2 0 0 0 -1.414 -.586h-.344a2 2 0 0 0 -1.414 .586a2 2 0 0 1 -2.828 0"/><path d="M10 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M9 15c0 -1.105 .672 -2 1.5 -2h3c.828 0 1.5 .895 1.5 2"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: email-stamp
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for email-stamp (tabler). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

.anim-subtle-drift {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-email-stamp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-email-stamp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-email-stamp 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-email-stamp 2.5s ease-in-out infinite alternate;
}
</style>