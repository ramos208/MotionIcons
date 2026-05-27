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
      <path d="M18.5011 8.00838V2.01758M18.5011 8.00838C17.8011 8.00838 16.4933 6.01714 16.002 5.51221M18.5011 8.00838C19.201 8.00838 20.5088 6.01714 21.0001 5.51221" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.51287 13.5149V3.48587C6.51287 2.66424 7.17971 1.99817 8.00229 1.99817C8.82488 1.99817 9.49172 2.66423 9.49172 3.48587V8.68796M9.49172 8.68796V11.0116M9.49172 8.68796C10.2966 7.56953 12.0992 7.94205 12.4829 9.68091C12.4893 9.70978 12.4945 9.73886 12.4986 9.7681M12.5138 11.0076V10.0047C12.5138 9.92562 12.5098 9.84631 12.4986 9.7681M12.4986 9.7681C12.9919 8.41774 15.5029 8.92645 15.5029 10.861M15.5029 10.861V12.007M15.5029 10.861C15.9068 9.37047 18.5587 10.4122 18.5012 12.1546V15.3331C18.4983 17.0591 18.2102 18.3107 17.184 19.3401C16.236 20.4719 16.459 21.1055 16.4354 22.0018M6.51287 8.99062C5.19394 10.1845 3.69696 11.816 3.50583 12.2024C2.61652 13.5545 2.9328 14.6154 4.19663 16.4176C5.13716 17.7588 6.39863 19.2535 6.46472 19.3283C7.13732 20.0897 7.0055 20.6959 7.0055 21.9908" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: swipe-down06
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for swipe-down06 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-swipe-down06 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, 6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, 4px) skew(0deg); }
}

@keyframes motion-ai-idle-swipe-down06 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-swipe-down06 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-swipe-down06 3s ease-in-out infinite alternate;
}
</style>