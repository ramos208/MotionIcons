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
      <path d="M20 13.8475C20.6814 13.0147 21.0166 12.3661 20.9994 11.6409C20.9706 10.432 19.9738 9.48267 17.9802 7.58405L16.0235 5.7206C14.119 3.90687 13.1668 3 12 3C10.8332 3 9.88095 3.90687 7.9765 5.7206L6.01983 7.58405C4.02623 9.48267 3.02944 10.432 3.00064 11.6409C2.97184 12.8497 3.9223 13.8454 5.82322 15.8368L7.77989 17.8866C9.76116 19.9622 10.7518 21 12 21C12.7074 21 13.3321 20.6667 14.1013 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.1016 14C20.7005 13.2683 21 12.6705 21 12C21 10.7919 20.0278 9.81971 18.0834 7.87531L16.1247 5.9166C14.1803 3.9722 13.2081 3 12 3C10.7919 3 9.81971 3.9722 7.87531 5.9166L5.9166 7.87531C3.9722 9.81971 3 10.7919 3 12C3 13.2081 3.9722 14.1803 5.9166 16.1247L7.87531 18.0834C9.81971 20.0278 10.7919 21 12 21C12.7074 21 13.3339 20.6667 14.1221 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 21.5V17M21 20L20.5617 20.5769C19.841 21.5256 19.4806 22 19 22C18.5194 22 18.159 21.5256 17.4383 20.5769L17 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gold-buy
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gold-buy (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gold-buy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gold-buy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gold-buy 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gold-buy 3s ease-in-out infinite alternate;
}
</style>