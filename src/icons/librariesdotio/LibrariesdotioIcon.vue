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
      <path d="M3.152 23.998c-1.164-.054-1.75.044-2.021-.48-.265-.306-.138-3.465-.185-4.694 1.702-1.365 3.42-2.688 5.145-4.025 0 2.892.147 8.186-.17 8.72-.27.56-1.33.474-2.77.479zm6.468-.62c-.304-.006-.171-6.048-.204-11.204 1.704-1.357 3.42-2.678 5.143-4.01-.028 5.924.123 14.775-.108 15.098-.334.71-1.064.543-2.467.585-1.094-.06-2.058.16-2.364-.469zm8.41.018c-.174-.33-.158-7.898-.104-15.204a500.566 500.566 0 015.12 3.977c-.027 1.216.103 11.184-.165 11.18-.28.47-.641.488-2.44.488-.933-.085-1.852.18-2.411-.441zM.979 15.564C.957 10.754.927 6.047.999 1.1c.028-.633.251-1.003.94-1.041.538-.07 3.012-.04 3.463.05a.867.867 0 01.624.65c.097 2.718.075 6.154.097 10.776-1.717 1.341-3.431 2.678-5.144 4.024zm8.458-6.656c-.048-2.518 0-7.016.03-7.696.077-1.552 1.087-1.115 2.41-1.2 1.977-.018 2.279.097 2.5.455.246.368.204 2.598.204 4.422-1.693 1.323-3.594 2.83-5.144 4.017zm13.583-.013c-1.706-1.338-3.353-2.633-5.064-3.964.015-1.322-.064-2.744.01-3.995.107-.54.257-.836 1.16-.866 1.118-.122 2.726-.09 3.419.142.524.124.52 1.379.485 5.226z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: librariesdotio
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for librariesdotio (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-librariesdotio {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-librariesdotio {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-librariesdotio 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-librariesdotio 3s ease-in-out infinite alternate;
}
</style>