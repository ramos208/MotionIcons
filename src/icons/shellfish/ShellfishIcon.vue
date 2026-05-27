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
      <path d="M14.5457 4.95548C14.6207 5.26464 14.6405 5.59372 14.5947 5.93067L13.7727 11.975M14.5457 4.95548C13.9137 2.34817 10.0863 2.34817 9.45425 4.95548M14.5457 4.95548C16.113 3.34704 18.9261 4.94832 19 6.95915M19 6.95915C20 7.12691 22 8.0641 22 10.4708C22 12.6443 19.3928 14.94 16.8169 16.7647C16.2348 17.1771 15.9437 17.3833 15.7575 17.5326C15.1829 17.9935 14.8201 18.3672 14.3765 18.9552C14.2328 19.1457 14.0838 19.3697 13.786 19.8177L13.5536 20.1673C13.2078 20.6874 12.6246 21 12 21C11.3754 21 10.7922 20.6874 10.4464 20.1673L10.214 19.8177C9.91617 19.3697 9.76725 19.1457 9.62352 18.9552C9.1799 18.3672 8.81709 17.9935 8.2425 17.5326C8.05634 17.3833 7.76522 17.1771 7.18308 16.7647C4.60719 14.94 2 12.6443 2 10.4708C2 8.0641 4 7.12691 5 6.95915M19 6.95915C19.0676 8.79881 17.8104 11.2684 16.6976 12.9777M9.45425 4.95548C9.37931 5.26464 9.35952 5.59372 9.40534 5.93067L10.2273 11.975M9.45425 4.95548C7.88696 3.34704 5.07389 4.94832 5 6.95915M5 6.95915C4.93239 8.79881 6.18965 11.2684 7.30238 12.9777" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 16L17.2412 19.7942C17.1009 20.4953 16.4853 21 15.7703 21H8.22971C7.51468 21 6.89906 20.4953 6.75883 19.7942L6 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: shellfish
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for shellfish (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-shellfish {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-shellfish {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-shellfish 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-shellfish 3s ease-in-out infinite alternate;
}
</style>