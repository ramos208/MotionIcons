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
      <path d="M2 12C2.13134 15.1935 4.1976 21.442 11.2999 21.9778C11.718 22.0094 11.9271 22.0251 11.987 21.8984C12.047 21.7717 11.8959 21.6247 11.5937 21.3308L10.2375 20.0117" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 12.0001C21.8687 8.80658 19.8024 2.55807 12.7001 2.02225C12.282 1.99071 12.0729 1.97494 12.013 2.10167C11.953 2.2284 12.1041 2.37535 12.4063 2.66926L13.7625 3.98835" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.07586 13.4458C6.71281 12.0827 6.03128 11.4012 6.00104 10.5846C5.97079 9.76793 6.60363 9.13508 7.86933 7.86939C9.13502 6.6037 9.76786 5.97085 10.5845 6.0011C11.4012 6.03134 12.0827 6.71287 13.4457 8.07592L15.9241 10.5543C17.2872 11.9174 17.9687 12.5989 17.999 13.4156C18.0292 14.2322 17.3964 14.865 16.1307 16.1307C14.865 17.3964 14.2321 18.0293 13.4155 17.999C12.5988 17.9688 11.9173 17.2873 10.5543 15.9242L8.07586 13.4458Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: screen-rotation
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for screen-rotation (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-screen-rotation {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-screen-rotation {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-screen-rotation 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-screen-rotation 3s ease-in-out infinite alternate;
}
</style>