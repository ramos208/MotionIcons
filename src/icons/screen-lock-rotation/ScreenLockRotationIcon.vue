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
      <path d="M12.0339 3.74684C11.735 3.60141 11.4456 3.52354 11.1423 3.51237C10.0481 3.47207 9.20023 4.31523 7.50448 6.00155C5.80872 7.68786 4.96084 8.53102 5.00137 9.61906C5.04189 10.7071 5.95499 11.6151 7.78119 13.4311L11.1017 16.7332C12.9279 18.5492 13.841 19.4573 14.9352 19.4975C16.0293 19.5378 16.8772 18.6947 18.5729 17.0084C19.9404 15.6485 20.7565 14.8369 21 14.0031" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.99998 12.5042C3.11819 15.3761 4.97782 20.9955 11.3699 21.4774C11.7462 21.5058 11.9344 21.5199 11.9883 21.406C12.0423 21.292 11.9063 21.1598 11.6344 20.8955L10.4137 19.7092" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.7365 5.67839L15.7364 4.28742C15.7364 4.08196 15.745 3.87395 15.8187 3.68209C16.0147 3.17138 16.5341 2.50232 17.4796 2.50232C18.4251 2.50232 18.9648 3.17138 19.1609 3.68209C19.2345 3.87395 19.2431 4.08196 19.2431 4.28742L19.2431 5.67839M15.806 11.5039H19.194C20.1914 11.5039 21 10.6969 21 9.70151V7.69927C21 6.70385 20.1914 5.89691 19.194 5.89691H15.806C14.8086 5.89691 14 6.70385 14 7.69927V9.70151C14 10.6969 14.8086 11.5039 15.806 11.5039Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: screen-lock-rotation
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for screen-lock-rotation (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-screen-lock-rotation {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-screen-lock-rotation {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-screen-lock-rotation 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-screen-lock-rotation 3s ease-in-out infinite alternate;
}
</style>