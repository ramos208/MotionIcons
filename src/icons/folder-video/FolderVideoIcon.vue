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
      <path d="M8.00001 7.00116H16.75C18.8567 7.00116 19.9101 7.00116 20.6667 7.5069C20.9943 7.72584 21.2756 8.00717 21.4944 8.33484C21.9796 9.06117 21.9992 10.0608 22 12.0026V13.0029M12 7.00116L11.3666 5.73392C10.8418 4.68406 10.3622 3.6273 9.19927 3.19106C8.68991 3 8.10803 3 6.94428 3C5.1278 3 4.21957 3 3.53807 3.38043C3.05227 3.65161 2.65142 4.05257 2.38032 4.53851C2 5.22021 2 6.12871 2 7.94571V11.0023C2 15.7177 2 18.0754 3.46447 19.5403C4.70529 20.7815 6.58688 20.9711 10 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 18.5L20.4453 19.4635C21.1297 19.9198 21.4719 20.1479 21.7359 20.0066C22 19.8653 22 19.454 22 18.6315V17.3685C22 16.546 22 16.1347 21.7359 15.9934C21.4719 15.8521 21.1297 16.0802 20.4453 16.5365L19 17.5M19 18.5V17.5M19 18.5C19 19.4346 19 19.9019 18.799 20.25C18.6674 20.478 18.478 20.6674 18.25 20.799C17.9019 21 17.4346 21 16.5 21H16C14.5858 21 13.8787 21 13.4393 20.5607C13 20.1213 13 19.4142 13 18C13 16.5858 13 15.8787 13.4393 15.4393C13.8787 15 14.5858 15 16 15H16.5C17.4346 15 17.9019 15 18.25 15.201C18.478 15.3326 18.6674 15.522 18.799 15.75C19 16.0981 19 16.5654 19 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: folder-video
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for folder-video (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-folder-video {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-folder-video {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-folder-video 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-folder-video 3s ease-in-out infinite alternate;
}
</style>