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
      <path d="M302.3-12.6c-9-4.5-19.6-4.5-28.6 0l-256 128C1.9 123.3-4.5 142.5 3.4 158.3s27.1 22.2 42.9 14.3L288 51.8 529.7 172.6c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9l-256-128zM288 272a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm0 48c-53 0-96 43-96 96l0 32c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-32c0-53-43-96-96-96zM160 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm352 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM112 336c-44.2 0-80 35.8-80 80l0 33.1c0 17 13.8 30.9 30.9 30.9l87.8 0c-4.3-9.8-6.7-20.6-6.7-32l0-48c0-18.4 3.5-36 9.8-52.2-12.2-7.5-26.5-11.8-41.8-11.8zM425.4 480l87.8 0c17 0 30.9-13.8 30.9-30.9l0-33.1c0-44.2-35.8-80-80-80-15.3 0-29.6 4.3-41.8 11.8 6.3 16.2 9.8 33.8 9.8 52.2l0 48c0 11.4-2.4 22.2-6.7 32z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: people-roof
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for people-roof (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-people-roof {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-people-roof {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-people-roof 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-people-roof 3s ease-in-out infinite alternate;
}
</style>