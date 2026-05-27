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
      <path d="M3 6H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 12H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 18H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.0071 17.5986L14 18L14.4014 15.9929C14.4367 15.8165 14.5234 15.6545 14.6506 15.5273L18.9111 11.2668C19.2668 10.9111 19.8437 10.9111 20.1995 11.2668L20.7332 11.8005C21.0889 12.1563 21.0889 12.7332 20.7332 13.0889L16.4727 17.3494C16.3455 17.4766 16.1835 17.5633 16.0071 17.5986Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: filter-mail-edit
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for filter-mail-edit (hugeicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-filter-mail-edit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-filter-mail-edit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-filter-mail-edit 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-filter-mail-edit 2.5s ease-in-out infinite alternate;
}
</style>