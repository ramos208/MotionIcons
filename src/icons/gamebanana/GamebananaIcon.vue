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
      <path d="M14.249 0v3h1.5V1.5h1.505V3h-1.505V7.5h1.5V4.5h3.002v-1.5h-1.505V0Zm6.002 4.498v1.5h1.5V4.501Zm1.5 1.5v10.503h1.5V5.998Zm0 10.503h-1.5V19.5h1.5zm-1.5 2.998h-1.505v1.5h1.5zm-1.5 1.5h-3.002v1.5h3.001zm-3.002 1.5H6.75V24h9zm-8.999 0V21h-3v1.5zm-3-1.5v-1.497H2.248v1.5zm-1.501-1.497v-2.997H9.75v-1.5H.748v4.497zm7.502-4.497h2.997v-1.5H9.751Zm2.997-1.5h1.5v-1.501h-1.5zm1.5-1.501h1.501V7.506h-1.5z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gamebanana
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gamebanana (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gamebanana {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gamebanana {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gamebanana 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gamebanana 3s ease-in-out infinite alternate;
}
</style>