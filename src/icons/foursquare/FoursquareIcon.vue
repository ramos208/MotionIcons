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
      <path d="M2.376 0h7.338v1.204h-6.12v3.372h5.44V5.78h-5.44v4.874H2.376V0zm-.208 20.16l1.19-.268c.213 1.473 1.232 2.352 2.89 2.352 1.487 0 2.664-.694 2.664-1.828 0-.807-.595-1.487-2.919-2.18-2.635-.752-3.513-1.715-3.513-3.13 0-1.829 1.473-2.805 3.613-2.805 2.393 0 3.456 1.218 3.825 2.89l-1.19.269c-.299-1.374-1.233-1.955-2.679-1.955-1.36 0-2.323.51-2.323 1.487 0 .793.624 1.403 2.777 2.083 2.565.793 3.67 1.658 3.67 3.301 0 2.04-1.715 3.103-3.896 3.103-2.281-.003-3.84-1.193-4.11-3.318zm9.223-2.238c0-3.159 2.068-5.624 5.242-5.624 3.159 0 5.2 2.479 5.2 5.624 0 1.573-.525 2.933-1.404 3.925a36.155 36.155 0 011.247 1.303l-.879.85a57.16 57.16 0 00-1.303-1.346c-.807.524-1.771.822-2.861.822-3.061 0-5.242-2.352-5.242-5.554zm7.181 3.825a31.241 31.241 0 00-1.247-1.148l.85-.863a36.537 36.537 0 011.331 1.218c.638-.764 1.02-1.813 1.02-3.046 0-2.493-1.516-4.39-3.896-4.39s-3.91 1.897-3.91 4.39c0 2.565 1.658 4.363 3.91 4.363.725 0 1.375-.184 1.942-.524z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: foursquare
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for foursquare (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-foursquare {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-foursquare {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-foursquare 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-foursquare 3s ease-in-out infinite alternate;
}
</style>