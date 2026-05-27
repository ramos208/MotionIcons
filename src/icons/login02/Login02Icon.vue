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
      <path d="M20.6073 4.00087C21 4.61597 21 5.41166 21 7.00304V16.997C21 18.5883 21 19.384 20.6073 19.9991C20.5372 20.109 20.4586 20.2132 20.3722 20.3108C19.8886 20.8572 19.1233 21.0758 17.5929 21.513C16.0586 21.9513 15.2914 22.1704 14.736 21.8417C14.6396 21.7847 14.55 21.7171 14.4687 21.6402C14 21.1965 14 20.3988 14 18.8034V5.19662C14 3.60122 14 2.80351 14.4687 2.35982C14.55 2.28288 14.6396 2.21527 14.736 2.15827C15.2914 1.82956 16.0586 2.0487 17.5929 2.48699C19.1233 2.92418 19.8886 3.14278 20.3722 3.68925C20.4586 3.78684 20.5372 3.89103 20.6073 4.00087Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 4H11.9829C10.0812 4 9.13039 4 8.5396 4.58579C8.21023 4.91238 8.06449 5.34994 8 6M14 20H11.9829C10.0812 20 9.13039 20 8.5396 19.4142C8.21023 19.0876 8.06449 18.6501 8 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 12H3M8.50005 9.49994C8.50005 9.49994 11 11.3412 11 12C11 12.6588 8.50003 14.4999 8.50003 14.4999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: login02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for login02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-login02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-login02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-login02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-login02 3s ease-in-out infinite alternate;
}
</style>