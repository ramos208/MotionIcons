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
      <path d="M12.924 1.228c-.584-.01-1.251 0-1.485.027-2.46.282-4.138 1.3-4.753 2.891-.218.552-.274 1.002-.243 1.772.048 1.21.419 2.004 1.262 2.742 1.225 1.06 2.98 1.508 5.998 1.508 2.737 0 3.71.413 3.916 1.675.313 1.867-1.57 3.07-4.414 2.827-1.878-.16-3.496-.912-4.223-1.967a7.772 7.772 0 01-.355-.62c-.382-.76-.64-.978-1.176-.978-.43.005-.732.165-.918.494l-.133.24v4.03l.137.296c.165.344.4.546.744.63.35.09.794-.036 1.42-.402l.5-.29.826.185c1.82.403 2.75.523 4.065.523 1.103.005 1.548-.046 2.455-.285 1.124-.297 1.974-.785 2.717-1.57.8-.844 1.15-1.853 1.097-3.147-.069-1.628-.695-2.698-2-3.414-.96-.525-2.292-.79-4.377-.88-2.042-.086-2.794-.155-3.515-.32-.51-.12-.785-.25-1.076-.515-.653-.589-.59-1.755.136-2.482.642-.637 1.511-.928 2.774-.928 1.432.005 2.393.27 3.412.955.185.127.721.62 1.193 1.092.886.902 1.135 1.082 1.506 1.082.244 0 .59-.163.732-.344.26-.329.303-.63.303-2.2 0-1.66-.043-1.91-.377-2.282-.387-.425-.848-.42-1.75.031l-.59.297-.63-.17c-1.496-.392-2.038-.477-3.178-.504zM0 13.775v9h24v-1H1v-8z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: slackware
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for slackware (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-slackware {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-slackware {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-slackware 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-slackware 3s ease-in-out infinite alternate;
}
</style>