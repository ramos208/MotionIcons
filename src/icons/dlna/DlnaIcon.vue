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
      <path d="M23.255 12.667H13.02c-1.052 0-2.1.489-2.693 1.266v-.017a3.24 3.24 0 01-2.629 1.353 3.25 3.25 0 010-6.502c1.085 0 2.04.536 2.63 1.353v-.013c.591.776 1.64 1.273 2.692 1.273h10.129c.186-.005.873-.095.848-.981-.884-5.086-5.88-8.987-11.923-8.987-3.722 0-7.048 1.48-9.263 3.803-.356.527.014.689.35.734H9.77c1.05 0 2.1-.498 2.692-1.277v.018a3.242 3.242 0 012.63-1.355 3.252 3.252 0 010 6.503 3.24 3.24 0 01-2.63-1.355v.019c-.592-.78-1.642-1.266-2.692-1.266H2.55l.028.003s-1.068-.06-1.719.859C.361 8.9 0 10.62 0 12.002c0 1.388.198 2.65.867 3.923.564.908 1.71.85 1.71.85l-.042.005h7.233c1.05 0 2.1-.49 2.692-1.268v.02a3.242 3.242 0 012.63-1.356 3.251 3.251 0 010 6.502 3.242 3.242 0 01-2.63-1.354v.018c-.592-.779-1.642-1.277-2.692-1.277H3.164c-.328.042-.698.198-.379.7 2.216 2.336 5.555 3.823 9.289 3.823 6.054 0 11.056-3.91 11.926-9.009-.004-.713-.489-.877-.745-.912"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dlna
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dlna (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dlna {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dlna {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dlna 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dlna 3s ease-in-out infinite alternate;
}
</style>