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
      <path d="M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.5 9C16.5 8.53406 16.5 8.30109 16.4239 8.11732C16.3224 7.87229 16.1277 7.67761 15.8827 7.57612C15.6989 7.5 15.4659 7.5 15 7.5H9C8.53406 7.5 8.30109 7.5 8.11732 7.57612C7.87229 7.67761 7.67761 7.87229 7.57612 8.11732C7.5 8.30109 7.5 8.53406 7.5 9C7.5 9.46594 7.5 9.69891 7.57612 9.88268C7.67761 10.1277 7.87229 10.3224 8.11732 10.4239C8.30109 10.5 8.53406 10.5 9 10.5H15C15.4659 10.5 15.6989 10.5 15.8827 10.4239C16.1277 10.3224 16.3224 10.1277 16.4239 9.88268C16.5 9.69891 16.5 9.46594 16.5 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.5 15C16.5 14.5341 16.5 14.3011 16.4239 14.1173C16.3224 13.8723 16.1277 13.6776 15.8827 13.5761C15.6989 13.5 15.4659 13.5 15 13.5H9C8.53406 13.5 8.30109 13.5 8.11732 13.5761C7.87229 13.6776 7.67761 13.8723 7.57612 14.1173C7.5 14.3011 7.5 14.5341 7.5 15C7.5 15.4659 7.5 15.6989 7.57612 15.8827C7.67761 16.1277 7.87229 16.3224 8.11732 16.4239C8.30109 16.5 8.53406 16.5 9 16.5H15C15.4659 16.5 15.6989 16.5 15.8827 16.4239C16.1277 16.3224 16.3224 16.1277 16.4239 15.8827C16.5 15.6989 16.5 15.4659 16.5 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ungroup-items
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ungroup-items (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ungroup-items {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-ungroup-items {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ungroup-items 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ungroup-items 3s ease-in-out infinite alternate;
}
</style>