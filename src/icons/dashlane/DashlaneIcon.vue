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
      <path d="M20.89 7.7189c0-.1488-.1488-.2976-.3575-.3571l-2.502-.9221c-.4166-.1786-.8932.0297-.8932.3277V17.25c0 .1487.1488.3273.2977.3868l2.5614.9222c.3872.1487.8936-.0596.8936-.3873zm-4.676-3.663c0-.1492-.1489-.298-.3576-.3575l-2.5015-.9221c-.417-.1786-.8936.0297-.8936.3278v6.3723c0 .1488.1487.3273.2976.3873l2.5614.9221c.3873.1492.8937-.0595.8937-.3869zm0 11.4663c0-.1488-.1489-.2975-.3576-.3571l-2.5015-.9221c-.417-.1786-.8936.0297-.8936.3277v6.3724c0 .1488.1487.3273.2976.3869l2.5614.922c.3873.1493.8937-.0594.8937-.3872zm-4.6761 1.281c0-.1489-.1488-.298-.3575-.3576l-2.5015-.9221c-.4192-.1786-.8937.0297-.8937.3277v6.7903c0 .1487.1488.3277.2977.3872l2.5614.9222c.3872.1493.8936-.0595.8936-.387zm0-15.4579c0-.1488-.1488-.2976-.3575-.3571L8.6789.066c-.4192-.1786-.8937.0297-.8937.3277v6.7903c0 .1492.1488.3277.2977.3873l2.5614.922c.3872.1488.8936-.0594.8936-.3872zm-4.6752.2683c0-.1488-.1488-.298-.3575-.3576L4.0037.334C3.5867.1553 3.11.3636 3.11.6617v21.7409c0 .1487.1488.3273.298.3868l2.561.9222c.3874.1488.8937-.0595.8937-.3874z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dashlane
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dashlane (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dashlane {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dashlane {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dashlane 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dashlane 3s ease-in-out infinite alternate;
}
</style>