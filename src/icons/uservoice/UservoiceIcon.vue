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
      <path d="m17.449 0-3.892 2.672V16.8c0 1.34-.647 2.527-1.635 3.253-.937-.768-1.479-1.994-1.479-3.253V16c0-.8-.778-1.6-.778-2.4 0-.556.376-1.112.606-1.669.11-.219.172-.467.172-.73 0-.885-.696-1.601-1.556-1.601-.86 0-1.557.716-1.557 1.6 0 .264.063.512.173.731.23.557.606 1.113.606 1.67 0 .8-.78 1.6-.78 2.4v.799c0 1.442.429 2.741 1.183 3.821-1.585-.506-2.738-2.028-2.738-3.821V16c0-.8-.779-1.6-.779-2.4 0-.556.376-1.112.605-1.669.11-.219.174-.467.174-.73 0-.885-.698-1.601-1.558-1.601-.86 0-1.556.716-1.556 1.6 0 .264.063.512.174.731.229.557.604 1.113.604 1.67 0 .8-.778 1.6-.778 2.4v.799c0 3.97 3.142 7.2 7.005 7.2s7.006-3.23 7.006-7.2V4.224l.778-.528.778.528V16.64c0 2.653-.778 5.325-3.736 7.2 3.012 0 6.762-3.48 6.85-7.999V2.671zM4.216.96c-.86 0-1.556.717-1.556 1.6 0 .884.696 1.6 1.556 1.6s1.557-.716 1.557-1.6c0-.883-.697-1.6-1.557-1.6zm4.67 0c-.86 0-1.557.717-1.557 1.6 0 .884.698 1.6 1.558 1.6.86 0 1.556-.716 1.556-1.6 0-.883-.697-1.6-1.556-1.6zm-4.67 4.32c-.86 0-1.556.717-1.556 1.6s.696 1.6 1.556 1.6 1.557-.716 1.557-1.6-.697-1.6-1.557-1.6zm4.67 0c-.86 0-1.557.717-1.557 1.6s.698 1.6 1.558 1.6c.86 0 1.556-.716 1.556-1.6s-.697-1.6-1.556-1.6z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: uservoice
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for uservoice (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-uservoice {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-uservoice {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-uservoice 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-uservoice 3s ease-in-out infinite alternate;
}
</style>