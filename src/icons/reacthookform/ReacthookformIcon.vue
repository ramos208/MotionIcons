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
      <path d="M10.7754 17.3477H5.8065a.2815.2815 0 1 0 0 .563h4.9689a.2815.2815 0 1 0 0-.563zm7.3195 0h-4.9688a.2815.2815 0 1 0 0 .563h4.9688a.2815.2815 0 0 0 0-.563zm-7.3336-6.475H5.8065a.2815.2815 0 1 0 0 .563h4.9548a.2815.2815 0 1 0 0-.563zm7.3195 0h-4.9547a.2815.2815 0 1 0 0 .563h4.9547a.2815.2815 0 0 0 0-.563zm.5518-9.2001h-4.341a2.4042 2.4042 0 0 0-4.5804 0H5.3674c-1.7103 0-3.0968 1.3864-3.0968 3.0967v16.134C2.2706 22.6135 3.6571 24 5.3674 24h13.2652c1.7103 0 3.0968-1.3865 3.0968-3.0967V4.7693c0-1.7103-1.3865-3.0967-3.0968-3.0967zm-8.7046.563a.2815.2815 0 0 0 .2815-.2224 1.8411 1.8411 0 0 1 3.5979 0 .2815.2815 0 0 0 .2815.2224h1.5146v1.844a.8446.8446 0 0 1-.8446.8446H9.2552a.8446.8446 0 0 1-.8446-.8446v-1.844Zm11.2383 18.6677c0 1.3993-1.1344 2.5337-2.5337 2.5337H5.3674c-1.3993 0-2.5337-1.1344-2.5337-2.5337V4.7693c0-1.3993 1.1344-2.5337 2.5337-2.5337h2.4802v1.844c0 .7774.6302 1.4076 1.4076 1.4076h5.4896c.7774 0 1.4076-.6302 1.4076-1.4076v-1.844h2.4802c1.3993 0 2.5337 1.1344 2.5337 2.5337z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: reacthookform
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for reacthookform (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-reacthookform {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-reacthookform {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-reacthookform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-reacthookform 3s ease-in-out infinite alternate;
}
</style>