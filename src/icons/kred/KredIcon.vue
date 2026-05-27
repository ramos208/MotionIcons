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
      <path d="M24 4.678c0-2.08-1.674-3.774-3.727-3.774H3.725C1.67.904 0 2.597 0 4.684v7.535c0 .336.045.667.135.997.03.134.07.264.12.39.25.623.653 1.17 1.173 1.593.51.524 1.17 1.095 1.965 1.71l.105.074.435.33.52.397c1.19.912 3.205 2.453 6.165 4.71.483.366 1.038.676 1.383.676.342 0 .901-.31 1.382-.676 2.96-2.257 4.972-3.798 6.164-4.71l.972-.74h-.002l.11-.085c.798-.612 1.463-1.19 1.968-1.71.514-.418.908-.96 1.15-1.576.166-.44.252-.906.254-1.376v-7.15h-.003l.003-.003v-.39zm-4.14 6.242a6.42 6.42 0 00-.283-.045c-.105 0-.226-.015-.33-.015a1.883 1.883 0 00-.81.164c-.214.1-.4.248-.54.436-.135.196-.23.415-.286.646-.06.254-.09.524-.09.81v2.88h-5.027l-3.733-5.583-1.556 1.575v3.975h-2.72V3.393H7.2v5.13l4.83-5.127h3.395l-4.83 4.885 5.166 7.293V9.395h1.662v1.182h.023c.084-.195.195-.38.33-.547.144-.168.3-.312.483-.43.18-.106.375-.21.58-.27.205-.06.42-.09.64-.09.114 0 .24.03.38.06z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: kred
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for kred (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-kred {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-kred {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-kred 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-kred 3s ease-in-out infinite alternate;
}
</style>