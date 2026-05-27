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
      <path d="M18.1722.6246a.6788.6788 0 0 0-.1314.0252L14.095 1.818c-.3504.1039-.545.4673-.4413.8178l5.1137 17.3544c.104.3505.4673.5452.8178.4414l3.9455-1.1553c.3504-.1038.5451-.4673.4413-.8178L18.8584 1.0911a.6522.6522 0 0 0-.6862-.4665zM.662 1.0522c-.3634 0-.6619.2986-.6619.662v18.0944c0 .3634.2985.6619.662.6619h4.1143c.3634 0 .6619-.2985.6619-.662V1.7143c0-.3634-.2985-.662-.6619-.662zm6.9438 0c-.3634 0-.662.2986-.662.662v18.0944c0 .3634.2986.6619.662.6619H11.72c.3634 0 .649-.2985.662-.662V1.7143c0-.3634-.2986-.662-.662-.662zM.3634 21.431c-.1947 0-.3634.1558-.3634.3634v1.2202c0 .1948.1558.3635.3634.3635h23.2712c.1947 0 .3635-.1558.3635-.3635v-1.2202c0-.1947-.1557-.3634-.3635-.3634z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: thestorygraph
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for thestorygraph (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-thestorygraph {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-thestorygraph {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-thestorygraph 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-thestorygraph 3s ease-in-out infinite alternate;
}
</style>