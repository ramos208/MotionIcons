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
      <path d="M12 0a.774.774 0 0 0-.775.775c0 .43.346.776.775.776 5.762 0 10.45 4.687 10.45 10.449 0 .43.345.775.775.775A.774.774 0 0 0 24 12c0-6.616-5.384-12-12-12zm0 3.932a.774.774 0 0 0-.775.775c0 .43.346.775.775.775A6.524 6.524 0 0 1 18.518 12c0 .43.346.775.775.775.43 0 .775-.346.775-.775 0-4.448-3.62-8.068-8.068-8.068zm0 3.925a.774.774 0 0 0-.775.776c0 .43.346.775.775.775A2.597 2.597 0 0 1 14.592 12c0 .43.346.775.775.775.43 0 .776-.346.776-.775A4.145 4.145 0 0 0 12 7.857zM.775 11.225A.774.774 0 0 0 0 12c0 6.616 5.384 12 12 12 .43 0 .775-.346.775-.775a.774.774 0 0 0-.775-.776C6.238 22.45 1.55 17.762 1.55 12a.774.774 0 0 0-.775-.775zm3.932 0a.774.774 0 0 0-.775.775c0 4.448 3.62 8.068 8.068 8.068.43 0 .775-.346.775-.775a.774.774 0 0 0-.775-.775A6.524 6.524 0 0 1 5.482 12a.774.774 0 0 0-.775-.775zm3.926 0a.774.774 0 0 0-.776.775A4.145 4.145 0 0 0 12 16.143c.43 0 .775-.347.775-.776a.774.774 0 0 0-.775-.775A2.597 2.597 0 0 1 9.408 12a.774.774 0 0 0-.775-.775z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sonarqubeserver
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for sonarqubeserver (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sonarqubeserver {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sonarqubeserver {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sonarqubeserver 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sonarqubeserver 3s ease-in-out infinite alternate;
}
</style>