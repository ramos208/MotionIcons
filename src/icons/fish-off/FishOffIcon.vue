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
      <path d="M6 12V11.875M6.25 12C6.25 12.1381 6.13807 12.25 6 12.25C5.86193 12.25 5.75 12.1381 5.75 12C5.75 11.8619 5.86193 11.75 6 11.75C6.13807 11.75 6.25 11.8619 6.25 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.1887 16.6371C12.703 16.9982 13.1229 17.5003 13.4181 18.0741C13.7653 18.7491 13.9389 19.0866 13.5925 19.5882C13.2462 20.0898 12.7871 20.0357 11.8689 19.9276C10.2479 19.7367 9.35755 19.304 8.94808 18.6943L7.8248 16.8446C5.84047 16.4427 3.98226 15.3571 2.67918 13.5879C2.22639 12.9731 2 12.6657 2 11.9969C2 11.328 2.2264 11.0206 2.67921 10.4058C3.85773 8.80576 5.49031 7.76486 7.25959 7.28313M12.1887 16.6371C11.7813 16.3511 11.3316 16.1722 10.8623 16.0169M12.1887 16.6371C13.2213 16.322 14.2014 15.8133 15.0642 15.1112M17.4437 11.9969C17.7812 11.3269 19.57 8.98187 22 8.98187C21.1562 9.81937 19.7725 13.0019 20.9875 15.0119C19.7725 15.0119 17.9499 12.6669 17.4437 11.9969ZM17.4437 11.9969C16.3965 9.68707 14.5671 8.17356 12.4949 7.45635C12.9557 7.13281 13.2821 6.64475 13.5036 6.08685C13.8494 5.21584 14.0223 4.78034 13.6229 4.31401C13.2235 3.84769 12.683 3.97328 11.6019 4.22445C10.9657 4.37226 10.3114 4.55255 9.804 4.75741" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fish-off
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for fish-off (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fish-off {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fish-off {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fish-off 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fish-off 3s ease-in-out infinite alternate;
}
</style>