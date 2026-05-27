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
      <path d="M16.9503 8.3183C17.198 7.68602 16.5075 6.92738 15.1266 5.41011C13.6701 3.80984 12.92 3.00959 11.9999 3C11.0798 3.00959 10.3297 3.80984 8.8732 5.41011C7.49228 6.92738 6.80182 7.68602 7.04953 8.3183C7.05858 8.34138 7.0684 8.36414 7.07899 8.38653C7.34917 8.95795 8.24467 8.99712 9.99989 8.9998V15.5C9.99989 15.965 9.99989 16.1975 10.051 16.3882C10.1897 16.9059 10.594 17.3102 11.1117 17.4489C11.3024 17.5 11.5349 17.5 11.9999 17.5C12.4648 17.5 12.6973 17.5 12.8881 17.4489C13.4057 17.3102 13.81 16.9059 13.9487 16.3882C13.9999 16.1975 13.9999 15.965 13.9999 15.5V8.9998C15.7551 8.99712 16.6506 8.95796 16.9208 8.38653C16.9314 8.36414 16.9412 8.34138 16.9503 8.3183Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.99998 21H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: upload02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for upload02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-upload02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-upload02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-upload02 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-upload02 3s ease-in-out infinite alternate;
}
</style>