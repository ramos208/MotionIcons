<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M7 6.00085H16.75C18.8567 6.00085 19.91 6.00085 20.6667 6.50644C20.9943 6.72532 21.2755 7.00657 21.4944 7.33414C22 8.09081 22 9.14416 22 11.2509C22 14.7621 22 16.5176 21.1573 17.7788C20.975 18.0517 20.7666 18.3054 20.5355 18.5364M3.46447 18.5364C2 17.072 2 14.7149 2 10.0009V6.94512C2 5.12865 2 4.22041 2.38032 3.53891C2.65142 3.05312 3.05227 2.65227 3.53806 2.38117C4.21956 2.00085 5.1278 2.00085 6.94427 2.00085C8.10802 2.00085 8.6899 2.00085 9.19926 2.19186C10.3622 2.62797 10.8418 3.68443 11.3666 4.73398L12 6.00085" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.4499 12.0009V13.9799M6.96289 15.5012H9.01487M14.986 15.5012H17.0379M14.986 18.4745H17.0379M6.96289 18.4745H9.01487M10.4499 20.0201V21.9991M13.4754 20.0201V21.9991M13.4646 12.0009V13.9799M10.0149 19.9684H13.986C14.5382 19.9684 14.986 19.5207 14.986 18.9684V14.9799C14.986 14.4276 14.5382 13.9799 13.986 13.9799H10.0149C9.46258 13.9799 9.01487 14.4276 9.01487 14.9799V18.9684C9.01487 19.5207 9.46258 19.9684 10.0149 19.9684Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ai-folder02
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for ai-folder02 (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-ai-folder02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ai-folder02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ai-folder02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-ai-folder02 2s ease-in-out infinite alternate;
}
</style>