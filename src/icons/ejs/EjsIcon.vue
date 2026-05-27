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
      <path d="m8.291 5.696-1.258-1.58 1.668-1.55 1.258 1.58-1.668 1.55zm2.34 2.048.205-1.55-5.412-.03-.204 1.55 3.945.022L7.8 17.852l-.839.77-.405-.004c.385.403.803.81 1.236 1.214l1.378-1.265 1.458-10.823h.004zm-6.757 7.254s2.925-.468 3.54.38c0 0-1.756-2.925-4.184-2.925 0-.074-.098-1.353 5.146-2.609l.206-1.53c-8.346 1.108-14.287 4.322.265 13.12 0 0-5.675-4.71-4.973-6.436zM13 6.223 11.216 7.86l-.526 4.037 1.316 1.638 5.675.058.556.702-.38 2.633-.713.685-.018.017h2.193l.556-4.037-1.345-1.638-5.646-.058-.556-.702.351-2.633.731-.702 5.032.058.556.673-.176 1.229h1.55l.264-1.902-1.317-1.667-6.318-.03zm2.882 11.908.545-.523-4.305-.035-.965-1.17-1.258 1.17 1.346 1.667 6.318.03 1.22-1.139h-2.901zM13.13 8.965a103.16 103.16 0 0 1 4.624-.554l-4.145-.048-.457.44-.022.162zm8.026-1.156-.025.179-.018.132c.92-.07 1.87-.139 2.887-.2 0 0-1.113-.067-2.844-.11zM1.914 18.392l1.404 1.784 2.66.02c-1.292-.875-2.393-1.708-3.296-2.499l-.768.695z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ejs
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ejs (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ejs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ejs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ejs 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ejs 3s ease-in-out infinite alternate;
}
</style>