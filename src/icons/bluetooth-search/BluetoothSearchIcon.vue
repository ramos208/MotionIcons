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
      <path d="M8.77349 11.5C8.8749 7.08726 8.48911 3.78672 9.15201 3.18692C9.21537 3.12959 9.28932 3.08325 9.36678 3.04779C10.2369 2.64938 12.688 4.83294 14.2923 6.22156C14.5558 6.44968 14.5742 6.85339 14.3152 7.08672C13.1694 8.11876 10.8318 9.95773 8.77349 11.5ZM8.77349 11.5L2.51051 16.2903M8.77349 11.5C8.8749 15.9127 8.48911 19.2133 9.15201 19.8131C9.21537 19.8704 9.28942 19.9168 9.36688 19.9523C9.74875 20.127 10.435 19.8046 11.2205 19.2705M2.5 6.72564L11.4146 13.5528" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.6322 19.1589L21.5 21M20.7074 16.5964C20.7074 18.5826 19.094 20.1928 17.1037 20.1928C15.1134 20.1928 13.5 18.5826 13.5 16.5964C13.5 14.6102 15.1134 13 17.1037 13C19.094 13 20.7074 14.6102 20.7074 16.5964Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bluetooth-search
// Category: search
// Physics Presets: Dynamic kinetic adaptation for bluetooth-search (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bluetooth-search {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bluetooth-search {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bluetooth-search 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bluetooth-search 3s ease-in-out infinite alternate;
}
</style>