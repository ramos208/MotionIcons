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
      <path d="m17.012 16.776.417-.257 4.155-3.1c1.413-1.248 2.293-2.686 2.293-4.607-.006-3.849-3.037-5.771-6.614-5.771-1.663 0-3.122.447-4.283 1.256V2.852L0 2.86l.007 4.395 3.85-.008.016 13.886 5.355-.008-.016-13.886h1.443a7.97 7.97 0 0 0-.516 2.02l4.518.884c.076-1.376.547-3.102 2.219-3.102 1.101 0 1.753.832 1.753 1.87 0 1.557-1.305 2.653-2.4 3.592l-6.082 4.56.006 4.085 13.642-.016.205-4.371-6.988.015Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: taketwointeractivesoftware
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for taketwointeractivesoftware (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-taketwointeractivesoftware {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-taketwointeractivesoftware {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-taketwointeractivesoftware 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-taketwointeractivesoftware 3s ease-in-out infinite alternate;
}
</style>