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
      <path d="M3.96586 5.79755L4.56916 4.39672C5.06999 3.23383 5.32041 2.65238 5.81138 2.32619C6.30235 2 6.92711 2 8.17664 2H15.8234C17.0729 2 17.6976 2 18.1886 2.32619C18.6796 2.65238 18.93 3.23383 19.4308 4.39672L20.0341 5.79755C20.8508 7.69388 21.2592 8.64205 20.8221 9.32102C20.3849 10 19.3661 10 17.3285 10H6.67147C4.63387 10 3.61507 10 3.17794 9.32102C2.7408 8.64205 3.14915 7.69388 3.96586 5.79755Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.5 10V15C4.5 16.8856 4.5 17.8284 5.08579 18.4142C5.55733 18.8858 6.26022 18.9777 7.5 18.9957M19.5 10V15C19.5 16.8856 19.5 17.8284 18.9142 18.4142C18.4427 18.8858 17.7398 18.9777 16.5 18.9957" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 14L10.4058 17.0672C10.0891 17.4778 9.93078 17.6831 10.0289 17.8416C10.127 18 10.4124 18 10.9833 18H13.0167C13.5876 18 13.873 18 13.9711 18.1584C14.0692 18.3169 13.9109 18.5222 13.5942 18.9328L10.9833 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 2L9 10M14 2L15 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4 6H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: house-solar-panel
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for house-solar-panel (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-house-solar-panel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-house-solar-panel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-house-solar-panel 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-house-solar-panel 3s ease-in-out infinite alternate;
}
</style>