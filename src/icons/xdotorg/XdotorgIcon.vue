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
      <path d="M19.94 1.9l-9.092 11.874 4.598 6.392a14.29 14.29 0 0 1-2.56.228c-2.387 0-4.582-.577-6.316-1.542l6.556-8.627-6.031-8.311L2.23 1.91 9.8 12.48l-4.332 5.66c-1.692-1.266-2.729-2.965-2.729-4.832 0-2.13 1.348-4.042 3.48-5.342l-.655-.999C2.22 8.386 0 10.876 0 13.71c0 2.432 1.635 4.61 4.212 6.075l-1.765 2.307h1.661l1.299-1.709c1.892.83 4.158 1.314 6.592 1.314a17.43 17.43 0 0 0 4.188-.501l.65.903h4.865l-1.729-2.422C22.443 18.214 24 16.082 24 13.71c0-2.94-2.39-5.512-5.948-6.9l-.217.311c3.099 1.214 5.195 3.531 5.195 6.188 0 2.202-1.44 4.17-3.698 5.47l-5.153-7.22 7.382-9.658zM12 5.755c-.586 0-1.212.046-1.775.1 1.004 1.309 1.836 2.417 2.795 3.676-.538-1.157-1.644-2.268-1.261-2.839.378-.565 1.075-.47 1.128-.47 1.118 0 2.194.127 3.2.36l.235-.324C14.98 5.91 13.523 5.754 12 5.754z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: xdotorg
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for xdotorg (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-xdotorg {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-xdotorg {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-xdotorg 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-xdotorg 3s ease-in-out infinite alternate;
}
</style>