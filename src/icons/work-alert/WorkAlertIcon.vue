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
      <path d="M18 21.5C20.2091 21.5 22 19.7091 22 17.5C22 15.2909 20.2091 13.5 18 13.5C15.7909 13.5 14 15.2909 14 17.5C14 19.7091 15.7909 21.5 18 21.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.0504 19.3998H18.0004M18.1004 19.3998C18.1004 19.455 18.0556 19.4998 18.0004 19.4998C17.9452 19.4998 17.9004 19.455 17.9004 19.3998C17.9004 19.3446 17.9452 19.2998 18.0004 19.2998C18.0556 19.2998 18.1004 19.3446 18.1004 19.3998Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 17V15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 20.5H8C5.17157 20.5 3.75736 20.5 2.87868 19.6213C2 18.7426 2 17.3284 2 14.5V12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6H15C17.8284 6 19.2426 6 20.1213 6.87868C20.8286 7.58599 20.9731 8.64032 21 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 6C8 4.59554 8 3.89331 8.33706 3.38886C8.48298 3.17048 8.67048 2.98298 8.88886 2.83706C9.39331 2.5 10.0955 2.5 11.5 2.5C12.9045 2.5 13.6067 2.5 14.1111 2.83706C14.3295 2.98298 14.517 3.17048 14.6629 3.38886C15 3.89331 15 4.59554 15 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: work-alert
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for work-alert (hugeicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-work-alert {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-work-alert {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-work-alert 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-work-alert 2.5s ease-in-out infinite alternate;
}
</style>