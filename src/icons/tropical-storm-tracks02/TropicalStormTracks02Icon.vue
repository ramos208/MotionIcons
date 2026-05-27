<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M12.1564 7.23099L11.2883 6.15969L14.2119 4.24954C4.58902 2.72954 3.15548 8.6394 3.09662 8.90429L3.09093 8.9298L3.08206 8.96494C2.87776 9.71974 2.85964 10.5136 3.02917 11.2825C3.1987 12.0514 3.55113 12.774 4.05808 13.3919L4.92616 14.4632L2 16.3749C11.6227 17.904 13.0587 11.9839 13.1177 11.7185L13.1234 11.693L13.1322 11.6579C13.3366 10.9031 13.3547 10.1093 13.1852 9.34036C13.0157 8.57144 12.6633 7.84892 12.1564 7.23099Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.5 7V12.5C19.5 16.6421 16.1421 20 12 20M19.5 7C20.2002 7 21.5085 8.9943 22 9.5M19.5 7C18.7998 7 17.4915 8.9943 17 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tropical-storm-tracks02
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for tropical-storm-tracks02 (hugeicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tropical-storm-tracks02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tropical-storm-tracks02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tropical-storm-tracks02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tropical-storm-tracks02 3s ease-in-out infinite alternate;
}
</style>