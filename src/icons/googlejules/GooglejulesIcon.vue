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
      <path d="M4.2 24q-1.26 0-2.13-.87T1.2 21v-.6q0-.51.345-.855T2.4 19.2t.855.345.345.855v.6q0 .24.18.42t.42.18.42-.18.18-.42V7.2q0-3 2.1-5.1T12 0t5.1 2.1 2.1 5.1V21q0 .24.18.42t.42.18.42-.18.18-.42v-.6q0-.51.345-.855t.855-.345.855.345.345.855v.6q0 1.26-.87 2.13T19.8 24t-2.13-.87T16.8 21v-5.4h-1.62v4.8q0 .51-.345.855t-.855.345-.855-.345-.345-.855v-4.8h-1.59v4.8q0 .51-.345.855t-.855.345-.855-.345-.345-.855v-4.8H7.2V21q0 1.26-.87 2.13T4.2 24m4.2-11.4q.54 0 .87-.45t.33-1.05-.33-1.05-.87-.45-.87.45-.33 1.05.33 1.05.87.45m7.2 0q.54 0 .87-.45t.33-1.05-.33-1.05-.87-.45-.87.45-.33 1.05.33 1.05.87.45"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: googlejules
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for googlejules (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-googlejules {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-googlejules {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-googlejules 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-googlejules 3s ease-in-out infinite alternate;
}
</style>