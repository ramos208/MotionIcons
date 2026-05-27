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
      <path d="M10.1062 12.0046c0 1.5815-1.2842 2.8636-2.8685 2.8636-1.5842 0-2.8684-1.282-2.8684-2.8636 0-1.5815 1.2842-2.8635 2.8684-2.8635 1.5843 0 2.8685 1.2821 2.8685 2.8635zM7.2377 0C5.6536 0 4.3693 1.2817 4.3693 2.8628s1.2842 2.8629 2.8684 2.8629c1.5842 0 2.8685-1.2817 2.8685-2.8629C10.1062 1.2817 8.822 0 7.2377 0zm9.5246 18.2781c-1.5838 0-2.8677 1.2764-2.8677 2.8636 0 1.5763 1.2835 2.8583 2.8677 2.8583 1.5845 0 2.8684-1.282 2.8684-2.8583 0-1.5872-1.2843-2.8636-2.8684-2.8636zm-2.8685-6.2735c0-1.5815 1.2842-2.8635 2.8685-2.8635 1.5842 0 2.8684 1.282 2.8684 2.8635 0 1.5815-1.2842 2.8636-2.8684 2.8636-1.5843 0-2.8685-1.282-2.8685-2.8636zm.5 0c0 1.3033 1.0625 2.3636 2.3685 2.3636s2.3684-1.0603 2.3684-2.3636c0-1.3032-1.0624-2.3635-2.3684-2.3635s-2.3685 1.0603-2.3685 2.3635z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dwavesystems
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dwavesystems (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dwavesystems {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dwavesystems {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dwavesystems 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dwavesystems 3s ease-in-out infinite alternate;
}
</style>