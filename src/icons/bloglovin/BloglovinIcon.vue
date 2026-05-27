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
      <path d="M12.526 11.695c1.84-.382 3.367-2.044 3.367-4.478 0-2.604-1.9-4.97-5.615-4.97H0v19.506h10.6c3.75 0 5.683-2.341 5.683-5.292-.009-2.426-1.646-4.444-3.757-4.766zm-8.37-5.793h5.207c1.407 0 2.28.849 2.28 2.044 0 1.255-.881 2.044-2.28 2.044H4.155zM9.54 18.098H4.155v-4.444h5.386c1.61 0 2.484.992 2.484 2.222.009 1.399-.932 2.222-2.484 2.222zM21.396 2.28c-1.255 0-2.315 1.052-2.315 2.307s.882 2.103 1.993 2.103c.238 0 .467-.025.56-.085-.238 1.052-1.315 2.282-2.256 2.782l1.611 1.314C22.796 9.422 24 7.462 24 5.266c0-1.9-1.23-2.985-2.604-2.985Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bloglovin
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bloglovin (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bloglovin {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bloglovin {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bloglovin 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bloglovin 3s ease-in-out infinite alternate;
}
</style>