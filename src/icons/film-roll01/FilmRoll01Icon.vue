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
      <path d="M4 4.5H13V22H4V4.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 4L6.32918 3.34164C6.44315 3.1137 6.50014 2.99973 6.56517 2.90086C6.88933 2.40808 7.41449 2.08351 8.00021 2.01396C8.11773 2 8.24515 2 8.5 2C8.75485 2 8.88227 2 8.99979 2.01396C9.58551 2.08351 10.1107 2.40808 10.4348 2.90086C10.4999 2.99973 10.5568 3.1137 10.6708 3.34164L11 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 4.5H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 22H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 7.5H18C19.4142 7.5 20.1213 7.5 20.5607 7.96131C21 8.42261 21 9.16764 21 10.6577C21 11.6731 21 12.1808 20.7504 12.5763C20.5008 12.9719 20.057 13.1691 19.1694 13.5636L18.2829 13.9576C17.6912 14.2206 17.3953 14.3521 17.2289 14.6158C17.0625 14.8794 17.0625 15.2179 17.0625 15.8949C17.0625 16.8882 17.0625 17.3849 16.7696 17.6925C16.4767 18 16.0053 18 15.0625 18H13V7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: film-roll01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for film-roll01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-film-roll01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-film-roll01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-film-roll01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-film-roll01 3s ease-in-out infinite alternate;
}
</style>