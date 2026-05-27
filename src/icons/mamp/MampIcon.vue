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
      <path d="m.102 9.629c.245-1.695 2.139-6.979 7.454-7.98 3.137-.592 7.005 1.034 9.72 3.788-1.354.929-2.259 1.732-2.944 2.708.511 1.892 2.018 2.663 3.078 2.984-1.175-.711-1.917-1.381-2.376-2.812 2.513-2.988 5.205-3.954 5.432-3.978 2.102 1.677 3.586 4.735 3.532 7.955-.062 3.728-2.09 7.569-4.415 9.121-.318.151-1.053-.25-1.153-.687.476-1.105 1.601-3.795 1.74-5.806.131-1.928-1.146-3.061-2.219-1.667-1.489 2.494-2.139 5.592-2.789 8.934-1.095.313-2.952.392-3.756-.036-.101-2.068.381-5.601-.991-6.84-.588-.533-1.169-.285-1.562.205-.992 1.227-.972 4.414-.78 6.479-1.109.686-2.99.543-4.179.117-.477-3.245-1.597-7.202-2.512-10.23-.255 1.216-.379 2.664-.34 3.908-.611-.498-1.308-3.116-.94-6.163z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mamp
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mamp (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mamp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mamp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mamp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mamp 3s ease-in-out infinite alternate;
}
</style>