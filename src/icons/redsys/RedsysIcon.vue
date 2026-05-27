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
      <path d="M11.626 24c-3.989-.108-7.476-2.03-9.89-5.873A10.9 10.9 0 0 1 .17 13.959a12.4 12.4 0 0 1 .239-4.996c.44-1.711 1.275-3.197 2.339-4.58.075-.099.169-.263.314-.174.098.061.023.207-.019.324-.473 1.36-.46 2.756.225 3.984.783 1.411 1.964 2.438 3.67 2.705 1.636.258 3.07-.211 4.21-1.317 1.378-1.34 1.95-2.99 1.415-4.946-.285-1.036-.768-1.922-1.612-2.578-1.092-.848-2.33-1.26-3.722-1.12-.098.01-.225.08-.267-.056s.103-.14.187-.178A11.9 11.9 0 0 1 12.071 0c1.74.01 3.427.384 5.006 1.125 2.152 1.008 3.91 2.498 5.133 4.552a12.4 12.4 0 0 1 1.688 4.93c.154 1.313.08 2.584-.188 3.863-.333 1.575-.942 3.028-1.875 4.34-.853 1.2-1.851 2.241-3.103 3.052-.998.647-2.025 1.177-3.16 1.538-1.115.356-2.245.544-3.946.595z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: redsys
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for redsys (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-redsys {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-redsys {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-redsys 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-redsys 3s ease-in-out infinite alternate;
}
</style>