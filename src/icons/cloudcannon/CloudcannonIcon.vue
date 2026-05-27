<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M20.686 7.602c.321-1.964-1.203-3.778-3.21-3.778-.91 0-1.733.376-2.325.977a1.132 1.132 0 0 0-1.061-.744c-.63 0-1.141.51-1.141 1.14s.429.909 1.34 1.335a5.884 5.884 0 0 1 .813.46c.275.184.534.388.776.612A6.02 6.02 0 0 1 17.796 12a6.02 6.02 0 0 1-2.694 5.008 6.16 6.16 0 0 1-.813.46c-.911.427-1.34.704-1.34 1.335 0 .63.51 1.141 1.14 1.141.492 0 .9-.312 1.062-.744.592.6 1.414.976 2.325.976 2.025 0 3.527-1.81 3.21-3.778C22.61 15.842 24 14.026 24 12.001c0-2.038-1.382-3.837-3.314-4.399zM9.711 17.468a6.193 6.193 0 0 1-1.589-1.073A6.02 6.02 0 0 1 6.204 12a6.02 6.02 0 0 1 1.918-4.395 6.22 6.22 0 0 1 1.589-1.072c.91-.427 1.34-.704 1.34-1.335s-.51-1.141-1.14-1.141c-.492 0-.9.312-1.062.744a3.257 3.257 0 0 0-2.325-.976c-2.003 0-3.536 1.807-3.21 3.778C1.381 8.164 0 9.962 0 12c0 2.028 1.38 3.836 3.314 4.397-.323 1.954 1.198 3.778 3.21 3.778.91 0 1.733-.375 2.325-.976.162.432.57.744 1.061.744.63 0 1.141-.51 1.141-1.14 0-.631-.429-.909-1.34-1.335zM12 8.443a3.557 3.557 0 1 1 0 7.114 3.557 3.557 0 0 1 0-7.114z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cloudcannon
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for cloudcannon (simpleicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cloudcannon {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cloudcannon {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cloudcannon 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cloudcannon 3s ease-in-out infinite alternate;
}
</style>