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
      <path d="M14.0244 21H12.0222C7.29769 21 4.93543 21 3.46772 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38116 4.53806C2.65287 4.05227 3.0546 3.65142 3.54148 3.38032C4.22449 3 5.13474 3 6.95525 3C8.12158 3 8.70475 3 9.21524 3.19101C10.3808 3.62712 10.8614 4.68358 11.3874 5.73313L12.0222 7M8.01332 7H16.7827C18.8941 7 19.9498 7 20.7081 7.50559C21.0364 7.72447 21.3183 8.00572 21.5377 8.33329C21.8193 8.75388 21.9444 9.26614 22 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 18H17.5754C16.6713 18 16.2192 18 16.0534 17.7463C15.8875 17.4927 16.1201 17.157 16.5853 16.4855L17.0384 15.8315C17.1519 15.6677 17.2086 15.5858 17.227 15.4938C17.2454 15.4019 17.2238 15.3083 17.1805 15.1209L16.9669 14.1961C16.8391 13.6427 16.7753 13.366 16.9485 13.183C17.1217 13 17.4475 13 18.0992 13H19.9008C20.5525 13 20.8783 13 21.0515 13.183C21.2248 13.366 21.1609 13.6427 21.0331 14.1961L20.8195 15.1209C20.7762 15.3083 20.7546 15.4019 20.773 15.4938C20.7914 15.5858 20.8481 15.6677 20.9616 15.8315L21.4147 16.4855C21.8799 17.157 22.1125 17.4927 21.9466 17.7463C21.7808 18 21.3287 18 20.4246 18H19ZM19 18V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: folder-pin
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for folder-pin (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-folder-pin {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-folder-pin {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-folder-pin 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-folder-pin 3s ease-in-out infinite alternate;
}
</style>