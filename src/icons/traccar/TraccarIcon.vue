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
      <path d="M6.0011 1.6096C.2624 4.9226-1.7038 12.2603 1.6096 17.9989c3.313 5.7387 10.6507 7.7049 16.3893 4.3916 5.7387-3.313 7.7049-10.6507 4.3916-16.3894C19.0775.2624 11.7398-1.704 6.0011 1.6096m.7057 1.2224c5.0637-2.9233 11.538-1.1884 14.4616 3.8748 2.9232 5.0636 1.1884 11.5379-3.8748 14.4616-5.0636 2.9232-11.538 1.1884-14.4616-3.8748C-.0912 12.2299 1.6436 5.7556 6.7068 2.832m3.9141 14.3151a3.7678 3.7678 0 1 1-3.768-6.5262l1.884 3.2631Zm5.7255-11.3953-1.1763 1.495c.6649.5112 1.2792 1.1559 1.7246 1.9274s.6967 1.6258.8069 2.4573l1.8828-.2712c-.1405-1.074-.4828-2.1316-1.0581-3.128-.5753-.9965-1.3201-1.8218-2.1799-2.4805M14.074 8.7632l-1.1763 1.4949c.2745.216.5484.479.7338.8.1853.321.2761.6897.3259 1.0355l1.8828-.2713c-.0802-.5881-.2619-1.1608-.5769-1.7064-.3154-.5455-.7201-.9896-1.1892-1.353Zm-3.8317 3.708a.942.942 0 1 0 1.884 0 .942.942 0 1 0-1.884 0"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: traccar
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for traccar (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-traccar {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-traccar {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-traccar 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-traccar 3s ease-in-out infinite alternate;
}
</style>