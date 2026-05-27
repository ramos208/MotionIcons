<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="m19.0876 13.9765-1.1014-.6361v-2.5345l1.1013.6389 3.1738-1.8305v2.5275zm-14.1752.01h-.0067l-3.167-1.8341V9.625l3.1702 1.8284 1.0982-.6371v2.5345zm.0592-3.5472L1.7387 8.5686V5.9464l.971-.5568L11.9941 0l1.9539 1.1371 5.9567 3.4708.2013.1303 1.0303.5922.1657.095.9593.5686v2.5597l-3.1738 1.8349-1.1013-.6353V8.4341l-4.95-2.8903-1.0421-.6277-.971.5567-5.033 2.9495v1.4254l-1.0185.5883m0 4.4197 1.0184-.5805v1.2082l6.0633 3.5418.225-.1421.0473-.024 5.6725-3.3168-.0119-.4264v-.8918l1.1014.6313 3.1737-1.833v5.0193l-.9593.5568-1.196.6988-.2013.1185-5.9567 3.4826L11.994 24l-1.9302-1.1371-5.9685-3.4708-.2013-.1303-1.1842-.687-.9711-.5698v-4.6197l.0118-.3971 3.2211 1.8673"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fugacloud
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for fugacloud (simpleicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fugacloud {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fugacloud {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fugacloud 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fugacloud 3s ease-in-out infinite alternate;
}
</style>