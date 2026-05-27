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
      <path d="M20.275 0a3.18 3.168 0 0 0-3.18 3.169 3.18 3.168 0 0 0 3.18 3.168 3.18 3.168 0 0 0 3.18-3.168A3.18 3.168 0 0 0 20.275 0ZM.545.353v23.645H7.63L7.64 7.104h2.395c4.066 0 6.099 1.602 6.099 4.806 0 3.41-2.068 5.115-6.204 5.115H8.794v6.97s1.683.005 2.114.005c3.67 0 6.67-1.125 9-3.376 2.33-2.25 3.495-5.155 3.495-8.714 0-2.072-.423-3.903-1.268-5.493a3.803 3.803 0 0 1-1.86.495c-.982 0-1.96-.403-2.654-1.096a3.782 3.782 0 0 1-1.1-2.647c0-.533.12-1.063.34-1.548C14.913.776 12.557.353 9.79.353Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dolibarr
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dolibarr (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dolibarr {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dolibarr {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dolibarr 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dolibarr 3s ease-in-out infinite alternate;
}
</style>