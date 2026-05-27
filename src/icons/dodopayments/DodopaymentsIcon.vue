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
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0M8.21 5.414c2.44-.162 4.62 1.036 5.858 2.98.484.941 5.714-.545 7.354 3.047l.004.002c.446 1.184-.004 3.374-.703 4.764-.074.147-.258.292-.338.068-.938-2.441-4.856-1.943-5.016-1.935h-.01c-.752.085-1.809.073-2.597.2-.327.044-.407.382-.47.648-.345 1.467.667 3.628 1.552 5.212h-5.73c-1.98-3.1-6.057-8.862-3.64-12.68l.005-.011v-.002l.001-.002V7.7l-.001-.002-.006-.011v-.002l-.002-.002a.3.3 0 0 0-.116-.041s-.739-.177-.753-.198c.342-.45.892-.748 1.332-1.005.084-.047.14-.068.154-.084v-.002l.002-.002v-.002l.002-.002v-.002l-.002-.002V6.34l-.002-.002c-.016-.016-.075-.037-.184-.078-.065-.024-.053-.02-.097-.04l-.59-.26c.979-.615 2.493-.568 2.933-.392q.537-.119 1.06-.154m1.427 1.797a3 3 0 0 0-.604.078c-.614.136-1.154.497-1.447 1.05-.906 1.631-.09 3.73 1.435 4.659l.006.006c1.048.714 3.768.708 4.883.713.227-.016.454-.028.59-.143.157-.128.154-.375.135-.57-.035-.354-.07-.701-.045-1.055a4.4 4.4 0 0 1 .51-1.687l-.002-.002c.235-.4.382-.734-.205-.875-.314-.064-.64-.051-.954-.14-.681-.146-1.126-.619-1.646-1.073-.262-.22-.607-.413-.895-.559a3.6 3.6 0 0 0-1.761-.402m.644 1.613a1 1 0 0 1 .28.037h.007c1.253.394.706 2.22-.568 1.858-.52-.16-.815-.74-.629-1.246a.99.99 0 0 1 .91-.649"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dodopayments
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dodopayments (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dodopayments {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dodopayments {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dodopayments 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dodopayments 3s ease-in-out infinite alternate;
}
</style>