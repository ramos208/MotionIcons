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
      <path d="M21.0092 4.6236 13.8544.5046c-1.1652-.6728-2.5929-.6728-3.7416 0L8.242 1.5877v10.4205c0 1.3292.7057 2.5764 1.8708 3.2492.5744.3282 1.2308.5088 1.8708.5088s1.2964-.1641 1.8708-.5088c1.165-.6728 1.8707-1.9036 1.8707-3.2492 0-1.3292-.7056-2.5764-1.8707-3.2492-.5744-.3282-1.2308-.5087-1.8708-.5087V5.9036c.64 0 1.2964.164 1.8708.5087l2.0348 1.1815c1.1652.6729 1.8708 1.9036 1.8708 3.2493v2.3466c0 1.3293-.7056 2.5765-1.8708 3.2493l-2.0348 1.1815c-.5744.3282-1.2308.5087-1.8708.5087s-1.2964-.164-1.8708-.5087L8.078 16.439c-1.165-.6728-1.8707-1.9036-1.8707-3.2492V2.7528L2.9744 4.6236c-1.1652.6728-1.8708 1.9036-1.8708 3.2492v8.2544c0 1.3292.7056 2.5764 1.8708 3.2492l7.1548 4.119c1.1652.6728 2.5928.6728 3.7416 0l7.1548-4.119c1.1652-.6728 1.8708-1.9036 1.8708-3.2492V7.8728a3.8203 3.8203 0 0 0-1.8872-3.2492ZM9.6862 9.0544c-.2134.164-.3939.3446-.558.5415V6.9703l.558-.3283v2.4124Zm1.4276-.6893c-.1969.0493-.3774.0985-.5579.1805v-2.363c.1805-.082.3774-.1313.558-.1805v2.363Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: beekeeperstudio
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for beekeeperstudio (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-beekeeperstudio {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-beekeeperstudio {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-beekeeperstudio 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-beekeeperstudio 3s ease-in-out infinite alternate;
}
</style>