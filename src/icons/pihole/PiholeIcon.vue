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
      <path d="M4.344 0c.238 4.792 3.256 7.056 6.252 7.376.165-1.692-4.319-5.6-4.319-5.6-.008-.011.009-.025.019-.014 0 0 4.648 4.01 5.423 5.645 2.762-.15 5.196-1.947 5-4.912 0 0-4.12-.613-5 4.618C11.48 2.753 8.993 0 4.344 0zM12 7.682v.002a3.68 3.68 0 0 0-2.591 1.077L4.94 13.227a3.683 3.683 0 0 0-.86 1.356 3.31 3.31 0 0 0-.237 1.255A3.681 3.681 0 0 0 4.92 18.45l4.464 4.466a3.69 3.69 0 0 0 2.251 1.06l.002.001c.093.01.187.015.28.017l-.1-.008c.06.003.117.009.177.009l-.077-.001L12 24l-.004-.005a3.68 3.68 0 0 0 2.61-1.077l4.469-4.465a3.683 3.683 0 0 0 1.006-1.888l.012-.063a3.682 3.682 0 0 0 .057-.541l.003-.061c0-.017.003-.05.004-.06h-.002a3.683 3.683 0 0 0-1.077-2.607l-4.466-4.468a3.694 3.694 0 0 0-1.564-.927l-.07-.02a3.43 3.43 0 0 0-.946-.133L12 7.682zm3.165 3.357c.023 1.748-1.33 3.078-1.33 4.806.164 2.227 1.733 3.207 3.266 3.146-.035.003-.068.007-.104.009-1.847.135-3.209-1.326-5.002-1.326-2.23.164-3.21 1.736-3.147 3.27l-.008-.104c-.133-1.847 1.328-3.21 1.328-5.002-.173-2.32-1.867-3.284-3.46-3.132.1-.011.203-.021.31-.027 1.847-.133 3.209 1.328 5.002 1.328 2.082-.155 3.074-1.536 3.145-2.968zM4.344 0c.238 4.792 3.256 7.056 6.252 7.376.165-1.692-4.319-5.6-4.319-5.6-.008-.011.009-.025.019-.014 0 0 4.648 4.01 5.423 5.645 2.762-.15 5.196-1.947 5-4.912 0 0-4.12-.613-5 4.618C11.48 2.753 8.993 0 4.344 0zM12 7.682v.002a3.68 3.68 0 0 0-2.591 1.077L4.94 13.227a3.683 3.683 0 0 0-.86 1.356 3.31 3.31 0 0 0-.237 1.255A3.681 3.681 0 0 0 4.92 18.45l4.464 4.466a3.69 3.69 0 0 0 2.251 1.06l.002.001c.093.01.187.015.28.017l-.1-.008c.06.003.117.009.177.009l-.077-.001L12 24l-.004-.005a3.68 3.68 0 0 0 2.61-1.077l4.469-4.465a3.683 3.683 0 0 0 1.006-1.888l.012-.063a3.682 3.682 0 0 0 .057-.541l.003-.061c0-.017.003-.05.004-.06h-.002a3.683 3.683 0 0 0-1.077-2.607l-4.466-4.468a3.694 3.694 0 0 0-1.564-.927l-.07-.02a3.43 3.43 0 0 0-.946-.133L12 7.682zm3.165 3.357c.023 1.748-1.33 3.078-1.33 4.806.164 2.227 1.733 3.207 3.266 3.146-.035.003-.068.007-.104.009-1.847.135-3.209-1.326-5.002-1.326-2.23.164-3.21 1.736-3.147 3.27l-.008-.104c-.133-1.847 1.328-3.21 1.328-5.002-.173-2.32-1.867-3.284-3.46-3.132.1-.011.203-.021.31-.027 1.847-.133 3.209 1.328 5.002 1.328 2.082-.155 3.074-1.536 3.145-2.968z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pihole
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pihole (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pihole {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pihole {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pihole 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pihole 3s ease-in-out infinite alternate;
}
</style>