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
      <path d="m23.7515 20.1367-3.13-2.6326c1.0862-1.7307 1.7303-3.7745 1.7303-5.9655 0-6.1684-5.008-11.1764-11.176-11.1764S0 5.3702 0 11.5386c0 6.168 5.008 11.176 11.1759 11.176 2.3934 0 4.6216-.7552 6.4443-2.0438l3.3324 2.7988s.4974.4236.921-.0738l1.9884-2.3568c-.0186 0 .3864-.4968-.1105-.9023zm-5.7078-8.598c0 3.7926-3.0747 6.8672-6.8678 6.8672-3.7926 0-6.8678-3.0746-6.8678-6.8673 0-3.793 3.0752-6.8678 6.8678-6.8678 3.7931 0 6.8678 3.0747 6.8678 6.8678zm-11.287 0c0-2.4304 1.9702-4.4006 4.4006-4.4006 2.4303 0 4.4005 1.9702 4.4005 4.4005 0 2.4304-1.9702 4.4006-4.4005 4.4006-2.4304 0-4.4005-1.9702-4.4005-4.4006z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: qlik
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for qlik (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-qlik {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-qlik {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-qlik 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-qlik 3s ease-in-out infinite alternate;
}
</style>