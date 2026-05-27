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
      <path d="M11.38742 0 9.88227 2.63735c-4.10198.91912-7.20472 4.44855-7.4712 8.7637h2.41025c.29326-3.50262 3.07658-6.28647 6.5661-6.57945V2.42416Zm1.21236 2.41136V4.8216c3.48923.29298 6.27256 3.0763 6.56554 6.56554H23.99972l-2.6368-1.50459c-.91883-4.10198-4.44798-7.205-8.76314-7.4712Zm-.61286 3.28917-.7459 4.55497 1.4918.9986.9986 1.4918 4.55497-.75926-4.55497-.7459 1.97106-2.95685-2.9563 1.9716zm.7459 5.55358L8.28415 8.28443l2.97022 4.4481 4.4481 2.97021zm-1.47844 1.47843-.99916-1.49124L5.7008 12l4.5544.7459-1.97105 2.95685 2.9435-1.97105.75926 4.55441.7587-4.55441zm.73254-1.26524c.27958 0 .51934.23976.51934.51934 0 .27987-.22636.5199-.51934.5199s-.51935-.24003-.51935-.5199c0-.29298.23976-.51934.51935-.51934zM.00028 12.5995l2.63735 1.5046c.91912 4.10226 4.44799 7.20555 8.76315 7.47174v-2.4108c-3.50263-.29298-6.28593-3.0763-6.5789-6.56554H2.42444Zm19.16504 0c-.29298 3.48923-3.0763 6.27256-6.56554 6.56554V24l1.5046-2.63735c4.10197-.91883 7.20527-4.448 7.47174-8.76315z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: osgeo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for osgeo (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-osgeo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-osgeo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-osgeo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-osgeo 3s ease-in-out infinite alternate;
}
</style>