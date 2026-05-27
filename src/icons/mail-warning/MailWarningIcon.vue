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
      <path d="M2.50049 6L9.06786 9.91697C11.489 11.361 12.512 11.361 14.9331 9.91697L21.5005 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.0005 18.9913C15.3997 19 14.736 19 14.0005 19H10.0005C6.22925 19 4.34363 19 3.17206 17.8284C2.00049 16.6569 2.00049 14.7712 2.00049 11C2.00049 7.22876 2.00049 5.34315 3.17206 4.17157C4.34363 3 6.22925 3 10.0005 3H14.0005C17.7717 3 19.6573 3 20.8289 4.17157C21.892 5.23467 21.9904 6.8857 21.9996 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.0005 17V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.1255 20.75H20.0005M20.2505 20.75C20.2505 20.8881 20.1386 21 20.0005 21C19.8624 21 19.7505 20.8881 19.7505 20.75C19.7505 20.6119 19.8624 20.5 20.0005 20.5C20.1386 20.5 20.2505 20.6119 20.2505 20.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mail-warning
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for mail-warning (hugeicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mail-warning {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mail-warning {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mail-warning 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-mail-warning 2.5s ease-in-out infinite alternate;
}
</style>