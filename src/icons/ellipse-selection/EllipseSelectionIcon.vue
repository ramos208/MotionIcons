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
      <path d="M13.9999 4.25195C16.8111 4.97551 19.0243 7.1887 19.7479 9.99992M9.99992 4.25195C7.1887 4.97551 4.97551 7.1887 4.25195 9.99992M4.25195 13.9999C4.97551 16.8111 7.1887 19.0243 9.99992 19.7479M13.9999 19.7479C16.8111 19.0243 19.0243 16.8111 19.7479 13.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.2929 5.70711C10.5858 6 11.0572 6 12 6C12.9428 6 13.4142 6 13.7071 5.70711M10.2929 5.70711C10 5.41421 10 4.94281 10 4C10 3.05719 10 2.58579 10.2929 2.29289M10.2929 5.70711C10.2929 5.70711 10.2929 5.70711 10.2929 5.70711ZM13.7071 5.70711C14 5.41421 14 4.94281 14 4C14 3.05719 14 2.58579 13.7071 2.29289M13.7071 5.70711C13.7071 5.70711 13.7071 5.70711 13.7071 5.70711ZM13.7071 2.29289C13.4142 2 12.9428 2 12 2C11.0572 2 10.5858 2 10.2929 2.29289M13.7071 2.29289C13.7071 2.29289 13.7071 2.29289 13.7071 2.29289ZM10.2929 2.29289C10.2929 2.29289 10.2929 2.29289 10.2929 2.29289Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.2929 21.7071C10.5858 22 11.0572 22 12 22C12.9428 22 13.4142 22 13.7071 21.7071M10.2929 21.7071C10 21.4142 10 20.9428 10 20C10 19.0572 10 18.5858 10.2929 18.2929M10.2929 21.7071C10.2929 21.7071 10.2929 21.7071 10.2929 21.7071ZM13.7071 21.7071C14 21.4142 14 20.9428 14 20C14 19.0572 14 18.5858 13.7071 18.2929M13.7071 21.7071C13.7071 21.7071 13.7071 21.7071 13.7071 21.7071ZM13.7071 18.2929C13.4142 18 12.9428 18 12 18C11.0572 18 10.5858 18 10.2929 18.2929M13.7071 18.2929C13.7071 18.2929 13.7071 18.2929 13.7071 18.2929ZM10.2929 18.2929C10.2929 18.2929 10.2929 18.2929 10.2929 18.2929Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.2929 10.2929C18 10.5858 18 11.0572 18 12C18 12.9428 18 13.4142 18.2929 13.7071M18.2929 10.2929C18.5858 10 19.0572 10 20 10C20.9428 10 21.4142 10 21.7071 10.2929M18.2929 10.2929C18.2929 10.2929 18.2929 10.2929 18.2929 10.2929ZM18.2929 13.7071C18.5858 14 19.0572 14 20 14C20.9428 14 21.4142 14 21.7071 13.7071M18.2929 13.7071C18.2929 13.7071 18.2929 13.7071 18.2929 13.7071ZM21.7071 13.7071C22 13.4142 22 12.9428 22 12C22 11.0572 22 10.5858 21.7071 10.2929M21.7071 13.7071C21.7071 13.7071 21.7071 13.7071 21.7071 13.7071ZM21.7071 10.2929C21.7071 10.2929 21.7071 10.2929 21.7071 10.2929Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.29289 10.2929C2 10.5858 2 11.0572 2 12C2 12.9428 2 13.4142 2.29289 13.7071M2.29289 10.2929C2.58579 10 3.05719 10 4 10C4.94281 10 5.41421 10 5.70711 10.2929M2.29289 10.2929C2.29289 10.2929 2.29289 10.2929 2.29289 10.2929ZM2.29289 13.7071C2.58579 14 3.05719 14 4 14C4.94281 14 5.41421 14 5.70711 13.7071M2.29289 13.7071C2.29289 13.7071 2.29289 13.7071 2.29289 13.7071ZM5.70711 13.7071C6 13.4142 6 12.9428 6 12C6 11.0572 6 10.5858 5.70711 10.2929M5.70711 13.7071C5.70711 13.7071 5.70711 13.7071 5.70711 13.7071ZM5.70711 10.2929C5.70711 10.2929 5.70711 10.2929 5.70711 10.2929Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ellipse-selection
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ellipse-selection (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ellipse-selection {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ellipse-selection {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ellipse-selection 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ellipse-selection 3s ease-in-out infinite alternate;
}
</style>