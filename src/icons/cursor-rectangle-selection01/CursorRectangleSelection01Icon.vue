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
      <path d="M12.7723 19.6052L10.8168 13.9874L10.8168 13.9874C10.0814 11.8748 9.71367 10.8184 10.2664 10.2662C10.8191 9.71389 11.8762 10.0813 13.9906 10.8162L19.601 12.7661C20.7738 13.1737 21.3603 13.3775 21.4868 13.7723C21.5217 13.8811 21.5337 13.996 21.5222 14.1096C21.4802 14.522 20.9488 14.8429 19.8859 15.4845C19.2044 15.8958 18.8637 16.1015 18.7728 16.4119C18.7471 16.4998 18.7361 16.5912 18.7402 16.6827C18.7549 17.0057 19.0371 17.2863 19.6016 17.8473L21.4569 19.6912L21.4569 19.6912C21.7347 19.9673 21.8735 20.1053 21.9373 20.2597C22.0206 20.4617 22.0209 20.6885 21.9381 20.8907C21.8748 21.0453 21.7363 21.1837 21.4593 21.4605L21.4593 21.4605L21.4593 21.4605C21.1829 21.7366 21.0448 21.8747 20.8904 21.9379C20.6884 22.0207 20.4619 22.0207 20.2599 21.9379C20.1055 21.8747 19.9673 21.7366 19.691 21.4605L19.691 21.4605L17.8288 19.5998L17.8288 19.5998C17.2736 19.045 16.9959 18.7676 16.6773 18.7509C16.5809 18.7459 16.4843 18.7577 16.392 18.7858C16.0867 18.8786 15.8841 19.2146 15.4789 19.8867C14.8453 20.9377 14.5285 21.4632 14.1218 21.5094C14.0019 21.5231 13.8804 21.5104 13.7658 21.4724C13.3774 21.3435 13.1757 20.764 12.7723 19.6052Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 8.5V11.5M11.5 2H8.5M8.5 18H9M18 9V8.5M4.5 18C3.11929 18 2 16.8807 2 15.5M2 4.5C2 3.11929 3.11929 2 4.5 2M18 4.5C18 3.11929 16.8807 2 15.5 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cursor-rectangle-selection01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cursor-rectangle-selection01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cursor-rectangle-selection01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cursor-rectangle-selection01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cursor-rectangle-selection01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cursor-rectangle-selection01 3s ease-in-out infinite alternate;
}
</style>