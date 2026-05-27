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
      <path d="M5.584 9.054H1.98l-.487 1.413h3.408c.54 0 .594.25.51.494-.084.244-.18.323-.719.323h-3.43L0 14.946h1.917l.892-2.454c.263 0 .33.024.436.257l1.043 2.197h2.084l-1.148-2.46c1.368-.15 1.985-.822 2.206-1.698.211-.837-.173-1.734-1.846-1.734m2.817 0-.487 1.413H10l-1.541 4.48 2.036-.001 1.54-4.479h1.94l.486-1.413H8.4zm7.89 0h-1.306l-.485 1.414h.624c.272 0 .416.22.322.493l-1.368 3.985h2.036l1.37-3.988c.37-1.08.053-1.905-1.194-1.904m3.186 0h-1.16l-.486 1.414h.48c.271 0 .415.22.322.493l-1.368 3.985H19.3l1.37-3.988c.37-1.08.053-1.904-1.194-1.904m3.185 0h-1.16l-.485 1.414h.479c.272 0 .416.22.323.493l-1.369 3.985h2.036l1.37-3.988c.37-1.08.054-1.904-1.194-1.904"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rtm
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rtm (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rtm {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rtm {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rtm 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rtm 3s ease-in-out infinite alternate;
}
</style>