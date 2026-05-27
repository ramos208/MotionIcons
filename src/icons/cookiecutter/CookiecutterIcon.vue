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
      <path d="M12.806 0a12 12 0 0 0-4.512.885A12 12 0 0 0 .858 12.978a12 12 0 0 0 9.303 10.724 12 12 0 0 0 13.021-5.656L12.817 12l9.244-7.65A12 12 0 0 0 12.806 0zM9.218 2.143c.34-.003.701.123 1.193.378.847.437 1.013 1.027.36 1.277-.487.187-2.457.177-2.932-.015-.526-.212-.38-.781.32-1.24.402-.263.72-.396 1.059-.4zm4.077 4.052a1.292 1.292 0 0 1 .022 0 1.292 1.292 0 0 1 1.292 1.291 1.292 1.292 0 0 1-1.292 1.292 1.292 1.292 0 0 1-1.292-1.292 1.292 1.292 0 0 1 1.27-1.291zm-6.259 3.8c1.033 0 1.788.434 1.788 1.028 0 .694-1.961 2.384-2.766 2.384-.365 0-.727-.166-.804-.368-.078-.203.117-.97.434-1.706.505-1.176.67-1.338 1.348-1.338zm8.637 9.187c.372 0 1.362 2.316 1.186 2.775-.201.524-1.046.467-1.564-.105-.676-.747-.404-2.67.378-2.67z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cookiecutter
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cookiecutter (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cookiecutter {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cookiecutter {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cookiecutter 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cookiecutter 3s ease-in-out infinite alternate;
}
</style>