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
      <path d="M.428 9.572v4.899h23.144V9.572Zm1.543 1.143h.172l.886.014v.572h-.744v1.484h.744v.572H1.971l-.371-.37v-1.901zm1.7 0h1.243l.47.314v.985l-.37.244.601 1.086h-.73l-.528-.973v.973h-.685Zm2.815 0H7.5l.357.314v2.315h-.615v-.873h-.484v.873h-.63v-2.315zm2.07 0h1.329v.613H9.27v.516h.543v.57h-.543v.93h-.714Zm1.944 0h1.686l-.2.629h-.443v2h-.672v-2h-.57zm2.1 0h1.556l-.17.613h-.843l1.029 1.414-.201.615h-1.713l.185-.586h.942l-.942-1.386zm2.1 0h.814l.414.97.4-.97h.815v2.613h-.672v-1.57l-.399.957h-.3l-.4-.944v1.573h-.673zm3.571 0h1.014l.358.314v2.315h-.63v-.873h-.484v.873h-.615v-2.315zm2.057 0h.629l.615 1.414v-1.414h.627v2.629h-.627l-.615-1.416v1.416h-.629zm-13.586.556v.614h.487v-.614zm11.787 0v.614h.485v-.614zm-14.172.014v.572h.358v-.572ZM0 9.143h24v5.714H0Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: craftsman
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for craftsman (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-craftsman {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-craftsman {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-craftsman 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-craftsman 3s ease-in-out infinite alternate;
}
</style>