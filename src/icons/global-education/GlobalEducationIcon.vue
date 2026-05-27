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
      <path d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3M12 13C13.1046 13 14 10.7614 14 8C14 5.23858 13.1046 3 12 3M12 13C10.8954 13 10 10.7614 10 8C10 5.23858 10.8954 3 12 3M7.46012 8H16.5766" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 15.25V21C13.8315 19.3871 16.2062 18.4966 18.6667 18.5C20.2287 18.5 21.0097 18.5 21.3547 18.2792C21.5619 18.1466 21.6465 18.0619 21.7791 17.8547C22 17.5097 22 16.8941 22 15.6629V6.40322C22 4.97543 22 4.26154 21.4513 3.68286C20.9025 3.10418 20.3408 3.07432 19.2173 3.0146C19.035 3.00491 18.8514 3.00001 18.6667 3.00001C18.2177 2.99938 17.7715 3.02853 17.331 3.0864" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.66901 3.0864C6.22849 3.02853 5.78234 2.99938 5.33333 3.00001C5.14858 3.00001 4.965 3.00491 4.78272 3.0146C3.65923 3.07432 3.09748 3.10418 2.54874 3.68286C2 4.26154 2 4.97543 2 6.40322V15.6629C2 16.8941 2 17.5097 2.22086 17.8547C2.35346 18.0619 2.4381 18.1466 2.64526 18.2792C2.99031 18.5 3.77133 18.5 5.33333 18.5C7.79379 18.4966 10.1685 19.3871 12 21V15.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: global-education
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for global-education (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-global-education {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-global-education {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-global-education 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-global-education 3s ease-in-out infinite alternate;
}
</style>