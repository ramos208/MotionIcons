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
      <path d="M2.75 0A2.744 2.744 0 0 0 0 2.75v18.5A2.744 2.744 0 0 0 2.75 24h18.5A2.744 2.744 0 0 0 24 21.25V2.75A2.744 2.744 0 0 0 21.25 0Zm9.902 5.506c.91.006 1.781.197 2.594.605-.891 1.87-1.888 3.8-2.832 5.682-.017.029-.086.13-.225.031-.8-.638-1.581-1.304-2.369-1.959-.223-.195-.442-.105-.55.133-.515 1.027-.952 1.883-1.465 2.91-.7 1.398-1.398 2.673-2.098 4.07-.064.142-.143.043-.143.043.538-3.258 1.643-10.807 1.717-11.1.055-.213.183-.36.42-.394.09-.012.18-.023.27-.023ZM17.78 8c.01-.003.016.022.045.082.48.935.803 2.554.487 4.238-.25 1.328-.849 2.487-1.737 3.512a7.715 7.715 0 0 1-3.224 2.207c-.735.268-1.498.362-2.288.361H6.275c-.654 0-.725-.224-.709-.238a923.24 923.24 0 0 1 4.309-5.906c.235-.258.417-.022.668.224 1.105.957 2.139 1.826 2.28 1.94.08.066.163.051.222-.033A971.241 971.241 0 0 1 17.779 8z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dunzo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dunzo (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dunzo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dunzo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dunzo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dunzo 3s ease-in-out infinite alternate;
}
</style>