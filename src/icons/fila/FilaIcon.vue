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
      <path d="M8.814 8.027c-.614 0-1.113.498-1.113 1.113v5.72a1.113 1.113 0 0 0 2.226 0V9.14c0-.614-.498-1.113-1.113-1.113m-2.849.078H1.113a1.113 1.113 0 0 0 0 2.226h4.852a1.113 1.113 0 0 0 0-2.226m17.411 4.417L21.03 8.705c-.275-.444-.65-.658-1.125-.658-.488 0-.904.229-1.162.658l-2.715 4.5c-.186.308-.4.436-.753.436h-2.019a.275.275 0 0 1-.285-.284V9.102c0-.613-.497-1.075-1.11-1.075-.614 0-1.11.463-1.11 1.076v5.215c0 .784.774 1.544 1.544 1.544h4.064c.576 0 .963-.42 1.292-.996l2.114-3.627c.018-.04.053-.091.093-.091.043 0 .07.051.091.088l1.384 2.22c.058.094.069.141.032.225-.033.077-.108.093-.23.093h-1.943a1.044 1.044 0 1 0 0 2.088h3.17c.77 0 1.638-.734 1.638-1.693 0-.608-.117-.822-.624-1.647M5.431 10.954H1.113c-.615 0-1.113.498-1.113 1.113v2.715a1.113 1.113 0 1 0 2.226 0v-1.268c0-.185.15-.334.334-.334h2.87a1.113 1.113 0 0 0 0-2.226"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fila
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for fila (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fila {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fila {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fila 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fila 3s ease-in-out infinite alternate;
}
</style>