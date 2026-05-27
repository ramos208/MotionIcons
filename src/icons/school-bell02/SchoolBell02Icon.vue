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
      <path d="M7.53206 10.7812L7.45047 10.9004C6.66553 12.0476 5.36503 12.7336 3.97498 12.7336H3.88C3.09757 12.7336 2.70573 13.6796 3.25899 14.2328L9.76716 20.741C10.3204 21.2943 11.2664 20.9024 11.2664 20.12V20.025C11.2664 18.635 11.9524 17.3345 13.0996 16.5495L13.2188 16.4679C15.333 15.0214 15.6129 12.0098 13.8015 10.1985C11.9902 8.38708 8.9786 8.66698 7.53206 10.7812Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 17C18.8181 17.9846 18.3439 18.9124 17.5729 19.6565C16.8473 20.3569 15.9531 20.8035 15 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 5C6.03843 5.20541 5.13629 5.67226 4.40427 6.40427C3.67226 7.13629 3.20541 8.03842 3 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 8.80238L16.8892 3.87603C17.7435 2.79398 19.3506 2.69977 20.3254 3.67459C21.3002 4.64942 21.206 6.25653 20.124 7.11077L15.1976 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 19.3137C7.08494 20.2288 5.60135 20.2288 4.68629 19.3137C3.77124 18.3987 3.77124 16.9151 4.68629 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: school-bell02
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for school-bell02 (hugeicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-school-bell02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-school-bell02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-school-bell02 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-school-bell02 2.5s ease-in-out infinite alternate;
}
</style>