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
      <path d="M1.893 3.078C.239 1.537 4.846.009 11.963 0h.076c7.116.009 11.723 1.537 10.067 3.078 0 0-6.168 5.655-8.301 7.473-.404.346-1.084.607-1.766.616h-.076c-.682-.009-1.362-.271-1.767-.616-2.132-1.818-8.301-7.473-8.303-7.473Zm20.549 2.771V8.58c0 .3-.115.698-.319.885-1.332 1.222-6.47 5.925-8.319 7.502-.405.345-1.085.606-1.767.615h-.072c-.683-.009-1.362-.27-1.767-.615-1.849-1.577-6.987-6.28-8.32-7.502-.204-.187-.318-.585-.318-.885V5.849c1.96 1.788 7.163 6.505 8.638 7.764.404.346 1.084.607 1.767.616h.072c.682-.009 1.362-.271 1.767-.616 1.474-1.258 6.678-5.973 8.638-7.764Zm0 6.418v2.73c0 .301-.115.698-.319.885-1.332 1.222-6.47 5.926-8.319 7.502-.405.346-1.085.607-1.767.616h-.072c-.683-.009-1.362-.271-1.767-.616-1.849-1.576-6.987-6.28-8.32-7.502-.204-.187-.318-.585-.318-.885v-2.73c1.96 1.788 7.163 6.505 8.638 7.764.404.346 1.084.606 1.767.615h.072c.682-.009 1.362-.27 1.767-.615 1.474-1.258 6.678-5.976 8.638-7.764Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: victoriametrics
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for victoriametrics (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-victoriametrics {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-victoriametrics {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-victoriametrics 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-victoriametrics 3s ease-in-out infinite alternate;
}
</style>