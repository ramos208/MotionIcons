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
      <path d="M10.98 0c-.235 0-.425.2-.425.446V8.92c0 .246-.19.446-.425.446h-.704c-.346 0-.547.41-.346.705l2.574 3.782c.17.25.522.25.692 0l2.574-3.782c.201-.295 0-.705-.346-.705h-.704a.436.436 0 0 1-.425-.446V.446A.436.436 0 0 0 13.02 0ZM7.387 1.562a.732.732 0 0 0-.405.161l-1.096.883a.77.77 0 0 0-.123 1.066.735.735 0 0 0 1.045.126l1.096-.882a.77.77 0 0 0 .123-1.067.738.738 0 0 0-.64-.287Zm9.346 0a.737.737 0 0 0-.64.287.77.77 0 0 0 .123 1.067l1.096.882c.323.26.79.204 1.045-.126a.77.77 0 0 0-.123-1.066l-1.096-.883a.733.733 0 0 0-.405-.16ZM3.039 6.036a.745.745 0 0 0-.675.48l-.512 1.326c-.15.39.037.831.42.985a.74.74 0 0 0 .965-.428l.512-1.325a.765.765 0 0 0-.419-.985.728.728 0 0 0-.291-.053Zm18.042 0a.738.738 0 0 0-.29.053.765.765 0 0 0-.42.985l.512 1.325a.74.74 0 0 0 .965.428.765.765 0 0 0 .42-.985l-.512-1.325a.745.745 0 0 0-.675-.481ZM0 12a12 12 0 0 0 .913 4.592 11.997 11.997 0 0 0 2.42 3.703c.684-.681 1.565-1 2.489-1.053.925-.055 1.893.156 2.745.532a8.497 8.497 0 0 0 6.866 0c1.702-.751 3.865-.843 5.234.52a11.997 11.997 0 0 0 2.42-3.702A12 12 0 0 0 24 12h-3.687c-1.301 0-2.315 1.094-2.813 2.296a6 6 0 0 1-11.087 0C5.915 13.094 4.902 12 3.601 12Zm5.875 7.769c-.727.04-1.407.275-1.957.727-.073.06-.14.119-.204.18a11.997 11.997 0 0 0 3.694 2.41 12 12 0 0 0 9.184 0 11.997 11.997 0 0 0 3.694-2.41 3.977 3.977 0 0 0-.204-.18c-1.173-.963-2.96-.892-4.436-.24a9.023 9.023 0 0 1-7.292 0c-.478-.211-1.418-.546-2.48-.487Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: abdownloadmanager
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for abdownloadmanager (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-abdownloadmanager {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, 6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, 4px) skew(0deg); }
}

@keyframes motion-ai-idle-abdownloadmanager {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-abdownloadmanager 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-abdownloadmanager 3s ease-in-out infinite alternate;
}
</style>