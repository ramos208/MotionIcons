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
      <path d="M11.482 16.752c-.01.688-.56 1.242-1.238 1.242-.689 0-1.23-.541-1.244-1.23h-.016v-6.243H9v-.029c0-.693.556-1.256 1.237-1.256s1.236.563 1.236 1.258v.045h.016v6.225h-.016l.009-.012zm11.137-4.889c.75 0 1.381.618 1.381 1.377 0 .76-.631 1.375-1.381 1.375-.766 0-1.395-.615-1.395-1.379 0-.766.615-1.381 1.379-1.381l.016.008zm-2.084 4.186c.121.195.193.432.193.686 0 .703-.553 1.26-1.244 1.26-.463 0-.869-.256-1.08-.631l-2.053-2.746-.631.586v1.635h-.014c-.039.652-.57 1.168-1.225 1.168-.674 0-1.221-.553-1.221-1.238v-.025h-.016v-9.45h.027v-.047c0-.69.551-1.253 1.23-1.253.674 0 1.225.562 1.225 1.253v.07h.016l.01 4.597 2.311-2.261c.229-.255.559-.405.928-.405.689 0 1.248.57 1.248 1.26 0 .346-.133.646-.344.871l.012.015-1.621 1.605 2.281 3.061-.016.016-.016-.027zm-13.246 0c.12.195.195.432.195.686 0 .703-.555 1.26-1.244 1.26-.466 0-.871-.256-1.081-.631l-2.054-2.746-.63.586v1.631H2.46c-.036.654-.57 1.17-1.221 1.17-.676 0-1.225-.555-1.225-1.238v-.027H0V7.29h.031c-.004-.015-.004-.029-.004-.044 0-.69.551-1.252 1.23-1.252.675 0 1.225.559 1.225 1.25v.07h.016l.01 4.6 2.311-2.261c.23-.255.562-.405.931-.405.687 0 1.245.57 1.245 1.26 0 .33-.131.646-.346.871l.016.015-1.627 1.605 2.271 3.061-.016.016-.004-.027z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: kik
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for kik (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-kik {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-kik {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-kik 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-kik 3s ease-in-out infinite alternate;
}
</style>