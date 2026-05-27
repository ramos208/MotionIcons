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
      <path d="M3 3L11.7348 11.7348M11.7348 11.7348C11.8027 11.667 11.8964 11.625 12 11.625C12.2071 11.625 12.375 11.7929 12.375 12C12.375 12.1036 12.333 12.1973 12.2652 12.2652M11.7348 11.7348L12.2652 12.2652M12.2652 12.2652L21 21M14.6517 9.34835C16.1161 10.8128 16.1161 13.1872 14.6517 14.6516M16.773 7.22703C19.409 9.86307 19.409 14.1369 16.773 16.773M18.8943 5.10571C22.7019 8.91332 22.7019 15.0867 18.8943 18.8943M9.34835 14.6516C8.75129 14.0546 8.39765 13.3063 8.28743 12.5301M7.22703 16.773C5.35299 14.8989 4.81126 12.1971 5.60184 9.84448M5.10571 18.8943C2.03824 15.8268 1.44197 11.2239 3.3169 7.55955M12 12H12.0075V12.0075H12V12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: signal-slash
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for signal-slash (heroicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-signal-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-signal-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-signal-slash 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-signal-slash 3s ease-in-out infinite alternate;
}
</style>