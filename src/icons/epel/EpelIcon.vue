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
      <path d="M.702 2.361c-1.188.11-.88.154 1.98.286 5.677.242 9.043 1.144 11.353 2.993 1.232 1.012 2.187 3.146 2.187 3.146s-3.639.836-7.797 1.65c-4.159.814-7.46 1.54-7.327 1.584.352.11 5.214-.484 10.319-1.276l4.87-.734c.078-.012.036.394.036.514 0 1.1-1.122 2.948-2.794 4.599-2.75 2.684-6.623 4.686-11.573 5.962-1.364.352-2.2.638-1.892.638 1.188.044 5.742-1.298 7.81-2.266 2.685-1.276 4.401-2.508 6.491-4.664 1.48-1.842 2.994-2.796 3.056-5.017l3.06-.506c1.629-.264 3.103-.55 3.28-.616.241-.088.285-.352.197-1.012-.154-1.21-1.1-2.156-3.014-3.037-2.904-1.342-5.88-1.603-7.442-.68-.173.101-.376.417-.534.486a1079.7 1079.7 0 00-2.365-.862C7.567 2.515 3.848 2.075.702 2.361zm19.032 2.773c1.628.484 4.18 2.014 3.792 2.09l-3.066.601-3.386.772c-.644-1.435-1.491-2.232-2.628-3.305l.133-.327c.322-.796 2.536-.602 5.155.169z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: epel
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for epel (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-epel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-epel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-epel 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-epel 3s ease-in-out infinite alternate;
}
</style>