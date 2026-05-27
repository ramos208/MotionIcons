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
      <path d="M20.0007 9.90907V7.81816C20.0007 6.12492 20.0007 5.2783 19.7327 4.60212C19.3019 3.51508 18.3909 2.65763 17.2359 2.25218C16.5174 1.99998 15.6179 1.99998 13.8188 1.99998C10.6705 1.99998 9.09624 1.99998 7.83897 2.44133C5.81774 3.15086 4.22342 4.6514 3.46954 6.55373C3.00061 7.73704 3.00061 9.21863 3.00061 12.1818V14.7273C3.00061 17.7966 3.00061 19.3313 3.84831 20.3971C4.09119 20.7025 4.37923 20.9736 4.70368 21.2022C5.83607 22 7.46667 22 10.7279 22H11.5007C12.0353 22 13.0344 22 13.5007 21.9972M3.00061 12C3.00061 10.159 4.49299 8.66665 6.33394 8.66665C6.99972 8.66665 7.78464 8.78332 8.43197 8.60987C9.00712 8.45575 9.45637 8.0065 9.61048 7.43134C9.78393 6.78402 9.66727 5.9991 9.66727 5.33331C9.66727 3.49236 11.1597 1.99998 13.0007 1.99998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.7527 15.8111C20.8576 14.5466 18.9229 13.5141 17.4443 14.2068C15.5973 15.0722 15.7584 17.2594 18.0395 17.375C19.0546 17.4265 19.9425 17.3169 20.5459 17.9708C21.1493 18.6248 21.4108 20.2901 19.6322 20.8552C17.8535 21.4204 15.9996 20.4125 15.9996 19.1831M18.4707 13V13.9776M18.4707 21.2204V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: file-dollar
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for file-dollar (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-file-dollar {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-file-dollar {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-file-dollar 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-file-dollar 3s ease-in-out infinite alternate;
}
</style>