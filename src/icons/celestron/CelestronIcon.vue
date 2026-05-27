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
      <path d="M12 .002c-6.6266 0-12 5.3712-12 12 0 6.6275 5.3734 11.996 12 11.996 1.7452 0 3.4033-.3698 4.8984-1.041C10.7585 21.2392 2.2788 17.3246 3.25 9.5312c.6406-5.1338 7.2145-8.46 13.8047-8.414C15.518.4012 13.8062.002 12 .002zm5.4297 1.8437c-5.0918-.049-9.3055 2.0411-9.6875 5.5566-.6046 5.5956 7.1547 8.8084 11.8437 10.1407.9056.2592 1.8969.4197 2.7676.5234C23.399 16.286 24 14.2111 24 12.002c0-4.2502-2.21-7.9827-5.541-10.1172a18.6755 18.6755 0 0 0-1.0293-.0391z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: celestron
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for celestron (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-celestron {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-celestron {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-celestron 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-celestron 3s ease-in-out infinite alternate;
}
</style>