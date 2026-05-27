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
      <path d="m.939 14.973 10.97 6.4V24L.94 17.6v-2.626zm22.123 0v2.626l-10.971 6.4v-2.626l10.97-6.401ZM.939 10.66l10.97 6.4v2.627l-7.223-4.214-1.068.622-2.253-1.313 1.07-.623-1.496-.873V10.66zm22.123 0v2.626l-1.496.873 1.07.624-2.253 1.313-1.07-.623-7.224 4.214V17.06l10.972-6.4ZM.939 6.347l10.97 6.4v2.627l-3.525-2.057-1.067.622-2.252-1.314 1.067-.622-1.429-.833-1.066.622-2.253-1.314 1.068-.622-1.514-.883Zm22.123 0v2.626l-1.514.883 1.07.622-2.254 1.315-1.068-.623-1.428.833 1.068.622-2.252 1.314-1.07-.622-3.525 2.057v-2.627l10.972-6.4ZM12 8.584l3.236 1.885-2.252 1.314-.983-.573-.982.573-2.252-1.314 3.235-1.885Zm0-4.293 6.916 4.03-2.252 1.315L12 6.918 7.338 9.635 5.085 8.321ZM12 0l10.597 6.175-2.252 1.314L12 2.627 3.657 7.489 1.405 6.175 12 0Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ebox
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ebox (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ebox {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ebox {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ebox 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ebox 3s ease-in-out infinite alternate;
}
</style>