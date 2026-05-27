<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M13.0548 0C6.384 0 .961 5.3802.961 12.0078.961 18.6354 6.3698 24 13.0548 24c.6168 0 .6454-.3572.0859-.5293-4.9349-1.5063-8.5352-6.069-8.5352-11.4629 0-5.4656 3.6725-10.0706 8.6934-11.5195C13.8153.3448 13.6716 0 13.0548 0Zm2.3242 1.8223c-5.2648 0-9.5254 4.2606-9.5254 9.5254 0 1.2193.2285 2.3818.6445 3.4433.1722.459.4454.4584.4024.0137-.0287-.3156-.0567-.6447-.0567-.9746 0-5.2648 4.2606-9.5254 9.5254-9.5254 4.9779 0 6.4698 2.2235 6.6563 2.08.2008-.1577-1.808-4.5624-7.6465-4.5624zm.4687 4.0703c-1.8622.0592-3.651.7168-5.1035 1.8554-.2582.2009-.1567.3284.1445.1993 2.4675-1.076 5.5812-1.1046 8.6368-.043 2.0514.7173 3.2413 1.7364 3.3418 1.6934.1578-.0718-1.1915-2.2226-3.6446-3.1407-1.1135-.4196-2.2576-.6-3.375-.5644z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: akamai
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for akamai (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-akamai {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-akamai {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-akamai 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-akamai 2s ease-in-out infinite alternate;
}
</style>