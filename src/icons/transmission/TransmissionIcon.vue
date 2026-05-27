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
      <path d="M1.6956 9.46V22.254c0 .945.8847 1.709 1.7157 1.709h17.1573c.878 0 1.7157-.6098 1.7157-1.709V9.4666c-2.3323.3753-4.6177.6233-6.863.7708v5.1471h3.4315l-6.8629 6.863-6.8628-6.863h3.4314v-5.0868c-2.339-.1207-4.6244-.3887-6.8428-.831h-.02v-.0068zM15.4214.0368v8.4177c2.2452-.1474 4.5306-.1675 6.8629-.5428C23.2226 7.7643 24 7.1008 24 6.0888v-3.8c0-1.012-.7841-1.6622-1.7157-1.8297-2.339-.429-4.6177-.2949-6.863-.4222zM8.5585.0503C6.2396.191 3.9609.077 1.7157.459.7774.6199 0 1.2767 0 2.2887v3.8001c0 1.012.7841 1.642 1.7157 1.823 2.2184.4423 4.5038.4758 6.8428.6031V.0503z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: transmission
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for transmission (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-transmission {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-transmission {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-transmission 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-transmission 3s ease-in-out infinite alternate;
}
</style>