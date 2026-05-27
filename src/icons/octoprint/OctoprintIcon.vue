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
      <path d="M3.942 4.613C2.424 5.987 1.107 7.473.476 9.71c-.634 2.248-.585 5.094-.145 7.398.44 2.303 1.12 4.107 1.873 5.83h13.179c-.31-.988-.761-1.967-1.446-3.237-.685-1.268-1.658-2.692-2.648-4.178-.99-1.486-1.985-3.077-1.851-4.472.094-.987.49-1.976 1.492-2.76 1.16-.909 2.289-1.437 3.353-1.595 3.325-.496 6.422.601 8.925 3.366.288.316.36.726.545 1.127l.166-.653c.15-.589.088-1.359-.152-2.371-.243-1.029-.563-1.792-1.46-2.973-.893-1.176-2.467-2.322-4.48-3.226-1.5-.673-3.305-1-5.798-.879-2.522.124-5.494 1.177-8.087 3.526Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: octoprint
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for octoprint (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-octoprint {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-octoprint {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-octoprint 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-octoprint 3s ease-in-out infinite alternate;
}
</style>