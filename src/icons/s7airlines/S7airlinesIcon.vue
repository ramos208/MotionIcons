<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M12.004 0C5.375 0 0 5.373 0 12.002 0 18.632 5.375 24 12.004 24 18.63 24 24 18.632 24 12.002 24 5.373 18.631 0 12.004 0zm-.875 5.739h1.705L12 7.825h-1.168c-1.255 0-2.061.004-2.496.148-.423.132-.735.29-.906.54-.157.202-.21.477-.21.716 0 .25.027.487.275.806.305.305.809.699 1.797 1.307 1.97 1.229 2.552 2.204 2.552 3.487 0 2.09-1.97 4.084-5.272 4.084-.992 0-2.377-.146-2.961-.332l-.307-.09c.12-.397.512-1.493.685-1.956l.31.078c.648.16 1.664.252 2.338.252 1.932 0 2.682-.872 2.682-1.638 0-.7-.382-1.084-2.299-2.246-1.796-1.11-2.417-2.076-2.417-3.409 0-1.6 1.03-2.818 2.522-3.399.888-.33 2.114-.434 4.004-.434zm2.959 0h5.871c.276 0 .329.195.223.407-.384.952-4.007 10.028-4.007 10.028h-2.421s2.861-7.291 3.336-8.377c-.33 0-.581.028-1.89.028h-1.947Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: s7airlines
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for s7airlines (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-s7airlines {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-s7airlines {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-s7airlines 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-s7airlines 2s ease-in-out infinite alternate;
}
</style>