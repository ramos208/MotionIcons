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
      <path d="M6.7491 2.9945V5.24472M17.2494 2.99316V5.24338M2.99756 18.7434V7.49209C2.99756 6.24938 4.00496 5.24197 5.24766 5.24197H18.7475C19.9902 5.24197 20.9976 6.24938 20.9976 7.49209V18.7434M2.99756 18.7434C2.99756 19.9861 4.00496 20.9935 5.24766 20.9935H18.7475C19.9902 20.9935 20.9976 19.9861 20.9976 18.7434M2.99756 18.7434V11.2429C2.99756 10.0002 4.00496 8.99282 5.24766 8.99282H18.7475C19.9902 8.99282 20.9976 10.0002 20.9976 11.2429V18.7434M14.2475 12.7429H16.4975M7.49752 14.9932H11.9975M11.9997 12.7429H12.0053V12.7486H11.9997V12.7429ZM11.9989 17.2437H12.0046V17.2493H11.9989V17.2437ZM9.74858 17.2444H9.75421V17.25H9.74858V17.2444ZM7.49824 17.2437H7.50387V17.2493H7.49824V17.2437ZM14.2485 14.9969H14.2542V15.0025H14.2485V14.9969ZM14.2493 17.2444H14.255V17.25H14.2493V17.2444ZM16.4996 14.9955H16.5052V15.0011H16.4996V14.9955Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: calendar-date-range
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for calendar-date-range (heroicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-calendar-date-range {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-calendar-date-range {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-calendar-date-range 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-calendar-date-range 3s ease-in-out infinite alternate;
}
</style>