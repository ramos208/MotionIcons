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
      <path d="M23.29 1.8c-.3-.4-.6-.7-.9-.9-1.3-.9-2.899-.9-6.098-.9H7.696C4.498 0 2.9 0 1.8.8c-.4.3-.7.6-1 1C0 2.9 0 4.5 0 7.7v8.6c0 3.2 0 4.8.8 5.9.3.4.6.7.9.9 1.199.9 2.798.9 5.996.9h8.596c3.199 0 4.798 0 5.898-.8.4-.3.7-.6.9-.9.799-1.1.799-2.7.799-5.9V7.7c.2-3.2.2-4.8-.6-5.9ZM11.194 16.5c0 .2 0 .5-.1.8 0 .2-.1.3-.1.5-.1.1-.2.3-.4.5s-.4.3-.6.4c-.3.1-.7.1-1.399.1-.8 0-1.1 0-1.4-.1-.4-.2-.699-.5-.899-.9-.1-.3-.1-.7-.1-1.4v-8c0-.9 0-1.4.2-1.7.2-.3.4-.5.8-.7.3-.2.8-.2 1.699-.2h2.299zm5.097-4.9c-1.599 0-2.798-1.3-2.798-2.8 0-1.6 1.3-2.8 2.798-2.8 1.5 0 2.8 1.3 2.8 2.8 0 1.5-1.3 2.8-2.8 2.8z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rescript
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rescript (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rescript {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rescript {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rescript 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rescript 3s ease-in-out infinite alternate;
}
</style>