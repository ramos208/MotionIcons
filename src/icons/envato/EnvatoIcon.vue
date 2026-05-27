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
      <path d="M16.156 0a2.7 2.7 0 0 0-1.886.8L4 11.253c-.382.42-.558.978-.453 1.57.176.945 1.116 1.571 2.06 1.399l5.54-1.13c.12-.025.183.136.082.204L5.088 17.23c-.769.487-1.119 1.36-.875 2.234.244 1.151 1.398 1.814 2.516 1.537l9.183-2.26a.11.11 0 0 1 .113.176l-1.433 1.77c-.383.487.244 1.15.77.767l4.716-3.877c.84-.697.281-2.062-.803-1.957l-.011-.004-6.047.65a.111.111 0 0 1-.08-.199l5.918-4.609c.382-.315.628-.801.523-1.326-.105-.803-.767-1.328-1.607-1.223l-6.43.942c-.112.015-.174-.128-.084-.2l6.375-4.867c1.256-.978 1.36-2.898.209-4.015A2.6 2.6 0 0 0 16.156 0M13.1 21.855a1.07 1.07 0 0 0-1.073 1.073A1.07 1.07 0 0 0 13.1 24a1.07 1.07 0 0 0 1.072-1.072 1.07 1.07 0 0 0-1.072-1.073"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: envato
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for envato (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-envato {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-envato {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-envato 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-envato 3s ease-in-out infinite alternate;
}
</style>