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
      <path d="M20.8 8.1C20.8 8.59706 20.3971 9 19.9 9C19.4029 9 19 8.59706 19 8.1C19 7.60294 19.4029 7.2 19.9 7.2C20.3971 7.2 20.8 7.60294 20.8 8.1Z" fill="currentColor"/><path d="M20.8 8.1C20.8 8.59706 20.3971 9 19.9 9C19.4029 9 19 8.59706 19 8.1C19 7.60294 19.4029 7.2 19.9 7.2C20.3971 7.2 20.8 7.60294 20.8 8.1ZM20.8 8.1V3.6C20.8 3.26863 21.0686 3 21.4 3H23" stroke="currentColor" stroke-linecap="round"/><path d="M16 17C14.8954 17 14 16.1046 14 15C14 13.8954 14.8954 13 16 13C17.1046 13 18 13.8954 18 15C18 16.1046 17.1046 17 16 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.9506 13C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C13.4222 2 14.7751 2.2969 16 2.83209" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5C9 8.77614 8.77614 9 8.5 9Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 9C15.2239 9 15 8.77614 15 8.5C15 8.22386 15.2239 8 15.5 8C15.7761 8 16 8.22386 16 8.5C16 8.77614 15.7761 9 15.5 9Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: emoji-sing-right-note
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for emoji-sing-right-note (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-emoji-sing-right-note {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-emoji-sing-right-note {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-emoji-sing-right-note 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-emoji-sing-right-note 3s ease-in-out infinite alternate;
}
</style>