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
      <path d="M3.3522 10.17a.903.903 0 0 0-.903.903v4.0696H1.127v-2.8134H0v-1.318h1.1284a2.2252 2.2252 0 0 1 2.2238-2.1703H4.673v1.3222zm7.3257 1.8403a.2501.2501 0 0 0-.2378.1732l-.532 1.8348a1.564 1.564 0 0 1-3.0016 0l-.532-1.8348a.2515.2515 0 0 0-.4769 0l-.5319 1.8348a1.5723 1.5723 0 0 1-1.5118 1.123h-.3684v-1.3195h.3739a.2474.2474 0 0 0 .235-.1732l.5319-1.8348a1.5696 1.5696 0 0 1 3.0086 0l.536 1.8376a.246.246 0 0 0 .4714 0l.532-1.8349a1.5696 1.5696 0 0 1 3.0086 0l.5319 1.8349a.2474.2474 0 0 0 .235.1731h.3738v1.3195h-.3683a1.571 1.571 0 0 1-1.5119-1.123l-.5319-1.8348a.2515.2515 0 0 0-.2336-.1759zm2.6897.9058a2.2252 2.2252 0 1 1 2.2252 2.2251 2.2252 2.2252 0 0 1-2.2252-2.2251zm3.1282 0a.903.903 0 1 0-.903.903.903.903 0 0 0 .903-.903zm4.6744.4604a.962.962 0 0 0 .0673-.1237.6707.6707 0 0 1 1.2659.3079.6542.6542 0 0 1-.055.2625l-.0192.0398a2.2678 2.2678 0 0 1-2.0342 1.2755 2.2252 2.2252 0 0 1 0-4.4504h.0976a2.25 2.25 0 0 1 1.0143.2914V8.8409h1.3222v3.01a.7422.7422 0 0 1-.712.7215 1.5902 1.5902 0 0 1-1.0692-.3738.9016.9016 0 0 0-.5498-.191h-.0976a.903.903 0 1 0 .7752 1.3661zM4.2277 11.624a.7037.7037 0 0 1-.7037.7037.7037.7037 0 0 1-.7037-.7037.7037.7037 0 0 1 .7037-.7037.7037.7037 0 0 1 .7037.7037zm18.398 2.8354a.6872.6872 0 1 0 .6872-.6748.6776.6776 0 0 0-.6872.6748zm.1237 0a.5594.5594 0 1 1 .5608.5828.558.558 0 0 1-.565-.5828zm.2817.3821h.1237v-.3408h.1375l.2158.3408h.1374l-.2268-.3505a.2034.2034 0 0 0 .209-.2157c0-.1526-.0894-.2268-.275-.2268h-.3064zm.1237-.6872h.1581c.0838 0 .1746.0165.1746.121 0 .1044-.1004.1374-.209.1374h-.1292z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fmod
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for fmod (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fmod {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fmod {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fmod 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fmod 3s ease-in-out infinite alternate;
}
</style>