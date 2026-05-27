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
      <path d="M3.981 0A3.993 3.993 0 0 0 0 3.981V20.02A3.993 3.993 0 0 0 3.981 24h10.983L12 16.8l-2.15 4.546H3.98c-.72 0-1.327-.608-1.327-1.327V3.98c0-.72.608-1.327 1.327-1.327h16.04c.72 0 1.327.608 1.327 1.327v16.04c0 .72-.608 1.327-1.327 1.327h-3.48L17.63 24h2.388A3.993 3.993 0 0 0 24 20.019V3.98A3.993 3.993 0 0 0 20.019 0zm4.324 4.217v3.858l3.341-1.93zm7.39 0l-3.341 1.929 3.34 1.929zM12 6.35L8.305 8.483 12 10.617l3.695-2.134zM8.104 8.832v4.266l3.695 2.133v-4.266zm7.792 0L12.2 10.965v4.266l3.695-2.133zm-8.146.204l-3.34 1.93 3.34 1.928zm8.5 0v3.858l3.34-1.929zm-8.146 4.47v3.859l3.341-1.93zm7.792 0l-3.341 1.93 3.34 1.929z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: quarkus
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for quarkus (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-quarkus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-quarkus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-quarkus 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-quarkus 3s ease-in-out infinite alternate;
}
</style>