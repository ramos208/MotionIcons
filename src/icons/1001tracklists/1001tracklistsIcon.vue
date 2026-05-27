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
      <path d="M8.0957 1.334v1.3457H6.7461v1.3457H5.3984V5.371H4.0488v1.3457H2.6992v6.6816H1.3496v1.3477H0v2.4512h1.3496v1.3457h1.3496v1.3457h2.457v-7.836H3.8067V7.8223h1.3497V6.4766h1.3496V5.1309h1.3496V3.7852h8.289v1.3457h1.3496v1.3457h1.3496v1.3457h1.3497v4.2304h-1.3497v7.836h2.457V18.543h1.3497v-1.3457H24V14.746h-1.3496v-1.3477h-1.3496V6.7168h-1.3496V5.3711h-1.3496V4.0254h-1.3477V2.6797h-1.3496V1.334Zm1.3711 8v1.3515H8.1113v3.8165h2.4688v-4.0567h2.9512v4.3477h-1.3555v1.3515h-1.3535v2.4649h2.4668v-2.7051H16v-5.2188h-1.3555V9.334Zm1.3555 10.8691v2.463h2.4668v-2.463z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: 1001tracklists
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for 1001tracklists (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-1001tracklists {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-1001tracklists {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-1001tracklists 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-1001tracklists 3s ease-in-out infinite alternate;
}
</style>