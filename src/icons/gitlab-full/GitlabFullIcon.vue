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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0573 2.54429C17.1158 2.36426 17.3684 2.35862 17.4348 2.53587L20.5488 10.8457L21.9467 14.5766C21.9782 14.6607 21.9497 14.7555 21.8771 14.8084L12.1177 21.9143C12.0476 21.9654 11.9524 21.9654 11.8823 21.9143L2.1229 14.8084C2.05027 14.7555 2.02182 14.6607 2.05334 14.5766L3.45095 10.8462L3.61783 10.3963L6.56249 2.53587C6.62889 2.35863 6.88149 2.36422 6.93999 2.54422L9.40952 10.1431C9.4363 10.2255 9.51309 10.2813 9.59973 10.2813H14.4002C14.4868 10.2813 14.5637 10.2255 14.5904 10.143L17.0573 2.54429Z" stroke="currentColor" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gitlab-full
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gitlab-full (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gitlab-full {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gitlab-full {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gitlab-full 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gitlab-full 3s ease-in-out infinite alternate;
}
</style>