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
      <path d="M19.11 8.975l-3.454 6.05h3.432l3.455-6.05zm3.933 0l-3.455 6.05h.959L24 8.975zm-10.01.781H14.8l.403 5.27h-1.31l-.025-.58a.206.206 0 0 0-.202-.227h-1.867l.429-.757h1.21c.151 0 .328.026.328-.202l-.202-2.37c0-.15-.126-.226-.227-.075L11.193 15h-.882zm-9.983 0h1.74l.353 5.27h-1.31l-.026-.58a.226.226 0 0 0-.227-.227H1.563l.429-.757h1.386c.151 0 .328.026.328-.202l-.151-2.37c0-.15-.126-.226-.227-.075L.882 15H0zm3.278 0h1.79l1.16 4.084c.05.126.15.101.176 0l.756-4.084h.782l-.933 5.27H8.244l-1.135-4.034c-.025-.101-.151-.127-.176 0l-.706 4.033h-.832Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ana
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ana (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ana {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ana {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ana 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ana 3s ease-in-out infinite alternate;
}
</style>