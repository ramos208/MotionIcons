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
      <path d="M12.054 0C5.424 0 .028 5.37 0 11.973 0 18.603 5.424 24 12.054 24 18.657 24 24 18.603 24 11.973 24 5.398 18.657 0 12.054 0Zm0 .877c2.603 0 5.068.96 6.986 2.52L7.178 15.123a21.416 21.416 0 0 1-.75-.101c-.55-.082-.988-.147-1.552-.089-.904.082-2.135.876-2.902 1.725a11.18 11.18 0 0 1-1.015-4.711C.959 5.864 5.917.877 12.054.877zm7.37 2.876c2.247 2.054 3.672 4.987 3.672 8.22 0 2.137-.549 4.055-1.59 5.753l-10.218-1.862ZM4.876 16.738c.795.028 1.644.084 2.521.33l9.534 4.712-5.15-4.219 9.479.547c-2 3.014-5.398 4.96-9.179 4.96-4.328 0-8.082-2.465-9.945-6.054.96-.164 1.809-.303 2.74-.276z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tarom
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tarom (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tarom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tarom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tarom 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tarom 3s ease-in-out infinite alternate;
}
</style>