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
      <path d="M12.024.017V0L12 .008 11.976 0v.017L.812 3.892l1.605 14.875 9.559 5.207V24l.024-.013.024.013v-.026l9.559-5.207 1.605-14.875L12.024.017zm6.868 14.244c-1.094 2.632-3.104 4.02-6.031 4.166-2.829 0-4.661-1.7-4.66-1.7-1.163-.905-1.963-2.046-2.398-3.417-.695-.76-.702-.841-.774-1.145-.072-.303.045-.388.249-.685.136-.198.168-.483.098-.85-.173-.24-.273-.616-.3-1.128 0-.247.166-.508.496-.783.33-.275.533-.486.607-.632.056-.079.077-.423.065-1.031-.004-.598.328-.923.995-.975 1-.08 1.565-.832 1.879-1.174.21-.228.52-.339.91-.341.551-.026 1.052.185 1.484.62 1.075-.055 2.176.235 3.292.863 1.586.942 2.451 1.962 2.596 3.055-.17 1.439-2.102 1.4-5.788-.113-1.93.546-2.878 1.73-2.846 3.552-.001 1.672.808 2.886 2.422 3.643-.787-.772-1.122-1.422-1.01-1.959 1.637 1.937 3.5 2.662 5.588 2.173-.92.032-1.65-.264-2.198-.893 1.411-.035 2.743-.69 3.998-1.972-.724.576-1.482.794-2.284.657 2.173-1.709 2.942-3.702 2.307-5.98l-.002-.006a3.02 3.02 0 0 1 .788 2.03c.014.783-.249 1.61-.795 2.477.408-.318.88-1.002 1.413-2.047.23 2.117-.625 3.724-2.574 4.825.622-.057 1.448-.467 2.473-1.23zm-5.567-6.63a.319.319 0 1 1 .638 0 .319.319 0 0 1-.638 0z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ngrx
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ngrx (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ngrx {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ngrx {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ngrx 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ngrx 3s ease-in-out infinite alternate;
}
</style>