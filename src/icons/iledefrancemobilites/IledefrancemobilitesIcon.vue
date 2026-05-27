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
      <path d="M18.54.001A5.461 5.447 0 0 1 24 5.447v13.107A5.461 5.447 0 0 1 18.54 24H5.459A5.461 5.447 0 0 1 0 18.553V5.446A5.461 5.447 0 0 1 5.46 0h13.081Zm-9.781 15.26c-1.365 1.816-2.503 3.405-3.925 5.334-.34.454-.057.624.398.34.512-.34.967-.736 1.309-1.247.3-.421.857-1.175 1.448-1.977l.595-.808c.33-.445.646-.876.914-1.243.796-1.135 2.047-1.023 2.9.17a398.137 397.144 0 0 0 3.242 4.481c.739 1.02 2.957.851 3.924.794.17 0 .228-.17.17-.283a310.878 310.103 0 0 0-4.663-6.467c-2.047-2.894-4.606-1.42-6.312.907ZM17.8 7.32c-2.9 1.474-3.809 1.304-6.255 1.701-2.445.34-4.266.908-6.313 3.064-.51.567-.74 1.021.058.624 2.9-1.475 3.81-1.305 6.254-1.702 2.446-.34 4.267-.907 6.314-3.064.512-.566.796-1.02-.057-.623Zm-5.06-4.142c-.966-.454-2.218.17-2.786 1.419-.569 1.19-.228 2.553.74 3.007.966.454 2.217-.17 2.786-1.42.568-1.246.228-2.609-.74-3.006Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: iledefrancemobilites
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for iledefrancemobilites (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-iledefrancemobilites {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-iledefrancemobilites {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-iledefrancemobilites 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-iledefrancemobilites 3s ease-in-out infinite alternate;
}
</style>