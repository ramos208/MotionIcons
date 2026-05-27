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
      <path d="M11.952 14.4a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8zm0-.72a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36zM8.304 3.12v1.728c.096.528 1.008 2.64 1.68 3.888C9.12 8.112 7.2 6.672 6.672 5.952a4.416 4.416 0 0 1-.816-1.392L2.448 6.48v4.128c.432.24 1.104.72 1.488.864.528.192 2.832.432 4.224.48-1.008.432-3.168 1.392-4.08 1.488-.768.144-1.296.048-1.632 0v4.08l3.312 1.872c.432-.192 1.152-.576 1.488-.816.432-.336 1.776-2.208 2.496-3.408-.096 1.056-.384 3.408-.72 4.272-.288.72-.624 1.104-.816 1.392L12 22.992l3.504-2.016c.048-.432.096-1.344 0-1.824-.048-.528-1.008-2.64-1.632-3.888.864.672 2.736 2.112 3.312 2.832.528.624.72 1.152.816 1.44l3.552-2.016v-4.032c-.384-.24-1.152-.72-1.632-.912-.48-.192-2.784-.432-4.176-.48 1.008-.48 3.168-1.392 4.08-1.488.864-.144 1.392-.048 1.728.048V6.48l-3.36-1.92-1.488.912c-.432.336-1.776 2.208-2.544 3.36.144-1.056.432-3.408.768-4.272.288-.72.624-1.152.864-1.392L12 1.008zM12 0l10.416 6v12L12 24 1.584 18V6z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: semanticrelease
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for semanticrelease (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-semanticrelease {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-semanticrelease {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-semanticrelease 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-semanticrelease 3s ease-in-out infinite alternate;
}
</style>